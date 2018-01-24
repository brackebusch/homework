import React from 'react';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo } = this.props;
    const list = this.props.todos.map((item, i) => <li key={i}>{item.title}</li>);

    return(
      <div>
      <h3>Todo list</h3>
        <ul>
          { list }
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    );
  }
}

export default TodoList;
