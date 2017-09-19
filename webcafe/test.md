
# Background
## 배운 것
1. alt와 title의 성격은 다르다.
1. nth-child
1. dl dt dd

## alt와 title의 성격은 다르다.

- alt 속성 (대체 텍스트): 이미지를 볼 수 없는 환경에서 내용을 확인할 수 있게 해주는 것
    - 목적의 구체적으로 알려주는 명쾌하고 짧은 텍스트 사용
    - 의미 없는 이미지는 공백으로 대체
    - `<img />`, `<area />`, `<input />`


- title 속성 (부연 설명): 해당 객체에 대한 특성을 설명하기 위한것.
    - 커서를 올릴 경우 tootip박스가 생김.
    - title은 모든 태그에 쓰일수있음. 암묵적 레이블링 
    - title속성은 평소에 안쓰다가 부연설명이 꼭 필요한곳에 쓴다.
    - `<html>`, `<head>`, `<title>`, `<base>`, `<basefont>`, `<meta>`, `<script>`, `<param>`을 제외한 모든 태그
    
Example >
```css
<img src="images/location.png" alt="패스트캠퍼스 위치" 
title="패스트캠퍼스는 지하철 3호선 신사역 1번출구에 위치. 자세한 설명은 본문을 참조하세요 "
```
찾아오시는 길의 이미지가 첨부되어 있는 경우. alt값만 있으면 이미지를 볼 수 없는 시각장애인은 위치를 알 수 없다. 이런경우 title의 속성으로 이미지대한 상세한 부연설명을 해줘야한다.

## nth-child : 가상 클래스
- even 짝수, odd 홀수 (ex: li:nth-child(even){color})
  ``` css
   /* 2,4,5 짝수 값 빨간색 */
   li:nth-child(even){color:red;}
  ```
- 정수 - 양수, 음수, 0 가능 
  ```css
   /* 목록 중 5번째만 빨간색 */
   li:nth-child(5){color:red;}
  ```
- 공식(an + b) : a는 선택할 숫자 간격, b는 선택할 시작 숫자값, n카운트이면 첫번째는 0으로 시작됨
  ```css
   /*
     (2 * 0) = 0
     (2 * 1) = 2
     (2 * 2) = 4 
   */
   li:nth-child(2n+2)
   
   /* 여러가지 방식*/
   li:nth-child(2n-1)
   li:nth-child(-n+3)
  ```
## dl dt dd 요소
 1. 정의형 목록(definition list) : '용어'와 '그 설명'으로 구성된 목록
 1. dl : 정의형 목록, block element. 
 1. dt : 정의형 용여(definiton term). inline element.
 1. dd : 그 설명(definition description). block element.
 ```html
  <!--definition list-->
  <dl>
  		<dt>definition list, inline</dt>
  		<dd>
  		   <p>dd element is defintion description, but also block element</p>
  		   <p>we can become front end developer ! cheer up kkkk</p>
  		 </dd>
  </dl>
 ```
