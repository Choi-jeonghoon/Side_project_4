class Memo {
  constructor(key, todo, date) {
    this.key = key;
    this.todo = todo;
    this.date = date;
  }
}

//카테고리 컬럼추가

class CategoryMemo extends Memo {
  constructor(key, todo, date, category) {
    super(key, todo, date);
    this.category = category;
  }
}

class App {
  constructor() {
    this.todo = [];
  }

  getTodo(key) {
    return this.todo.find((memo) => memo.key === key);
  }

  getTodoAll() {
    return this.todo;
  }

  // addTodo(newTodo) {
  //   const memo = new CategoryMemo(
  //     newTodo.key,
  //     newTodo.todo,
  //     newTodo.date,
  //     newTodo.category
  //   );
  //   this.todo.push(memo);
  //   // new Memo(newTodo.key, newTodo.todo, newTodo.date, newTodo.CategoryMemo)
  // }

  //카테고리가 있는없는지에 따라 다르게 산출
  addTodo(newTodo) {
    if ("category" in newTodo) {
      const memo = new CategoryMemo(
        newTodo.key,
        newTodo.todo,
        newTodo.date,
        newTodo.category
      );
      this.todo.push(memo);
    } else {
      const memo = new Memo(newTodo.key, newTodo.todo, newTodo.date);
      this.todo.push(memo);
    }
  }

  updateTodo(key, newTodo) {
    this.todo = this.todo.map((t) => {
      if (t.key === key) {
        const { key, todo, date } = newTodo;
        return new Memo(key, todo, date);
      } else {
        return t;
      }
    });
  }

  deleteTodo(key) {
    this.todo = this.todo.filter((t) => t.key !== key);
  }
}

const app = new App();
/*
const memo1 = new Memo(100, "메모테스트1", new Date());
const memo2 = new Memo(200, "메모테스트2", "2023-04-04");
const memo3 = new Memo(300, "메모테스트3", "2023-04-05");
app.addTodo(memo1);
app.addTodo(memo2);
app.addTodo(memo3);
아래와 같은 결과를 산출한다.
*/
chart_project

app.addTodo(new Memo(100, "메모테스트1", new Date()));
app.addTodo(new Memo(200, "메모테스트2", new Date()));
app.addTodo(new Memo(300, "메모테스트4", new Date()));

//카테고리 값이 있는걸로 출력할시
app.addTodo(new CategoryMemo(100, "메모테스트5", new Date(), "잡소리"));

// console.log("특정값 만 가져오기:", app.getTodo(1));
console.log("전체 가져오기:", app.getTodoAll());
// app.deleteTodo(300);
// console.log("삭제 확인:", app.getTodoAll());
// console.log(
//   "값 추가하기:",
//   app.addTodo(new Memo(4, "값추가 4번", "2023-04-06"))
// );
// console.log("추가된 값 확인:", app.getTodoAll());
// console.log("수정 확인:", app.getTodoAll());
// app.updateTodo(3, new Memo(4, "메모테스트4", new Date()));
// console.log("수정 확인:", app.getTodoAll());
