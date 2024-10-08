import './App.css';
import { useState,useEffect } from 'react';
import data from './components/data';
import Api from './components/api';
import Form from './components/Form';

function App() {

  const [text,setText] = useState('Hello');
  const [student,setStudent] = useState(data);
  const [btnText,setBtnText] = useState('clear data');
  const [count,setCount] = useState(0);

  const text1 = 'hi';
  const text2 = 'hello';
  const first = text1 || text2;
  const second = text1 && text2;


  function handleClick() {
    if (text==='Hello') {
      setText('Hi')
    }
    else {
      setText('Hello')
    }
  }

  function clearStudent() {
    
    if(btnText === ('clear data')) {
      setStudent([]);
      setBtnText('show data')
    }
    else {
      setStudent(data);
      setBtnText('clear data')
    }
  }


  function increaseValue() {
    setCount(count+1);
  }

  useEffect(() => {
    console.log('useEffect is running');
  },[count])


  return (
    <>
    
    
    <div className='hooks'>
      <h1 >Hooks : useState</h1>
      <p>Using hooks [useState] to change contents</p>
      <p> It has 2 parameters: the current state value and a function to update that state.</p>
      <h2>{text}</h2>
      <button onClick={() => handleClick()}>Change message</button>
    </div>


    <div style={{textAlign:'center'}}>
    <h2 className='section_heading' >Array + useState</h2>
    <p className='section_desc'>Use Array and useState hooks </p>
    {
      student.map((stud) => {
        // console.log(stud);
        
        return (
          <div className='card' key={stud.id}> 
          <h4>Student {stud.id}</h4>
          <h5>Student Name: {stud.name}</h5>
          <p>Age: {stud.age}</p>
          </div>
        )
      })
    }
    <button onClick={clearStudent}>{btnText}</button>
    </div>




    <div className='hooks'>
      <h1>Hooks : useEffect</h1>
      <p>Using hooks [useEffect] to handle side effects in functional components.</p>
      <p>It has 2 parameters:</p>
      <ol>
        <li>A function that contains the code for the side effect.</li>
        <li>An optional dependency array that specifies when the effect should run.</li>
      </ol>
      <h4>{count}</h4>
      <button onClick={increaseValue}>Increment</button>
      
    </div>


    <Api/>


    <div style={{marginLeft:'1rem'}}>
    <h2 >Short circuit evaluation:</h2>
    <h3>1 (or) : {first}</h3>
    <h3>2 (and): {second}</h3>
    </div>


    <Form>
    </Form>
    </>
  );
}

export default App;
