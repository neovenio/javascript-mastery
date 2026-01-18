console.log("Day one, Arrays Basics")
let dreamBag=["pencilcase", "laptop", "textbooks"]
console.log(dreamBag[0])
dreamBag[2]="phone"
console.log(dreamBag)
dreamBag[3]="textbooks"
console.log(dreamBag[3])

console.log("Day two, Array Methods")
let movies=["Amélie", "Titanic", "Joker"]
console.log(movies)
movies.push("CTRL")
console.log(movies)
movies.pop("CTRL")
console.log(movies)
movies.unshift("The Matrix")
console.log(movies)
movies.shift("The Matrix")
console.log(movies)
console.log(movies.length)

console.log("Day three, Objects")
let gameCharacter={
    name:"Shirin",
    power:"telekinesis",
    levelNumber:50
};
console.log(gameCharacter)
gameCharacter.levelNumber=51
console.log(gameCharacter)
gameCharacter.age=13
console.log(gameCharacter)

console.log("Objects & Arrays")
let musicCollection=[
    {
        title: "Future Sounds",
        artist: "DJ Nova",
        tracks: ["Intro Beat", "Midnight Groove", "Sunrise Melody"]
    },
    {
        title: "Chill Vibes",
        artist: "Luna Waves",
        tracks: ["Ocean Flow", "Starlight", "Moon Dance"]
    }
];
console.log(musicCollection[0].tracks[0])
console.log(musicCollection[0].tracks[0])
musicCollection[1].tracks.push("Night Breeze");
console.log(musicCollection[1].tracks);

console.log("Day five, If Else Logic")
let movieRating = 8; 
if (movieRating >= 9) {
  console.log("Masterpiece");
} else if (movieRating >= 7) {
  console.log("Good movie");
} else if (movieRating >= 5) {
  console.log("Okay");
} else {
  console.log("Skip it");
}
 
console.log("Day six, Switch and Ternary")
let day = 5; 
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day name:", dayName);

let isWeekend = (day === 6 || day === 7) ? "Yes" : "No";
console.log("Is it the weekend?", isWeekend);


