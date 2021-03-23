import React, { Component } from "react";
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        // this.props.text 
        const {text, id, onRemove, onToggle, checked} = this.props;
        return ( 
            <div className="todoItem" onClick={()=>onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    //부모요소의 이벤트를 받지 않도록
                    e.stopPropagation();
                    onRemove(id)
                }}> x </div> 
                <div className={`todoText ${checked &&'checked'}`}>{text} </div> 
                <div>{ checked && 'checked'}</div> 
            </div>
        )
    }
}
export default TodoItem;