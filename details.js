// details.js

let 탭내용들 = {

  '상품상세' : '<img src="../IMAGES/상품상세설명이미지.png" alt="">',
  '상품평' : '<img src="../IMAGES/상품평이미지.png" alt="">',
  '상품문의' : '<img src="../IMAGES/상품문의이미지.png" alt="">',
  '배송/교환/반품' : '<img src="../IMAGES/배송_교환_반품이미지.png" alt="">',

}
// ----------------------------------------------------------
// 함수 밖에 만들기 때문에 페이지가 열리면 딱 한번 실행한다.
// 페이지 이동시 저장소에서 상품명 꺼내오기!
// getItem("key")

let 상품명 = localStorage.getItem("상품명");
console.log(상품명);

// div details-section 안을 비운다.
let 상세페이지내용태그 = document.getElementById('상세페이지내용');
// 2. 기존 삭제하기
상세페이지내용태그.innerHTML='';



// 3. 넘어온 상품명을 이용해서 이미지 변경하기
상세페이지내용태그.innerHTML=`<img width="500px" 
     src="../IMAGES/${상품명}.png" alt="데님재킷">
        <div class="details-content">
          <h3>${상품명}</h3>
          <p>${상품명} 입니다.</p>
          <input type="number" value="1">
          <select>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
          <br>
          <button>장바구니 담기</button>
          <button>바로구매</button>
        </div>`;

// ----------------------------------------------------------

function 탭변경(tab메뉴, 클릭한버튼){
  // 1.버튼이 클릭되면 기존 active디자인을 모두 제거 
  // getElementsByTagName() 현재 페이지에 있는 모든 버튼태그를 다 가져와서 문제가 발생한다.
  // 나는 탭 메뉴 버튼들만 그룹지어서 가져오고 싶다.

  let 모든버튼태그들 = document.getElementsByClassName("tab-btn");
  console.log(모든버튼태그들);
for(버튼 of 모든버튼태그들){
  버튼.classList.remove('active');
}

  // 2.현재 클릭된 태그만 디자인달기
클릭한버튼.classList.add('active');


  // 3.div태그 안에 새로운 html 태그를 생성한다.
    // 1) 탭내용보이기 태그를 찾는다
let tab내용보이기 = document.getElementById('탭내용보이기');
    // 2) innerHTML을 이용해서 안에 있던 내용을 모두 제거한다.
    tab내용보이기.innerHTML='';
    // 3) 현재 tab메뉴를 이용해서 객체 탭내용들변수에서 key를 이용해서 값을 가져오고 innerHTML로 새로 태그 저장한다.
    
    tab내용보이기.innerHTML=탭내용들[tab메뉴];
}

// main페이지에서 이미지를 클릭했을 때 
// details페이지로 이동하면 된다!
// 각각의 이미지파일명으로 이미지가 details페이지에 보이면 된다.
// 제목과 소개글(h,p) 태그들 변경하기 




// ==================================================
// let 탭내용 = {
//   '상품상세' : '상품상세 설명 tab 입니다.',
//   '상품평' : '상품평 설명 tab 입니다.',
//   '상품문의' : '상품문의 설명 tab입니다.',
//    '배송/교환/반품 안내' : '배송/교환/반품 안내 설명 tab입니다.'
// }

// // 버튼을 클릭할 때마다 매번 실행!
// function 탭변경(tab메뉴, 클릭한버튼태그){
//   console.log("클릭한 태그:", 클릭한버튼태그);
//   // 1.태그 찾기
//   let tab내용태그 = document.getElementById('탭내용보이기');
  


//   // if~ else 없이 한줄로 끝!
//   tab내용태그.innerText = 탭내용[tab메뉴];

//   // 기존 디자인 모두 제거;
//   let 모든버튼태그들 = document.getElementsByTagName("button");
//   console.log(모든버튼태그들);

//   for(버튼 of 모든버튼태그들){
//     버튼.classList.remove('btn-select');
//   }
// // 클릭된 버튼만 디자인 적용한다. 
//   클릭한버튼태그.classList.add('btn-select');
// }