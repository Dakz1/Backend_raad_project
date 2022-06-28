const db = connect("mongodb://localhost:27017/shelter");

db.tasks.drop();
db.users.drop();

db.tasks.insertMany([
  {
    habit: "Drink Water",
    frequency: 2,
    freq_text: "",
  },
  {
    habit: "read book",
    frequency: 10,
    freq_text: "",
  },
  {
    habit: "go outside",
    frequency: 10,
    freq_text: "",
  },
]);

db.users.insertMany([
  {
    userName: "Annabella",
    password: "RoastChicken",
    email: "Anna@hotmail.com",
  },
  {
    userName: "Stevenn",
    password: "Oyster",
    email: "StevOnsen@yahoo.com",
  },
]);
