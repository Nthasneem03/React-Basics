import React, { useState } from 'react'

const Form = () => {
   const [name,setName]  = useState('');
   const [age,setAge]  = useState();
    function handleSubmit(e) {
        e.preventDefault();
        alert('Submited!');

    }

   function handleChangeAge(e) {
    setName(e.target.value);
    
   }
  return (
    <>
    <h1 style={{marginTop:'5rem',marginLeft:'1rem'}}>Forms in React :</h1>
    <form className='card' onSubmit={handleSubmit}>
        <label htmlFor='name' style={{ marginBottom: '10px' }}>Name: </label>
        <input id='name' type='text' name='name' style={{ marginBottom: '20px' }} value={name} onChange={handleChangeAge}/>
        <br/>

        <label htmlFor='age' style={{ marginBottom: '10px' }}>Age: </label>
        <input id='age' type='number' name='age' min='1' max='100' style={{ marginBottom: '20px' }} />
        <br/>

        <label htmlFor='email' style={{ marginBottom: '10px' }}>Email: </label>
        <input id='email' type='email' name='email' style={{ marginBottom: '20px' }} />
        <br/>
        
        <label htmlFor='message' >Message: </label>
        <textarea id='message' name='message'></textarea>
        <br/>
        <button type='submit' style={{ marginTop: '20px' }}>Submit</button>
    </form>



    </>
  )
}

export default Form