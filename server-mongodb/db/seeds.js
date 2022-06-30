const db = connect("mongodb://localhost:27017/shelter");

db.tasks.drop();
db.users.drop();

db.tasks.insertMany([
  {
    habit: "Drink Water",
    frequency: 2,
    freq_text: "",
    week: 1,
  },
  {
    habit: "read book",
    frequency: 10,
    freq_text: "",
    week: 1,
  },
  {
    habit: "go outside",
    frequency: 10,
    freq_text: "",
    week: 1,
  },
]);

