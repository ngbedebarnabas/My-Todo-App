/*
STEPS TO USING FIREBASE DATABASE

1. Create and login to your firebase account
2. Create a new project
3. add a collection
4. add your first document, and other docs subsequently if need be
5. Initialize firebase db and link your firbase db to your frontend 
6. perform crud operations

*/ 
const ul = document.querySelector('.hotels');

// const db = firebase.firestore();
// db.collection('lodgeandrent').get().then(snapshots => {
//     snapshots.forEach(snapshot => {
//         ul.innerHTML += `
//             <li>${snapshot.data().hotel_name} --- ${snapshot.data().standard}</li>
//         `;
//         console.log(snapshot.data());
//     });
// }).catch(err => {
//     console.log(err);
// })

const person = {
    firstname: 'Ngbede',
    lastname: 'Barnabas',
    age: 26,
    location: 'Bayelsa'
}

const greet = () => {

    const updated = {
        ...person,
        status: 'single',
        hobbies: ['studying', 'reading', 'teaching', 'coding']
    };
    console.log(updated);
}

greet();