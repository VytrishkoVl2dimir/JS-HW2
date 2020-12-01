// ---------------Task 1-------------------------------
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = [];
for (key in citiesAndCountries) {
    result.push(`${key} - это ${citiesAndCountries[key]}`);
}
console.log(result);

//     // ---------------Task 2-------------------------------

function getArray(){
let triplets = [];
let main = [];
let arrayLength = prompt('Push Enter enter a multiple of 3');
    for(let i = 1; i <= arrayLength; i++) {
         triplets.push(i);
         }
        for(let j = 1; j <= arrayLength/3; j++) {
            let items = triplets.splice(0, 3);
            main.push(items);
             }
         console.log(main);    
}
getArray() // выведет в консоль [ [1,2,3], [4,5,6], [7,8,9] ].

// ---------------Task 3-------------------------------

const namesOfDays = {
ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
let day = prompt('Введите номер дня недели', 1);
let EnterLang = prompt('Выбарите язык. Если английский - введите-1, русский-2.', 1);
if (+EnterLang === 1) {
    console.log(namesOfDays.en[day-1]);
} else {
    console.log(namesOfDays.ru[day-1]);
}

// --------------- Task 3.1 -------------------------------

const namesOfDays_a = {
ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay() {
const lang = 'ru';
const day = 7; 
    if (lang === 'en') {
        console.log(namesOfDays.en[day-1]);
    } else {
        console.log(namesOfDays.ru[day-1]);
    }  
}
getNameOfDay() 
// --------------- Task 4 -------------------------------

let arr = [20, 300, 40, 500, 20000, 5010, 599];

function getMinArray(){
let sumMin = 0;
for(let i = 1; i < 3; i++) {
let min = arr[0];
let nomer = 0;
arr.forEach(function (elem, index) {
    if(index > 0 ){    
        if(min > elem){
            nomer = index;
            min = elem;
        }
    }
});
console.log(min);
sumMin = sumMin + min;
let deletedItems = arr.splice(nomer, 1);
}
console.log('Сумма минимальных чисел =',sumMin);
}

getMinArray()