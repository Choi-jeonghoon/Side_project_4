function showModal() {
  const modal = document.getElementById("myModal");
  // modal 변수를 선언하여 모달창을 나타내는 div 엘리먼트를 가져오고,
  modal.style.display = "block";
  /*
    modal.style.display를 "block"으로 설정하여 모달창을 화면에 보이도록 합니다.
    */
  const closeBtn = document.querySelector(".close");
  // closeBtn 변수를 선언하여 모달창에서 닫기 버튼을 나타내는 엘리먼트를 가져옵니다.
  closeBtn.addEventListener("click", function () {
    /* closeBtn 엘리먼트에 addEventListener 메소드를 사용하여 클릭 이벤트를 등록합니다. */
    modal.style.display = "none";
  });
  /*
    클릭 이벤트가 발생하면 모달창을 나타내는 div 엘리먼트의 display 스타일 속성 값을 "none"으로 설정하여 모달창을 닫습니다.
     */

  //아래 코드를 삭제시 모달창외 바깥쪽을 클릭하면 모달창이 닫히는 상태를 없앨 수 있다
  window.addEventListener("click", function (event) {
    // window 객체에 클릭 이벤트 리스너를 등록하여, 모달창 바깥쪽을 클릭하면 모달창을 닫도록 합니다.
    if (event.target == modal) {
      modal.style.display = "none";
    }
    /*
      event.target을 사용하여 클릭된 엘리먼트가 모달창이 아닌 경우에만 모달창을 닫습니다.
      */
  });
}

function createModalBox() {
  // 함수 내부에서는 modalHtml 이라는 문자열 변수를 정의하고 있습니다. 이 변수는 모달 창의 HTML 구조를 담고 있습니다.
  const modalHtml = `
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>모달창 내용</p>
        </div>
      </div>
    `;
  root.insertAdjacentHTML("beforeend", modalHtml);
  /*
    root.insertAdjacentHTML("beforeend", modalHtml) 코드는 root라는 DOM 요소의 마지막 자식 요소로 modalHtml을 추가하는 메소드 이는 새로 생성한 모달 창의 HTML 구조를 실제 DOM에 추가하는 역할을 합니다.
    */
  showModal();
  // showModal() 함수를 호출하여 모달창을 보이도록 합니다
}

const root = document.getElementById("root");
root.innerHTML = `    
  <div class="card-container">
      <div class="card-box" onclick="createModalBox()"> + Add another list</div>
  </div>
  `;
