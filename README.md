[Author: 김준호]
[Create Date: 2023.01.03]

## FrontEnd + Vite + TypeScript

```
React, TypeScript 및 DB 계층구조의 이해를 높이기 위한 연습 과제

React + Vite + TypeScript
```

## Data 구조

- src >> types >> productType 가 중심

  - Product는 자신이 속한 Category의 정보를 알야아만 한다.
  - Product는 Company에 대한 정보를 알고 있다.

    - [Company]에 대한 정보는 types > companyType

  - Category는 src >> category >> categoryType 확인

## 문제1

App.tsx에서 넘어온 props ( 상품에 대한 정보 및 cateogry에 대한 정보 ) 를 활용하여 간단한 쇼핑몰 구현.

모든 데이터를 넘겨주면서 서비스를 구현하지 말고 필요한 데이터만 넘겨 사용할 것

1. Product에 대한 정보를 List로 뿌려주는 Page 하나

- 상품에 대한 이름을 확인할 수 있어야함
- 상품에 대한 가격을 확인할 수 있어야함
- 상품에 대한 설명을 확인할 수 있어야함

2. Product의 Detail을 확인할 수 있는 Page 하나

- Vendor의 정보 확인이 가능해야함
- Company의 정보 확인이 가능해야함
- Tag의 정보들을 확인할 수 있어야함
- 즉 상품에 대한 필요한 모든 정보를 Detail 페이지에서 보여지도록 구성

3. Category를 Header에서 확인 가능하도록 Layout을 구성할 것

- Router를 활용할 경우 Code splitting 활용
  - Suspense의 fallback component를 꼭 만들어 볼 것

4. 추가 문제

- Mock API를 활용하여 페이지네이션 기능 추가
- Mock API를 활용하여 Category 불러오기

## 제출

각자 Branch 이름 파서 그 곳에 commit push 진행할 것

## 문제2

group.json 데이터를 확인하고 이에 해당하는 Type을 정의한 후 해당 API 통신을 통해 데이터를 받아 이에 해당하는 UI 제작.

1. 사업조직에 대한 이해를 바탕으로 **Type interface** 설계

2. UI는 카드 형식으로 나타내도 무방. 본인이 원하는 방식으로 UI를 표현할 것
   (단, 조직의 계층 구조가 보여야 함)
