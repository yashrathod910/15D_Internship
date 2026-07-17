import headphone from "/src/assets/images/headphone.webp";
import smartwatch from "/src/assets/images/smartwatch.jpg";
import shoes from "/src/assets/images/shoes.webp";
import laptop from "/src/assets/images/laptop.webp";
import mouse from "/src/assets/images/mouse.webp";
import speaker from "/src/assets/images/speaker.jpg";
import chair from "/src/assets/images/chair.jpg";
import mobile from "/src/assets/images/mobile.webp";


const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "Boat",
    price: 2499,
    oldPrice: 3499,
    rating: 4.5,
    reviews: 120,
    stock: 10,
    image: headphone,
    description: "Premium wireless headphones with deep bass and long battery life."
  },

  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    brand: "Noise",
    price: 3999,
    oldPrice: 4999,
    rating: 4.4,
    reviews: 95,
    stock: 8,
    image: smartwatch,
    description: "Smart watch with heart rate monitor and AMOLED display."
  },

  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    brand: "Nike",
    price: 1999,
    oldPrice: 2999,
    rating: 4.7,
    reviews: 160,
    stock: 15,
    image: shoes,
    description: "Comfortable running shoes for daily workouts."
  },

  {
    id: 4,
    name: "Gaming Laptop",
    category: "Electronics",
    brand: "Asus",
    price: 54999,
    oldPrice: 62999,
    rating: 4.8,
    reviews: 80,
    stock: 5,
    image: laptop,
    description: "Powerful gaming laptop with RTX graphics."
  },

  {
    id: 5,
    name: "Gaming Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 999,
    oldPrice: 1499,
    rating: 4.6,
    reviews: 200,
    stock: 20,
    image: mouse,
    description: "RGB gaming mouse with programmable buttons."
  },

  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Accessories",
    brand: "JBL",
    price: 1799,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 175,
    stock: 12,
    image: speaker,
    description: "Portable Bluetooth speaker with rich sound."
  },

  {
    id: 7,
    name: "Office Chair",
    category: "Furniture",
    brand: "GreenSoul",
    price: 6999,
    oldPrice: 8499,
    rating: 4.3,
    reviews: 75,
    stock: 6,
    image: chair,
    description: "Ergonomic office chair for maximum comfort."
  },

  {
    id: 8,
    name: "Smartphone",
    category: "Mobiles",
    brand: "Samsung",
    price: 18999,
    oldPrice: 21999,
    rating: 4.7,
    reviews: 250,
    stock: 9,
    image: mobile,
    description: "Latest smartphone with excellent camera quality."
  }
];

export default products;