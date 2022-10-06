// Q 호준이의 아르바이트
// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// 입출력
// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6

// Answer
//// 🙈 Oum 1 회독중 어려움;;
// const scores = ['97', '86', '75', '66', '55', '97', '85', '97', '97', '95']
// scores.sort((a,b)=>{
//   return a - b
// })
// console.log(scores)
// let top3 = [];
// let count = 0;

// while (top3.length < 4) {
// 	let value = scores.pop();
//   if (!top3.includes(value)){
//     top3.push(value);
//   }
//   count++;
// }
// console.log(top3);
// console.log(count - 1);

//😎 sjshin
//38번 문제
// const scores = ['97', '86', '75', '66', '55', '97', '85', '97', '97', '95'];

// scores.sort();  //[ '55', '66', '75', '85', '86', '95', '97', '97', '97', '97' ] 오름차순

// // scores.sort(function(a,b) {
// //   return b-a;
// // })
// // // [ '97', '97', '97', '97', '95', '86', '85', '75', '66', '55' ] //내림차순정리는 이렇게!

// let top3 = []; //1등부터 3등까지의 학생의 점수
// let count = 0; //1등부터 3등까지의 학생들의 수
// //while 반복문!
// while(top3.length<3) {
//   let value = scores.pop(); //scores배열의 가장 끝 애를 뽑아내기
//   if(!top3.includes(value)){ //top3안에 value값이 없다면?
//     top3.push(value); //뽑아낸 애를 top3 배열에 담기
//   }
//   count++; //학생들의 수를 구해야하기 때문에....!
// }

// console.log(top3); //[ '97', '95', '86' ] 1등부터 3등까지의 점수
// console.log(count); // 6 .. 하지만 이 풀이는 3등의 점수가 많을 경우 문제가 됨...! 왜냐면 while반복문의 조건 top3.length<3 때문인데
// // while(top3.length<4) 조건을 바꿔서 작성하고 count값에 -1을 해주면 된다......!하하하하하 console.log(count-1);

// 🌸 sePark 🌸

// function findTop(scores) {
//   let arrScores = scores.split(' ');
//   let result = {};

//   arrScores.forEach(score => {
//     result[score] = (result[score] || 0)+1
//   })

// let keys = Object.keys(result)

// keys.sort((a,b) =>{
//   return b - a
// })

//   let topKeys = keys.slice(0 , 3)
//   let sumKeys = 0

//   for(let i = 0; i <topKeys.length; i++){
//     sumKeys +=   Number(result[topKeys[i]])
//   }

//   return sumKeys

// }

//  findTop("97 86 75 66 55 97 85 97 97 95")
