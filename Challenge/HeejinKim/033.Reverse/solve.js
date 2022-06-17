// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// ```jsx
// **입출력**
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// **출력**
// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2
// ```

let inputNumber = prompt(
  "숫자를 입력하세요(숫자는 띄워쓰기로 구분해주세요)"
).split(" ");
let outNumber = [];
for (let i = 1; i < inputNumber.length + 1; i++) {
  outNumber.push(inputNumber[inputNumber.length - i]);
}

console.log(`입력 : ${inputNumber.join(" ")}
출력 : ${outNumber.join(" ")}`);
