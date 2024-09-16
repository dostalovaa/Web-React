import logo from "./logo.jpg";

import Canada from "./Canada.jpg";
import Italy from "./Italy.jpg";
import UnitedStates from "./UnitedStates.jpg";
import Switzerland from "./Switzerland.jpg";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";
import img12 from "./12.jpg";

import d_1 from "./d_1.jpg";
import d_1_2 from "./d_1_2.jpg";
import d_1_3 from "./d_1_3.jpg";

import d_2 from "./d_2.jpg";
import d_2_2 from "./d_2_2.jpg";
import d_2_3 from "./d_2_3.jpg";

import d_3 from "./d_3.jpg";
import d_3_2 from "./d_3_2.jpg";
import d_3_3 from "./d_3_3.jpg";

import d_4 from "./d_4.jpg";
import d_4_2 from "./d_4_2.jpg";
import d_4_3 from "./d_4_3.jpg";

import wind from "./wind.png";
import humidity from "./humidity.png";
import rain from "./rain.png";
import snow from "./snow.png";
import mist from "./mist.png";
import drizzle from "./drizzle.png";
import clouds from "./clouds.png";
import clear from "./clear.png";

import office from "./office.jpg";
import award_1 from "./award_1.png";
import award_2 from "./award_2.png";
import award_3 from "./award_3.webp";

import employees_1 from "./employees_1.png";
import employees_2 from "./employees_2.png";
import employees_3 from "./employees_3.png";
import employees_4 from "./employees_4.png";

export const assets = {
  logo,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  wind,
  humidity,
  rain,
  snow,
  mist,
  drizzle,
  clouds,
  clear,
  office,
  award_1,
  award_2,
  award_3,
};

export const destinations = [
  {
    img: Canada,
    title: "Canada, Yoho National Park",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: Italy,
    title: "Italy, Matterhorn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: UnitedStates,
    title: "United States, Mammoth Lakes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: Switzerland,
    title: "Switzerland, Arnisee, Gurtnellen,",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const cabins = [
  {
    id: "1",
    title: "Rustic Cabin in the Forest",
    img: [d_1, d_1_2, d_1_3],
    description:
      "This cozy A-frame cabin is nestled deep in the forest, surrounded by towering trees, offering peace and serenity.",
    price: 69,
    category: "USA",
  },
  {
    id: "2",
    title: "Modern Cabin with a Rustic Twist",
    img: [d_2, d_2_2, d_2_3],
    description:
      "A modern A-frame cabin with a wooden exterior and large windows, providing a perfect blend of rustic charm.",
    price: 89,
    category: "Europe",
  },
  {
    id: "3",
    title: "Sunlit Woodland Cabin",
    img: [d_3, d_3_2, d_3_3],
    description:
      "This cabin is situated in a sunlit clearing, perfect for those who love the outdoors and want to immerse themselves in nature.",
    price: 99,
    category: "Europe",
  },
  {
    id: "4",
    title: "Contemporary Cabin with Glass Front",
    img: [d_4, d_4_2, d_4_3],
    description:
      "A stylish and contemporary A-frame cabin with a full glass front, offering stunning views of the surrounding forest.",
    price: 129,
    category: "USA",
  },
];

export const categories = ["All", "USA", "Europe"];

export const employees = [
  {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 555 123 456",
    img: employees_1,
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@email.com",
    phone: "+1 555 654 321",
    img: employees_2,
  },
  {
    name: "Michael Brown",
    email: "michael.brown@email.com",
    phone: "+1 555 987 654",
    img: employees_3,
  },
  {
    name: "Sarah Davis",
    email: "sarah.davis@email.com",
    phone: "+1 555 246 810",
    img: employees_4,
  },
];
