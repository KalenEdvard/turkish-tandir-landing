export type MenuVariant = {
  label: string;
  price: number;
};

export type MenuItem = {
  name: string;
  description?: string;
  price: number;
  image?: string;
  variants?: MenuVariant[];
};

export type MenuCategory = {
  id: string;
  label: string;
  defaultImage: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'tandir',
    label: 'Тандыр Кебаб',
    defaultImage: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=260&fit=crop',
    items: [
      { name: 'Люля-кебаб из говядины', description: 'рубленое мясо на шампуре, запечённое в тандыре', price: 320 },
      { name: 'Адана кебаб', description: 'острый кебаб по-турецки, специи, перец', price: 340 },
      { name: 'Шиш-кебаб куриный', description: 'кусочки куриного филе, маринад, овощи гриль', price: 290 },
      { name: 'Шиш-кебаб из говядины', description: 'кусочки говядины, маринад, овощи гриль', price: 350 },
    ],
  },
  {
    id: 'shashlyk',
    label: 'Шашлык',
    defaultImage: 'https://images.unsplash.com/photo-1598515213692-d872a9adbe45?w=400&h=260&fit=crop',
    items: [
      { name: 'Табака', description: 'Целый табака, подаётся с луком, салатом и чесночным соусом', price: 450 },
    ],
  },
  {
    id: 'doner',
    label: 'Донер',
    defaultImage: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=260&fit=crop',
    items: [
      { name: 'Донер куриный', description: 'лаваш, курица, овощи, соус на выбор', price: 220 },
      { name: 'Донер говяжий', description: 'лаваш, говядина, овощи, соус на выбор', price: 250 },
      { name: 'Донер двойной', description: 'двойная порция мяса', price: 300 },
      { name: 'Донер-тарелка', description: 'мясо, рис, овощи, без лаваша', price: 280 },
    ],
  },
  {
    id: 'lahmajun',
    label: 'Лахмаджун и Пиде',
    defaultImage: 'https://images.unsplash.com/photo-1601315379734-0adc7fd0cd0e?w=400&h=260&fit=crop',
    items: [
      { name: 'Лахмаджун', description: 'тонкая турецкая лепёшка с мясным фаршем и специями', price: 180 },
      { name: 'Пиде с сыром', description: 'турецкая лодочка с сыром', price: 230 },
      { name: 'Пиде с мясом', description: 'турецкая лодочка с мясной начинкой', price: 260 },
      { name: 'Пиде со шпинатом и сыром', price: 240 },
    ],
  },
  {
    id: 'salads',
    label: 'Салаты и закуски',
    defaultImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=260&fit=crop',
    items: [
      { name: 'Ачик-чучук', description: 'свежие томаты, лук, зелень', price: 120 },
      { name: 'Салат из свежих овощей', price: 130 },
      { name: 'Хумус', description: 'подаётся с лепёшкой', price: 150 },
      { name: 'Соус чесночный / острый', price: 40 },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    defaultImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop',
    items: [
      { name: 'Айран', price: 80 },
      { name: 'Турецкий чай', price: 60 },
      { name: 'Компот', price: 70 },
      { name: 'Кола / Фанта / Спрайт', price: 90 },
    ],
  },
];
