const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["batman","superman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_New_Heroes = [...marvel_heroes , ...dc_heroes]

// console.log(all_New_Heroes);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ayush"))
console.log(Array.from("Ayush"))
console.log(Array.from({name: "Ayush"}))

