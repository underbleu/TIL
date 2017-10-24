// Level 1. 삼각형출력하기 (Javascript)

/* 문제
printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printTriangle 메소드를 완성하세요
printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다. 

높이가 3일때
*
**
***

높이가 5일때
*
**
***
****
*****
*/

// 내코드_for문 2번사용
function printTriangle(num) {
  var result = '';
  for (var i = 0; i < num; i++) {
    for (var j = 0; j <= i; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

// 다른사람코드 
// repeat()메소드 + for문 1번사용
function printTriangle2(num) {
  var result = '';
  for (var i = 0; i < num; i++) {
    result += '*'.repeat(i + 1) + '\n'
  }
  return result;
}

// 재귀 + 삼항연산자
function printTriangle3(num) {
  return (num < 1) ? '' : printTriangle3(num - 1) + '*'.repeat(num) + '\n';
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(printTriangle(5));
console.log(printTriangle2(5));
console.log(printTriangle3(5));