const openingHours = [
    {'day' : 'Monday', 'hours' : '10:00 - 21:00'},
    {'day' : 'Tuesday', 'hours' : '09:00 - 18:00'},
    {'day' : 'Wednesday', 'hours' : '11:00 - 20:00'},
    {'day' : 'Thursday', 'hours' : '10:00 - 18:00'},
    {'day' : 'Friday', 'hours' : '10:00 - 18:00'},
    {'day' : 'Saturday', 'hours' : '10:00 - 16:00'},
    {'day' : 'Sunday', 'hours' : '11:00 - 15:00'},
]

const deliveryHours = [
    {'day' : 'Monday', 'hours' : '09:00 - 18:00'},
    {'day' : 'Tuesday', 'hours' : '09:00 - 19:00'},
    {'day' : 'Wednesday', 'hours' : '11:00 - 21:00'},
    {'day' : 'Thursday', 'hours' : '10:00 - 18:00'},
    {'day' : 'Friday', 'hours' : '10:00 - 20:00'},
    {'day' : 'Saturday', 'hours' : '10:00 - 16:00'},
    {'day' : 'Sunday', 'hours' : '11:00 - 15:00'},
]

const dishes = [
  {
    name: "spaghetti bolognese",
    price: 18.99,
    cuisine: "italian",
    fried: false,
    image: "/images/dishes/italian/bolognese.jpg",
  },
  {
    name: "spaghetti carbonara",
    price: 17.99,
    cuisine: "italian",
    fried: false,
    image: "/images/dishes/italian/carbonara.jpg",
  },
  {
    name: "tagliatelle z kurczakiem",
    price: 20.99,
    cuisine: "italian",
    fried: false,
    image: "/images/dishes/italian/tagliatelle.jpg",
  },
  {
    name: "lasagne",
    price: 16.99,
    cuisine: "italian",
    fried: false,
    image: "/images/dishes/italian/lasagne.jpg",
  },
  {
    name: "kotlet mielony",
    price: 18.99,
    cuisine: "polish",
    fried: true,
    image: "/images/dishes/polish/mielony.jpg",
  },
];



export {deliveryHours, openingHours, dishes}