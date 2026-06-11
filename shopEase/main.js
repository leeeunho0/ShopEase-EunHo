// main.js

function 상세페이지로이동(상품명){
  console.log("상세페이지 이동 함수");
  // main.html 파일에서 details.html 파일로 상품명을 옮길 때
  //  전달할때는 함수명도 사용이 불가능하다.
  //  페이지들끼리 새로고침을 하면 내용이 다 사라진다.
  //  브라우저에 저장해서 새로고침을 해도 데이터가 남아있는 공간을 제공한다.
  //  자바스크립트가 기본적으로 제공을 한다.

  // 저장하기 setItem(key,value)
  localStorage.setItem("상품명",상품명);

  // 상품페이지로 이동하는 코드
  location.href='details.html';
}