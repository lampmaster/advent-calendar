const anonymousNames = [
  "Неопознанный Лось",
  "Неопознанный Мамонт",
  "Неопознанный Медведь",
  "Неопознанный Енот",
  "Неопознанный Пингвин",
  "Неопознанный Лемур",
  "Неопознанный Кот",
  "Неопознанный Хомяк",
  "Неопознанный Слон",
  "Неопознанный Ёжик",
  "Неопознанный Лев",
  "Неопознанный Тигр",
  "Неопознанный Волк",
  "Неопознанный Заяц",
  "Неопознанный Белка",
  "Неопознанный Бегемот",
  "Неопознанный Попугай",
  "Неопознанный Крокодил",
  "Неопознанный Дельфин",
  "Неопознанный Кит",
  "Неопознанный Лиса",
  "Неопознанный Осьминог",
  "Неопознанный Фламинго",
  "Неопознанный Лягушонок",
  "Неопознанный Жираф",
  "Неопознанный Сурикат",
  "Неопознанный Барсук",
  "Неопознанный Ворон",
  "Неопознанный Аист",
  "Неопознанный Паук",
];

export const getUnknownName = () => {
  const index = Math.floor(Math.random() * (anonymousNames.length - 1));
  return anonymousNames[index];
};
