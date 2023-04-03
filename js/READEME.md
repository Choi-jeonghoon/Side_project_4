## JS 연습하고 메모하는 곳



## Memo App

나만의 Memo App 구현

```javascript
class Memo {
  constructor(key, todo, date) {
    this.key = key;
    this.todo = todo;
    this.date = date;
  }
}
/**
 * this.todo에 들어갈 모든 todo는 Memo 클래스 객체여야 합니다.
 */
class App {
  constructor() {
    this.todo = [];
  }

  getTodo(key) {
    // TODO: todo 하나 가져오기 구현
  }

  getTodoAll() {
    // TODO: todo 전체 출력하기 구현
  }

  addTodo(newTodo) {
    // TODO: todo 추가하기 구현
  }

  updateTodo(key) {
    // TODO: todo 수정 구현
  }

  deleteTodo(key) {
    // TODO: todo 삭제하기 구현
  }
}

const app = new App();
```