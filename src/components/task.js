import React from 'react';

const Task = (props) => {
    const {task, setList, index, list} = props;

    const onClick= () => {
        setList(()=> {
            return list.filter(task => list.indexOf(task) !== index)
        });
    };

    const onChange = () =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
        let arr = [...list];
        for(let i=0; i<arr.length; i++){
            if((arr[i].isComplete) === true){
            }
        }
    };

    return(
        <div className="container" style={{ border: '1px solid black' }}>
            <h4 style ={{ textDecoration: 'style' }} >{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">  Completed?  </label>
                <input onChange={onChange} type='checkbox' checked={task.isComplete} />
                <br/>
                <button className="btn btn-sm btn-danger" onClick={onClick}> Delete </button>
            </div>
        </div>
        
    )
}

export default Task;