import babauImage from "./assets/babau.jpg";
import puckImage from "./assets/puck.jpg";
import vanImage from "./assets/van.jpeg";
import valImage from "./assets/val.jpg";
import fuzzImage from "./assets/fuzz.jpeg";
import perlImage from "./assets/perl.jpg";


export const catList = [
  {
    id: 1,
    name: "Babau",
    email: "Booboo@email.com",
    isCute: true,
    age: 3,
    ownerId: 1,
    image: babauImage,
    tricks: [
      { id: 2, title: "Stand" },
      { id: 3, title: "Open cabinet doors" },
      { id: 4, title: "Waking us up at 3 am" },
      { id: 5, title: "Leash Trained"},
    ],
  },
  {
    id: 2,
    name: "Puck",
    email: "puckamada@email.com",
    isCute: true,
    age: 3,
    ownerId: 1,
    image: puckImage,
    tricks: [
      {id: 2, title: "Stand"},
      {id: 3, title: "Fetch"},
      {id: 4, title: "Exercise Wheel Workout"},
      {id: 5, title: "Leash Trained"},
    ],
  },
  {
    id: 3,
    name: "Van",
    email: "miniVan@email.com",
    isCute: true,
    age: 14,
    ownerId: 2,
    image: vanImage,
    tricks: [],
  },
  {
    id: 4,
    name: "Val",
    email: "Chonk@email.com",
    isCute: true,
    age: 16,
    ownerId: 2,
    image: valImage,
    tricks: [],
  },
  {
    id: 5,
    name: "Captain Fuzz",
    email: "capn-fzz@email.com",
    isCute: true,
    age: 16,
    ownerId: 3,
    image: fuzzImage,
    tricks: [],
  },
  {
    id: 6,
    name: "Perl",
    email: "yesThatOne@email.com",
    isCute: true,
    age: 12,
    ownerId: 3,
    image: perlImage,
    tricks: [],
  },
  {
    id: 7,
    name: "Patches",
    email: "Patches@email.com",
    isCute: true,
    age: 14,
    ownerId: 3,
    image: null,
    tricks: [],
  },
];