import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { addWish, getApprovedWishes, Wish } from "../../client/API.ts";
import s from "./ChristmasTree.module.css";
import {
  AnimalName,
  capitalizeFirstLetter,
  getUnknownName,
} from "../../client/utils.ts";
import CloseIcon from "../../assets/icons/close.svg?react";

export const ChristmasTreePage = () => {
  const [wishes, setWishes] = useState<Array<Wish>>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [animal, setAnimal] = useState<AnimalName>();

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    popupRef.current?.setAttribute("popover", "manual");
  }, []);

  useEffect(() => {
    const fetchWishes = async () => {
      const data = await getApprovedWishes();
      setWishes(data || []);
    };

    void fetchWishes();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const messageToSend = message.trim();

    if (messageToSend) {
      const { emoji, displayName, gender } = getUnknownName();

      const prefix = gender === "female" ? "Неопознанная" : "Неопознанный";
      const capitalizedName = capitalizeFirstLetter(displayName);

      displayName[0].toUpperCase();
      const userName = `${emoji} ${prefix} ${capitalizedName}`;

      const { success, data } = await addWish(messageToSend, userName);

      if (success) {
        const mockedWish = {
          id: -1,
          message,
          approved: false,
          created_at: "",
          name,
        };

        const wishFromServer = data ? data[0] : null;

        setWishes([wishFromServer || mockedWish, ...wishes]);
        setMessage("");
        setName("");
        popupRef.current?.showPopover();
        setAnimal({ emoji, displayName, gender });
      }
    }
  };

  const handleClosePopup = () => {
    popupRef.current?.hidePopover();
    setAnimal(undefined);
  };

  const wishCards = useMemo(() => {
    return wishes.map((data) => {
      return (
        <div key={`${data.id}-${data.name}-${data.message}`} className={s.card}>
          <div className={s.cardHeader}>
            <div className={s.cardName}>{data.name}</div>
            {!data.approved && (
              <div className={s.moderationTag}>На модерации</div>
            )}
          </div>
          <div className={s.cardMessage}>{data.message}</div>
        </div>
      );
    });
  }, [wishes]);

  return (
    <div className={s.container}>
      <div ref={popupRef} className={s.popup}>
        <h1 className={s.popupTitle}>
          Твое тотемное животное
          <button onClick={handleClosePopup} className={s.closeButton}>
            <CloseIcon />
          </button>
        </h1>

        <div className={s.popupEmoji}>{animal?.emoji || "❌"}</div>
        <div>{animal?.displayName || "Что-то пошло не так"}</div>
      </div>
      <form className={s.form} onSubmit={handleSubmit}>
        <p className={s.text}>
          Сегодня у тебя есть возможность написать вдохновляющее пожелание для
          себя или окружающих. <br />
          <br /> Кто знает, возможно, именно твоё пожелание станет для кого-то
          источником мотивации.
        </p>
        <textarea
          className={s.input}
          maxLength={200}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={"Твое пожелание"}
        />
        <button
          disabled={message === ""}
          className={s.submitButton}
          type="submit"
        >
          <p>Отправить</p>
        </button>
      </form>
      <div className={s.cardsContainer}>{wishCards}</div>
    </div>
  );
};
