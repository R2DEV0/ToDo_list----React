import React from 'react';

var randomWords = require('random-words');

const Form = (props) => {
    const{list, setList} = props;
        let task={
            name: "",
            isComplete: false
        };
    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list])
        if(task.name === ""){
            task={
                name: randomWords({exactly: 1, wordsPerString:5}),
                isComplete: false
            }
        }
        setList([...list, task])
    };

    return(
        <div className="container w-50 mt-3">
            <input className="form-control"onChange={onChange} type='text' name='task'/>
            <button className="btn btn-primary btn-block mt-1"onClick={onClick}>Add New Task</button>
        </div>
    )
}

export default Form;