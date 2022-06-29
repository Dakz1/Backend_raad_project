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

