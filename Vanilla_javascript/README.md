# VJSPJ

## ValnillJS로 구현해보기

### 예시

```javascript
const root = document.getElementById("root");

const btnEl = document.createElement("button");
btnEl.innerText = "Button";
btnEl.addEventListener("click", (e) => {
  alert("Event");
});

// ID는 중복될 수 없으므로
// querySelector를 활용하여 전부 다 가져온 다음
// forEach를 돌면서 이벤트를 순차적으로 추가해준다.
root.innerHTML = `    <div class="card-container">
        <div class="card-wrapper">asdfdasf</div>
        <div class="card-wrapper">asdfdasfsaf</div>
    </div>`;

const div = document.querySelectorAll(".card-wrapper");
div.forEach((item) => {
  addEvent(item);
});

function addEvent(element) {
  element.addEventListener("click", () => {
    alert("Hi");
  });
}
```
