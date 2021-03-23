import React,{Component} from 'react';
import TodoListTemplate from './component/TotoListTemplate';
import Form from './component/Form';
import TodoItemList from './component/TodoItemList';

class App extends Component {
  //할일을 체크할 변수 만들기
  id = 3
  state = {
    input: "",
    todos: [
      { id: 0, text: "리액트 정리하기", checked: false },
      {id:1, text:"프로젝트 정리", checked:false},
      {id:2, text:"이력서 쓰기", checked:false}
    ]
   
  }
   onChange =(e) => {
      this.setState({
        input: e.target.value
      })
   }
  onKey = (e) => {
    if (e.key === 'Enter') {
      this.listAdd();
    }
  }
  listAdd = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  listRemove = (id) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id)
    })
  }

  listToggle = (id) => {
    //id로 받은 요소의 값이 몇 번째 인지를 찾아서-> findIndex 순서찾기
    //그 값에 해당하는 요소의 checked값을 반전

    const index = this.state.todos.findIndex(todo => todo.id === id);

    //index 번째 요소값을 저장할 변수
    const selected = this.state.todos[index];

    //checked 속성만 반전해서 자장할 배열 만들기
    //todos 배열을 복사
    //배열 전체 복사 [...배열명]
    var newTodos = [...this.state.todos];
    newTodos[index] = {
      ...selected,
      checked: !selected.checked
    }

    this.setState({
      todos:newTodos
    })


  }

  render() {
    return (
      <div>
        <TodoListTemplate form={<Form
          value={this.state.input}
          onAppChange={this.onChange}
          onCreate={this.listAdd}
          onPress={this.onKey}
        />}>
          <TodoItemList
            todos={this.state.todos}
            onRemove={this.listRemove}
            onToggle={this.listToggle}
          />
        </TodoListTemplate>
      </div>
    )
  
  
  }
    
}


export default App;
