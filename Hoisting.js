//------------------------------------------1--------------------------------------
//----------------------------------------Original---------------------------------
// console.log(hello);   //logs undefined                                
// var hello = 'world';   
//----------------------------------------ES6-----------------------------------
// var hello = 'world'; 
// console.log(hello);




//------------------------------------------2--------------------------------------
//----------------------------------------Original---------------------------------
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet'; 
// 	console.log(needle);    //logs magnet
// }
//----------------------------------------ES6-----------------------------------

// let needle = 'haystack';
// test();
// function test(){
// 	let needle = 'magnet';
// 	console.log(needle);
// }



//------------------------------------------3--------------------------------------
//----------------------------------------Original---------------------------------
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan); //logs noting
// }
// console.log(brendan); //logs super cool
//----------------------------------------ES6-----------------------------------
// let brendan = 'super cool';
// function print(){
// 	let brendan = 'only okay';
// 	console.log(brendan); //function desn't get executed
// }
// console.log(brendan);



//------------------------------------------4--------------------------------------
//----------------------------------------Original---------------------------------
// var food = 'chicken';
// console.log(food); //logs chicken
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food); //logs half-chicken
// 	var food = 'gone';
// }
//----------------------------------------ES6-----------------------------------

// let food = 'chicken';
// console.log(food); //logs chicken
// eat();
// function eat(){
// 	let food = 'half-chicken';
// 	console.log(food); //logs half-chicken
// 	food = 'gone';
// }



//------------------------------------------5--------------------------------------
//----------------------------------------Original---------------------------------

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//----------------------------------------ES6-----------------------------------
// mean();

// function mean() {
// 	let food = "chicken";
// 	console.log(food); //logs chicken
// 	food = "fish";
// 	console.log(food); //logs fish
// }



//------------------------------------------6--------------------------------------
//----------------------------------------Original---------------------------------
// console.log(genre); //logs undefined
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre); //logs rock
// 	var genre = "r&b";
// 	console.log(genre); //logs r&b
// }
// console.log(genre); //logs disco
//----------------------------------------ES6-----------------------------------
// let genre;
// console.log(genre); //logs undefined
// genre = "disco";
// rewind();
// function rewind() {
// 	let genre = "rock";
// 	console.log(genre); //logs rock
//     genre = "r&b";
// 	console.log(genre); //logs r&b
// }
// console.log(genre); //logs disco



//------------------------------------------7--------------------------------------
//----------------------------------------Original---------------------------------
// dojo = "san jose";
// console.log(dojo); //logs san jose
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo); //logs seattle
// 	var dojo = "burbank";
// 	console.log(dojo); //logs burbank
// }
// console.log(dojo); //logs san jose
//----------------------------------------ES6-----------------------------------
// let dojo = "san jose";
// console.log(dojo); //logs san jose
// learn();
// function learn() {
// 	let dojo = "seattle";
// 	console.log(dojo); //logs seattle
// 	dojo = "burbank";
// 	console.log(dojo); //logs burbank
// }
// console.log(dojo); //logs san jose



//------------------------------------------8--------------------------------------
//----------------------------------------Original---------------------------------
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// } //trows an error
//----------------------------------------ES6-----------------------------------

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo.state = "closed for now";
//         }
//         return dojo;
// }
//Logs
// { name: 'Chicago', students: 65, hiring: true }
// { name: 'Berkeley', students: 0, state: 'closed for now' }