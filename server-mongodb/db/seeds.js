const db = connect("mongodb://localhost:27017/shelter");

db.tasks.drop();
db.users.drop();

db.tasks.insertMany([
  {
    habit: "Drink Water",
    frequency: 2,
    freq_text: "",
    week: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    habit: "read book",
    frequency: 10,
    freq_text: "",
    week: [0, 0, 0, 0, 0, 0, 0],
  },
  {
    habit: "go outside",
    frequency: 10,
    freq_text: "",
    week: [0, 0, 0, 0, 0, 0, 0],
  },
]);

db.users.insertMany([
  {
    userName: "Annabella",
    name: "ashdjkashdjkah",
    password_digest: "RoastChicken",
    email: "Anna@hotmail.com",
  },
  {
    userName: "Stevenn",
    name: "sdjlskdjlkjfd",
    password_digest: "Oyster",
    email: "StevOnsen@yahoo.com",
  },
  {
    userName: "Lewis",
    name: "ajdhakjhsd",
    password_digest: "Roast",
    email: "Annwa@hotmail.com",
  },
]);
