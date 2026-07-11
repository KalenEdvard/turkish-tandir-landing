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
    id: 'firmennye',
    label: 'Фирменные',
    defaultImage: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=260&fit=crop',
    items: [
      { name: 'Донер в лаваше с курицей', price: 230, image: '/images/doner-lavash.jpg' },
      { name: 'Донер в лаваше с говядиной', price: 340, image: '/images/doner-lavash.jpg' },
    ],
  },
  {
    id: 'shashlyk',
    label: 'Шашлык',
    defaultImage: 'https://images.unsplash.com/photo-1598515213692-d872a9adbe45?w=400&h=260&fit=crop',
    items: [
      { name: 'Табака', description: 'Целый табака, подаётся с луком, салатом и чесночным соусом', price: 450, image: '/images/tabaka.jpeg' },
      { name: 'Шашлык из крылышек', price: 210, image: '/images/shashlyk-krylyshki.jpg' },
      { name: 'Шашлык из курицы', price: 180, image: '/images/shashlyk-kuritsa.jpg' },
      { name: 'Люля кебаб', price: 190, image: '/images/lyulya-kebab.jpg' },
    ],
  },
  {
    id: 'doner',
    label: 'Донер',
    defaultImage: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=260&fit=crop',
    items: [],
  },
  {
    id: 'pizza',
    label: 'Пицца',
    defaultImage: 'https://images.unsplash.com/photo-1601924572412-cd1f5c8d2e9c?w=400&h=260&fit=crop',
    items: [
      { name: 'Пепперони', price: 390, image: '/images/pizza-pepperoni.jpg', variants: [{ label: '30 см', price: 390 }, { label: '40 см', price: 490 }] },
      { name: '4 сыра', price: 390, image: '/images/pizza-4syra.jpg', variants: [{ label: '30 см', price: 390 }, { label: '40 см', price: 490 }] },
      { name: 'Маргарита', price: 350, image: '/images/pizza-margarita.jpg', variants: [{ label: '30 см', price: 350 }, { label: '40 см', price: 450 }] },
      { name: 'Куриная', price: 385, image: '/images/pizza-kuritsa.jpg', variants: [{ label: '30 см', price: 385 }, { label: '40 см', price: 480 }] },
      { name: 'Ассорти', price: 385, image: '/images/pizza-assorti.jpg', variants: [{ label: '30 см', price: 385 }, { label: '40 см', price: 485 }] },
      { name: 'Мясная', price: 390, image: '/images/pizza-myasnaya.jpg', variants: [{ label: '30 см', price: 390 }, { label: '40 см', price: 490 }] },
    ],
  },
  {
    id: 'salads',
    label: 'Салат',
    defaultImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=260&fit=crop',
    items: [
      { name: 'Свекольный салат', description: '180 г', price: 179, image: '/images/salat-svekolny.jpg' },
      { name: 'Морковь по-корейски', description: '200 г', price: 190, image: '/images/salat-korovcha.jpg' },
      { name: 'Салат острый', description: '250 г', price: 225, image: '/images/salat-ostry.jpg' },
      { name: 'Салат свежая нарезка', description: '250 г', price: 185, image: '/images/salat-narezka.jpg' },
      { name: 'Салат греческий', description: '250 г', price: 230, image: '/images/salat-grechesky.jpg' },
      { name: 'Салат цезарь', description: '250 г', price: 220, image: '/images/salat-cezar.jpg' },
    ],
  },
  {
    id: 'sushi',
    label: 'Суши и Роллы',
    defaultImage: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=260&fit=crop',
    items: [
      { name: 'Горячие роллы', price: 275, image: '/images/goryachie-rolly.jpg' },
      { name: 'Филадельфия с угрем', price: 330, image: '/images/roll-philadelphia-ugor.jpg' },
      { name: 'Ролл с огурцом', price: 190, image: '/images/roll-ogurets.jpg' },
      { name: 'Ролл с угрем', price: 230, image: '/images/roll-ugor.jpg' },
      { name: 'Роллы сырные', price: 250, image: '/images/roll-syrny.jpg' },
      { name: 'Ролл калифорния', price: 270, image: '/images/roll-california.jpg' },
      { name: 'Ролл калифорния с крабом', price: 299, image: '/images/roll-california-krab.jpg' },
      { name: 'Запеченные роллы с угрем', price: 320, image: '/images/roll-zapechenny.jpg' },
      { name: 'Запеченные роллы с крабом', price: 299, image: '/images/roll-zapechenny.jpg' },
      { name: 'Запеченные роллы с семгой', price: 330, image: '/images/roll-zapechenny.jpg' },
    ],
  },
  {
    id: 'garnish',
    label: 'Гарниры',
    defaultImage: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=260&fit=crop',
    items: [
      { name: 'Картошка фри', description: '200 г', price: 130, image: '/images/garnir-fri.jpg' },
      { name: 'Дольки', description: '150 г', price: 140, image: '/images/garnir-dolki.jpg' },
      { name: 'Нагетсы', description: '6 шт', price: 129, image: '/images/garnir-nagetsy.jpg' },
      { name: 'Пюре', description: '150 г', price: 120, image: '/images/garnir-pure.jpg' },
      { name: 'Рис', description: '150 г', price: 135, image: '/images/garnir-ris.jpg' },
      { name: 'Гречка', description: '150 г', price: 130, image: '/images/garnir-grechka.jpg' },
    ],
  },
  {
    id: 'tez-tatym',
    label: 'Тез татым',
    defaultImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop',
    items: [
      { name: 'Биф бургер', price: 220, image: '/images/bif-burger.jpg' },
      { name: 'Острые крылышки', price: 220, image: '/images/ostrye-krylyshki.jpg' },
      { name: 'Чикен бургер', price: 190, image: '/images/chicken-burger.jpg' },
    ],
  },
  {
    id: 'dishes',
    label: 'Блюда',
    defaultImage: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=260&fit=crop',
    items: [
      { name: 'Плов', price: 295, image: '/images/plov.jpg', variants: [{ label: '300 г', price: 295 }, { label: '1 кг', price: 2400 }] },
      { name: 'Жаровня', price: 450, image: '/images/zharovnya.jpg' },
    ],
  },
  {
    id: 'steaks',
    label: 'Стейки',
    defaultImage: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=260&fit=crop',
    items: [
      { name: 'Стейк лосось', price: 550, image: '/images/steik-losos.jpg' },
      { name: 'Стейк филе', description: 'филе, помидор, лук, соус, огурец', price: 390, image: '/images/steik-file.jpg' },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    defaultImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop',
    items: [
      { name: 'Pepsi', description: '1 л', price: 120, image: '/images/drink-pepsi.png' },
      { name: 'Coca-Cola', description: '1 л', price: 120, image: '/images/drink-cola.png' },
      { name: 'Fanta', description: '1 л', price: 120, image: '/images/drink-fanta.png' },
      { name: 'Fuse tea', description: '1 л', price: 110, image: '/images/drink-fusetea.png' },
      { name: 'Сок яблочный', description: '1 л', price: 140, image: '/images/sok-yablochny.jpg' },
      { name: 'Сок апельсиновый', description: '1 л', price: 140, image: '/images/sok-apelsinovy.jpg' },
      { name: 'Кофе капучино', description: 'с собой', price: 50, image: '/images/kofe.jpg' },
      { name: 'Кофе 3 в 1', description: 'с собой', price: 35, image: '/images/kofe.jpg' },
      { name: 'Кофе черный', description: 'с собой', price: 35, image: '/images/kofe.jpg' },
    ],
  },
];
