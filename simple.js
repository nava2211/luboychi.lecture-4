// Task 1.
// function get(a) {
//     let b = "Hello "
//     return b.concat(a)
// }
// console.log(get("world"));

// Task 2.
// function get(a) {
//     return a.includes(" ")
// }
// console.log(get("Hallo wrold"));

// Task 3.
// function get(a) {
//     let cnt = 1
//     let nava = a.split(",").join("")
//     let nava1 = Number(nava)
//     for (let i = nava; i > 0; i = Math.floor(i / 10)){
//         cnt *= i % 10
//     }
//     return cnt
// }
// console.log(get("2,3"));

// Task 4.
// function get(a) {
//     let cnt = 0
//     let res = a.split("-")
//     for (let i = 1; i <= res.length; i++){
//         cnt ++
//     }
//     return cnt
// }
// console.log(get("na-va"));

// Task 5.
// function get(a) {
//     let nava = ""
//     for (let i = 1; i <= a; i++){
//         nava += i
//     }
//     return nava.split("").join("-")
// }
// console.log(get("12"));