console.log("hola")
//Conditionals Practice
//Activity 1 Check your math
if(1 + 1 > 5){
    console.log('True fact!')
} else { 
    console.log('LIES!')
}

    if(4 * 5 <= 20) {
    console.log('True fact!')
} else {
    console.log('LIES!') 
}
 
if(6 - 3 >= 0){
    console.log('True fact!')
} else {
    console.log('LIES!')
}

//Activity 2 Dog vs Cat
let likesDogs = true

if(likesDogs) {
    console.log('You\'re a dog person!');
} else{
    console.log('You\'re a cat person!')
}

//Activity 3 Generation Gaps

let birthYear = 1978

if(birthYear <birthYear >= 1995) {
    console.log('You\'re Gen Z!')
} else if (birthYear >= 1977){
    console.log('You\'re Gen Y!')
} else if (birthYear >= 1965) {
    console.log('You\'re Gen X!')
} else if (birthYear >= 1946) {
    console.log('You\'re a BOOMER!')
}

//Activity 4 Greetings

let person = {
    name: 'Javier Bardem',  
    language: 'Italian', 
}

if (person.language === 'Spanish') {
    console.log('¡Hola!')
} else if (person.language === 'French') {
    console.log('Bonjour!')  
} else if (person.language ==='English'){
     console.log('Hello!')
    } else  {
    console.log('Please teach me that language!')
    }

    
// Activity 5 Grandma's Kitchen

let time = '2:00pm'
let isHungry = false
if (time === '7:30am' && isHungry === true) {
    console.log('Time for breakfast!')
} else if (time === '12:00pm' && isHungry === true){
    console.log('Time for lunch!')
} else if (time === '7:00pm' || time === '8:00pm') {
    console.log('Time for dinner!')
} else if (isHungry === true) {
    console.log('Time for a snack!')
} else console.log('Have a cookie anyway!')


// Activity 6 Student Grades

let grade = 96

if (grade >= 0 && grade <= 69) { 
    console.log('You got an F.')
}
else if (grade >= 70 && grade <= 76) {
    console.log('You got a D.')
} 
else if (grade >= 77 && grade <= 84) {
    console.log ('You got a C.')
}
else if (grade >= 84 && grade <= 92) {
    console.log('You got a B.')
}
else if (grade >= 93 && grade <= 100) {
    console.log('You got an A.')
}
// Challenge-- Weather Data from Variables and Data Types

