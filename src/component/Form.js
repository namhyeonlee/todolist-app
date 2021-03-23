import React from 'react';

const Form = ({value, onAppChange, onCreate, onPress}) => {
    return (
        <div className="inputForm">
            <input type="text"
                value={value}
                onChange={onAppChange}
            onKeyPress={onPress}/>
            <button
                className="addButton"
                onClick={onCreate}
                
            >추가</button>
        </div>
    )
}

export default Form;