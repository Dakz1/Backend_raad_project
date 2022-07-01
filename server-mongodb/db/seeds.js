const db = connect("mongodb://habit-buddy-backend-server.herokuapp.com/shelter");

db.tasks.drop();
db.users.drop();

db.tasks.insertMany([
  {
    habit: "Drink Water",
    frequency: 2,
    freq_text: "",
    week: 0,
  },
  {
    habit: "read book",
    frequency: 10,
    freq_text: "",
    week: 0,
  },
  {
    habit: "go outside",
    frequency: 10,
    freq_text: "",
    week: 0,
  },
]);

