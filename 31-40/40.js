// Q 놀이동산에 가자
// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력
// 50
// 5
// 20
// 20
// 20
// 20
// 20
// 출력
// 2

// Answer
//// 🙈 Oum 1 회독중 어려움
// const weightLimit = "300";
// const memberCount = "5";
// let count = 0;
// let totalWeight = 0;

// for (let i=0; i < memberCount; i++) {
//   totalWeight = totalWeight + parseInt("50", 10);
// 	if(totalWeight <= weightLimit) {
// 		count++;
//   }
// }
// console.log(count)

//😎 sjshin
// const limitWeight = "300";
// const member = "8";
// let count = 0;
// let totalWeight = 0;

// for(let i = 0; i < member; i++ ) {
//   totalWeight = totalWeight + parseInt("50,40,20,10,20,100,30",10);
//   if(totalWeight <= limitWeight){
//     count++;
//   }
// }
// console.log(count);

// 🌸 sePark 🌸
// function limitWeight(info) {
//   let arrInfo = info.split(" ");
//   let sum = 0
//   let a = [];

//   for(let i = 2; i < arrInfo.length-2; i++){
//     if (arrInfo[0] > sum + Number(arrInfo[i])){
//      sum += Number(arrInfo[i])
//       a ++
//     }
//   }
//  return a
// }

// console.log(limitWeight("50 5 20 20 20 20 20"))
