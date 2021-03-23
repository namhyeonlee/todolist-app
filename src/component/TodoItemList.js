import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{

    render() {
        const { todos, onRemove, onToggle } = this.props;
const todoList = todos.map(({ text,id,checked }) => (
    <TodoItem
        id={id}
        text={text}
        checked={checked}
        key={id}
        onRemove={onRemove}
        onToggle={onToggle}
        
    />
    
)
   
)
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;

