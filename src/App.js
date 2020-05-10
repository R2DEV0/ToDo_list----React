import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import Task from './components/task'


function App() {

  const [list, setList] = useState([])

  return (
    <div className="App container" style={{width: '800px'}}>
      <Form list={list} setList={setList} />
      <br/>
      {list.map((task, i)  => (<Task task={task} setList={setList} index={i} list={list} />))}
    </div>
  );
}

export default App;
