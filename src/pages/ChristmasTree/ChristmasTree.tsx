import { FormEvent, useEffect, useMemo, useState } from "react";
import { addWish, getApprovedWishes, Wish } from "../../client/API.ts";
import s from "./ChristmasTree.module.css";

export const ChristmasTreePage = () => {
  const [wishes, setWishes] = useState<Array<Wish>>([]);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

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
      const { success, data } = await addWish(messageToSend, name);

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
      }
    }
  };

  const wishCards = useMemo(() => {
    return wishes.map((data) => {
      return (
        <div key={`${data.id}-${data.name}-${data.message}`} className={s.card}>
          <div className={s.cardName}>{data.name}</div>
          <div className={s.cardMessage}>{data.message}</div>
        </div>
      );
    });
  }, [wishes]);

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <p>Сегодня можно просто написать публичное пожелание на Новый год</p>
        <input
          className={s.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Твое имя (опционально)"}
        />
        <textarea
          className={s.input}
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
