// Q 문자열 만들기
// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 
// 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
// 입출력
// 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5

// Answer
//// 🙈 Oum 1 회독중
const words = "안녕하세요. 저는코딩대학교 코딩학전공 혜림입니다."
console.log(words.split(" ").length)

//sjshin

// 🌸 sePark 🌸
function countWords(words) {
  return words.split(" ").length
}

console.log(countWords("안녕하세요. 저는코딩대학교 코딩학전공 혜림입니다."))