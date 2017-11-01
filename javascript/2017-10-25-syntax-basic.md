---
layout: post
title: 자바스크립트의 문법 기초
category: javascript
permalink: /javascript/:title/

tags: [자바스크립트, Syntax]
comments: true
---
## **Javascript Syntax Basics**

- 구문(Statement): 각각의 명령을 의미. 실행되면 무슨 일이 일어남. 프로그램은 구문(명령)들의 집합이다
- 코드블록(Code block): 함께 실행되어져야 하는 구문을 그룹화하는것  
-> 자바스크립트는 블록단위가 아닌 함수단위 유효범위(Function-level-scope)를 갖는다
- 표현식 (Expression): 하나의 값을 만드는 문장
    ```javascript
    'Hello' + ' ' + 'Bong' // Hello Bong
    8 * 10 // 80
    ```
- 변수(Variable): 값을 받아들이는 상자 (한번 쓰고 버리는 값이 아닐경우 변수에 담는다)
    - 참조: 값을 꺼내서 사용하는것
    - 할당(저장): 값을 집어넣는 것
    - 자바스크립트에서는 변수의 값으로 문자열, 숫자, boolean 구분없이 모두 할당O (= type이 없다)  
    이는 프로그램이 커졌을 때 문제를 유발-> 타입스크립트 사용 (변수에 타입을 지정)
    - 자바스크립트가 로드될 때 var 선언된 만큼 메모리에 공간을 만드는데, 변수명은 이 공간을 가르키는 식별자(Identifier)이다.
- 값(Value): 변수에 저장되는 값 
    - 값 자체를 리터럴(literal)이라고 부름
    - 기본자료형(Primitive): string, number, boolean, undefined, null, symbol(ES6)
    - 객체형: object
- 주석(Comment): 코드의 의미를 설명하기 위해 사용
    - 잘 만들어진 코드는 좋은 주석을 가지고 있음 (길지도 짧지도 않은 가독성 좋은 설명)
    - 왜 쓰나?  
    미래의 나를위해: 3개월 뒤면 내코드가 내코드가 아님 (기억이 안나기 때문)  
	남을 위해: 코드를 볼 다른사람이 잘 이해되도록 (읽기 좋은 코드가 좋은 코드, 협업에 중요함)

    - 주석은 해석기(parser)가 무시하며 실행되지 않음
    -  // : 한줄 주석   
    /* */ : 여러줄 주석