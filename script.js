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

let grade = 90

if (grade <= 69) { 
    console.log('You got an F.')
}
else if (grade <= 76) {
    console.log('You got a D.')
} 
else if (grade <= 84) {
    console.log ('You got a C.')
}
else if (grade <= 92) {
    console.log('You got a B.')
}
else if (grade  <= 100) {
    console.log('You got an A.')
}
// Challenge-- Weather Data from Variables and Data Types
let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 29,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 30,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 37,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
  
if (weatherForecast[0].temperature.high > 85 && weatherForecast[1].temperature.high > 85 && weatherForecast[2].temperature.high > 85) {
    console.log('It\'s going to be hot as heck all week!')
}

if (weatherForecast[0].temperature.high < 40 && weatherForecast[1].temperature.high < 40 && weatherForecast[2].temperature.high < 40) {
    console.log('It\'s going to be cold as heck all week!')
}

//Loops--move this code to another file later

let i = 1

while(i <= 100) {
    console.log('TWEET TWEET')
    i++
}

for(let i = 0; i < 100; i++){
    console.log('TWEET TWEET TWEET')
}

//Loops lightning exercise 2
// Favorite Foods
// In your JavaScript, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
// Loop through the array and print each food item to the console.

let favoriteFoods = ['cheesecake', 'fajitas', 'grapes', 'anything curried']

i = 0

while(i < favoriteFoods.length){
    console.log(favoriteFoods[i])
    i++

}

for(let i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i])
}