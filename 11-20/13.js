// Q 우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다.
// 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
// 입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다.
// 출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
// 예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

// 입출력;
// 입력: 1;
// 출력: 수성;

// Answer
//Omuing => 스스로 다르게 생각해서 풀었다 뿌듯...캬
// const guardians = [
//   "수성",
//   "금성",
//   "지구",
//   "화성",
//   "목성",
//   "토성",
//   "천왕성",
//   "해왕성",
// ];
// 🙈 Oum 1 - 2회독 중
// const guardians = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
// let number = [];
// let numbers = number.push(3);
// console.log(guardians[number - 1]);

//😎 sjshin
// let solarsystem = [
//   '수성',
//   '금성',
//   '지구',
//   '화성',
//   '목성',
//   '토성',
//   '천왕성',
//   '해왕성',
// ];
// function planet (i){
//   console.log(solarsystem[i-1]);
// }

// planet(3); //지구

//🌸 sePark 🌸
//풀이 1
// let planet = [
//   "수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"]
//   let i = "";
//   i = 1;
//   console.log(planet[i - 1])

//풀이 2
// let planet = [
//   "수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"]

//   function choosePlanet (i) {
//     console.log(planet[i - 1])
//   }

//   choosePlanet(3)

// YS.kim
// const planetFunction = index => {
//   const planet = [
//     '수성',
//     '금성',
//     '지구',
//     '화성',
//     '목성',
//     '토성',
//     '천왕성',
//     '해왕성',
//   ];
//   console.log(planet[index - 1]);
// };

// planetFunction(2);

//kh
// const n = prompt('숫자를 입력하세요.');
// const planet = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
// console.log(planet[n-1]);
