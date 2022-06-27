const db = connect("mongodb://localhost:27017/shelter")


db.tasks.drop()
// db.owners.drop()

db.tasks.insertMany([
    {
        id: 1,
        habit: 'Drink Water',
        frequency: 'two liters a day'
    },
    {
        id: 2,
        habit: 'read book',
        frequency: '10 pages a day'
    },
    {
        id: 3,
        habit: 'go outside',
        frequency: '10 minutes a day'
    }
])

// db.owners.insertMany([
//     { name: 'Beth' },
//     { name: 'Naz' },
//     { name: 'Eric' },
//     { name: 'Vesna' }
// ])