---
layout: post
title: HTML 마크업 기초
category: html
permalink: /html/:title/

tags: [html5, markup, 마크업]
comments: true
---
>[참고](https://github.com/seulbinim/FC-FDS/blob/master/intro.pdf){:target="_blank"}

## **Web의 기본**  

### Internet Service
* Telnet 원격조정
* Usenet 커뮤니티
* IRC 채팅서비스
* Archie, Gopher 검색서비스

### Web이란?
www 팀버너스리가 창시. 웹의 아버지
1. BACK-END (서버, 데이터베이스)
2. FRONT-END (클라이언트, 웹브라우저)
    * HTML 건강한신체 -> 구조적인 마크업을 생각해내야함 
    * CSS 근사한 스타일링
    * Javascript 스마트한 두뇌 > 유연한 개발자가 되기위한  
    
>개발적인측면에서 html, css 안좋음. why? 복붙의 연속  
-> Sass, pug등으로 해외에서는 대체되고 있는 시점임

### 웹표준이란?
사용자가 어떤 브라우저나 기기를 사용하더라도 내용을 동일하게 볼 수 있도록 해주는 표준(일종의 약속) 웹표준을 지켜야하는 이유는?
1. 효율적인 마크업: 페이지 로딩시간 단축
2. 크로스브라우징: 다양한 종류의 브라우저에서도 정보를 잘 볼 수 있음
3. 웹접근성에 도움: 어떤 기기에서도 잘보이므로 스크린리더등 장애인을 위한 프로그램도 잘 동작하여 접근성이 좋아짐

> 마크업 작성하며 틈틈히 확인하도록 -> [W3C Markup검증 서비스](http://validator.kldp.org/){:target="_blank"}  
추천책 _ 제프리젤드만의 웹표준가이드


### 웹접근성이란?
다양한 수단을 통해 누구나 접근하기 쉬운 환경을 만들어, 인터넷을 차별 없이 사용할 수 있도록 보장하는 것
* 팀버너스리 왈, "웹의 힘은 그 보편성에 있다. 장애에 구애 없이 모든 사람이 접근할 수 있는 것이 필수적인 요소이다"
* 이상묵교수 왈, " 장애인에게 필요한 것은 줄기세포가 아니라 현실적인 IT 기술 "
* 웹접근성은 선택이 아닌 필수 (과태료부과등 법률 있음)

### 환경에 대한 이해
* Cross Browsing: 다양한플랫폼 대응
* SEO (Search Engine Optimization) 검색엔진 최적화   
구글의 검색에 상위에 위치됨
-> 한국은 포털이 돈내면 검색상위에 올려주기때문에 SEO에 많이 집중안하지만, 일본에선 이게 제일 중요하다고함
* 저사양 또는 저속회선
-> 한국은 인터넷강국이기 때문에, 속도에 신경을 안씀
-> but, 모바일때문에 최근에 관심가지고 있는중

### 웹접근성을 위한 2가지 방법론

1. 가이드라인 준수 
WCAG (Web Content Accessibility Gudeline)
2. 표준 준수 WAI-ARIA  
(Web Accessibility Initative-Accessible Rich Internet Applications) 대부분의 상용 브라우저들과 스크린리더 기기는 ARIA를 지원

___
## **HTML5 Markup**

### HTML의 탄생

* 1999년 XHTML
* 과거의 html은 간단한 마크업언어였음
* HTML 3.0버전이 가장 망작. 데코레이션 기능이 추가되면서 마크업언어의 위상이 떨어짐
* 그래서 W3C가 XML을 기반으로한 XHTML을 만들음.
    * 명령어는 소문자로만 _ 대/소문자 둘다가능한 문법이 느슨한 것은 개발적관점에서 좋지않음
    * 더블사이드 명령어 `<p>` `</p>` 짝꿍
* W3C가 XHTML2.0 실패인정하고, WHATWG(5대브라우저가 설립한 그룹)의 표준안을 반영하여 HTML5 탄생
(밴더들의 요구사항이 너무 많이 반영되어 기준으로서의 잣대역할이 흔들리는듯함)


### 아웃라인 알고리즘 (Outline Algorithm)
HTML5에서 정보 구조를 명확히 하기위한 개념 도입 (책의 목차와 비슷) -> [참고](https://docs.google.com/presentation/d/1Z_L7Jm1bTd9MmiVHWnX90HwyyP9xaDQ1g0w4_yM5sQo/mobilepresent?slide=id.g207806c5f7_0_228){:target="_blank"}
* **섹셔닝 루트(Sectioning Root)**  
독립적인 콘텐츠로 분리되어 아웃라인에 영향을 주지는 않지만, 보이지 않는 자기만의 제목이 있다. 독립체지만 구조중 하나에 포함될 수 있도록 해줘야 좋은 아웃라인이 됨
`<blockquote>, <body>, <detail>, <fieldset>, <figure>, <td>`
* **섹셔닝 콘텐츠 (Sectioning Content)**  
대부분 HTML5에 새로 추가된 요소, 반드시 헤딩 `<h1>`을 포함해야함
`<section>, <article>, <nav>, <aside>`
* **헤딩 콘텐츠(Heading Content)**  
문서의 아웃라인을 고려하여 사용해야함  
`<h1>, <h2>, <h3>...`

### HTML5의 API (Application Programming Interface)
HTML5에서는 Js기술을 좀 더 편리하게 이용할 수 있도록 다양한 API를 지원

* 어플리케이션 캐쉬: 구글맵으로 네비게이션 시뮬레이션하면 어플리케이션 캐쉬에 저장. 오프라인에도 작동됨
* 기울기 감지: 포트레잇, 랜드스케이프 ver

### 마크업순서
1. 논리적인 구조설계  
디자인순서와 논리적자료의 순서는 다르다!  

헤더 > 네비게이션 | `<header>``<nav>`  
비주얼컨텐츠 | `<div>`          
메인, 사이드바 | `<main>` :딱 한번만 사용가능  
슬로건 | `<section>``<article>` 독립컨텐츠  
푸터 주소, 저작권 | `<footer>`

2. 시맨틱 마크업
* 사람뿐만아니라 기계도 이해할 수 있는 구조설계
* `<div>`로만 이루어져있는 경우에 role="banner"로 역할지정
* ARIA


### 네이밍방법

* Camel케이스
mainContent
* 언더바 케이스
main_content
* 케밥case
main-content

