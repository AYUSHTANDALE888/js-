const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["batman","superman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_New_Heroes = [...marvel_heroes , ...dc_heroes]

console.log(all_New_Heroes);
