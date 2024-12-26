export type AnimalName = {
  displayName: string;
  emoji: string;
  gender: string;
};

const animals: AnimalName[] = [
  { displayName: "лось", emoji: "🦌", gender: "male" },
  { displayName: "мамонт", emoji: "🐘", gender: "male" },
  { displayName: "медведь", emoji: "🐻", gender: "male" },
  { displayName: "енот", emoji: "🦝", gender: "male" },
  { displayName: "пингвин", emoji: "🐧", gender: "male" },
  { displayName: "лемур", emoji: "🐒", gender: "male" },
  { displayName: "кот", emoji: "🐱", gender: "male" },
  { displayName: "хомяк", emoji: "🐹", gender: "male" },
  { displayName: "слон", emoji: "🐘", gender: "male" },
  { displayName: "ёжик", emoji: "🦔", gender: "male" },
  { displayName: "лев", emoji: "🦁", gender: "male" },
  { displayName: "тигр", emoji: "🐅", gender: "male" },
  { displayName: "волк", emoji: "🐺", gender: "male" },
  { displayName: "заяц", emoji: "🐇", gender: "male" },
  { displayName: "белка", emoji: "🐿️", gender: "female" },
  { displayName: "бегемот", emoji: "🦛", gender: "male" },
  { displayName: "попугай", emoji: "🦜", gender: "male" },
  { displayName: "крокодил", emoji: "🐊", gender: "male" },
  { displayName: "дельфин", emoji: "🐬", gender: "male" },
  { displayName: "кит", emoji: "🐋", gender: "male" },
  { displayName: "лиса", emoji: "🦊", gender: "female" },
  { displayName: "осьминог", emoji: "🐙", gender: "male" },
  { displayName: "фламинго", emoji: "🦩", gender: "female" },
  { displayName: "лягушонок", emoji: "🐸", gender: "male" },
  { displayName: "жираф", emoji: "🦒", gender: "male" },
  { displayName: "сурикат", emoji: "🦦", gender: "male" },
  { displayName: "барсук", emoji: "🦡", gender: "male" },
  { displayName: "орёл", emoji: "🦅", gender: "male" },
  { displayName: "ворон", emoji: "🐦", gender: "male" },
  { displayName: "лебедь", emoji: "🦢", gender: "female" },
  { displayName: "сова", emoji: "🦉", gender: "female" },
  { displayName: "белый медведь", emoji: "🐻‍❄️", gender: "male" },
  { displayName: "рыбка", emoji: "🐠", gender: "female" },
  { displayName: "черепаха", emoji: "🐢", gender: "female" },
  { displayName: "зебра", emoji: "🦓", gender: "female" },
  { displayName: "скунс", emoji: "🦨", gender: "male" },
  { displayName: "муравей", emoji: "🐜", gender: "male" },
  { displayName: "улитка", emoji: "🐌", gender: "female" },
  { displayName: "божья коровка", emoji: "🐞", gender: "female" },
  { displayName: "бабочка", emoji: "🦋", gender: "female" },
  { displayName: "паук", emoji: "🕷️", gender: "male" },
  { displayName: "скорпион", emoji: "🦂", gender: "male" },
  { displayName: "кенгуру", emoji: "🦘", gender: "male" },
  { displayName: "коала", emoji: "🐨", gender: "female" },
  { displayName: "панда", emoji: "🐼", gender: "female" },
  { displayName: "утконос", emoji: "🦫", gender: "male" },
  { displayName: "альпака", emoji: "🦙", gender: "female" },
  { displayName: "лама", emoji: "🦙", gender: "female" },
  { displayName: "ленивец", emoji: "🦥", gender: "male" },
  { displayName: "северный олень", emoji: "🦌", gender: "male" },
  { displayName: "морская звезда", emoji: "🌟", gender: "female" },
];

export const getUnknownName = () => {
  const index = Math.floor(Math.random() * (animals.length - 1));
  return animals[index];
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
