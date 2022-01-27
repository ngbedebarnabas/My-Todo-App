// let fullname = 'Michael Ngbede Barnabas';
// //console.log(fullname.toUpperCase(), fullname.length);

// let email = 'ngbedebarnabas@gmail.com';

// //let result = email.substring(0, email.lastIndexOf('@'));
// //console.log(result);

// // TEMPLATING STRINGS

// let articles = 65;
// result = `${fullname} with the email '${email}' has written ${articles} articles`;
// console.log(result);

// let html = `
// <h1>${fullname}</h1> 
// <p>with the email '${email}' has published ${articles} articles.</p>
// `;

// console.log(html);

// ARRAYS 
// let students = ['femi', 'grace', 'ayo'];
// for(let i=0; i < students.length; i++){
//     console.log(students[i] + ' is a registered student.');
// }

// BREAK AND CONTINUE

// let scores = [45,29,98,0,100,76,22];

// for(let i = 0; i < scores.length; i++){

//     // if(scores[i] === 0){
//     //     continue;
//     // }
//     // console.log(scores[i]);

//     // if(scores[i]===100){
//     //     break;
//     // }   
//     if(scores[i] >=45){
//         console.log(scores[i]);
//     }
// }


// SWITCH STATEMENT
// let grade = 'F';

// switch(grade){
//     case 'A': console.log('your grade is an excellent grade: A') ;
//     break;

//     case 'B': console.log('your grade is B') ;
//     break;

//     case 'C': console.log('your grade is C') ;
//     break;

//     default: console.log('score not found');
// }

// FUNCTIONS AND METHODS
// function greet(name = 'User'){
//     console.log('HELLO MISTER JS ' + name);
// }

// greet();

// let reply = function(){
//     console.log('How are you doing today?');
// }

// reply();

// RETURNING VALUES 

// const calcArea = function(r){
//     return  Math.PI * (r**2);
// };

// console.log(Math.round(calcArea(7)));

// ARROW FUNCTIONS 

// const calcArea = radius => Math.round(Math.PI * (radius**2));

// let area = calcArea(7);
// console.log(area);

// //EXERCISES
// const greet = () => 'hello world';
// console.log(greet());

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const greet = function (name, age){
//     console.log(`Hey! ${name}. You are now ${age} years old.`);
// };

// greet('Banny', 25);

// **** ARROW FUNCTIONS
// To print out an array with incrment by one

// const newArray = [100,200,300,400,500];

// const traverseArray = (array) => {
//    array.forEach(element => {
//        console.log(element + 20);
//    });
// };

// traverseArray(newArray);


// **********CALL BACK FUNCITONS AND METHODS 
// 1. A two functions - one to calculate area of a circle and the other just to calculate the square of the radius

// const sqr = r => r**2;

// const area = (radius,sqr) => {
//     // let radius = 7;
//     return a = 3.14 * sqr(radius);
// }

// console.log(area(7,sqr));

// 2. ANOTHER EXAMPLE
// const list = document.querySelector('.names');
// const names = ['Ade', 'Grace', 'Mevrick','Frank'];
// let html = ``;
// const makeHTML = (name) => {
//     html += `<li>${name}</li>`
// };

// names.forEach(makeHTML);
// list.innerHTML = html;

// GENERATING RANDOM NUMBERS BETWEEN 1 and 1000
// let random = Math.random()
// console.log(Math.round(Math.random() * 1000000));

// let names = ['grace', 'amos', 'adeinfo', 'banny', 'chuks'];

// let ul = document.querySelector('.names');
// let html = ``;
// names.forEach(name => {
//     html += `<li>Hello ${name}</li>`;
// });

// ul.innerHTML = html;


// JAVASCRIPT OBJECTS 

// let student = {
//     name: 'Adebare Amos',
//     age: '27',
//     subjects: ['maths', 'eng', 'phys', 'chem', 'bio'],
//     login: function(){
//         console.log('The student logged in!');
//     },
//     logout: function(){
//         console.log('The student logged Out!');
//     },
//     printSubject: function(){
//         console.log(`${this.name} is offering the following subjects`);
//         this.subjects.forEach(subject => {
//             console.log(subject);
//         });
//     }
// }

// student.login();
// student.logout();
// student.printSubject();

// const names = document.querySelector('.names');

// students = ['grace', 'amos', 'adeinfo', 'banny', 'chuks'];
// html = ``;

// students.forEach(student => {
//     names.innerHTML += `<li>${student}</li>`
// });

// CHALLENGE 

// const paras = document.querySelectorAll('p');

// paras.forEach(para =>{
//     if(para.innerText.includes('error')){
//         para.classList.add('error');
//     }else if(para.innerText.includes('success')){
//         para.classList.add('success');
//     }
// });


// EVENTS 

const ul = document.querySelector('ul');
const button = document.querySelector('button');

ul.addEventListener('click', event => {
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
});

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New Todo!!!';
    ul.prepend(li);
});

//DISPLAYING POP UP

const popup_btn = document.querySelector('.popup-btn');
const popup_wrapper = document.querySelector('.popup-wrapper');
const popup_close = document.querySelector('.popup-close');

popup_btn.addEventListener('click', () => {
    popup_wrapper.style.display = 'block';
});

popup_wrapper.addEventListener('click', () => {
    popup_wrapper.style.display = 'none';
});
popup_close.addEventListener('click', () => {
    popup_wrapper.style.display = 'none';
});

