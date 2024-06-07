import React, { useState } from 'react'


const Calculator = () => {
  const [data,setData]=useState("");

  const calculation=()=>{
    try{
    // console.log(eval(data));
    console.log(data)
    if(data==="Error"){
      setData("Error")
    }
    else
    setData(eval(data).toString());
    }
    catch{
      setData("Error")
    }

  }

  const back=()=>{
    if(!(data==='Error'))
    setData(data.slice(0,-1))
    else{
      setData("")
    }
  }
  
  const clear=()=>{
    setData("")
  }
  const getvalue=(event)=>{
    if(data==='Error'||data===0){
      setData(event.target.value);
    }
    else{
      setData(data.concat(event.target.value));
    }
  }
  return (
    <div className='cal'>
      <h1>Basic Calculator</h1>
    <div className="container">
      <div>
        <input  placeholder='0' value={data}/>
      </div>
      <br />
      <button type='button' className='btn btn-light'  onClick={getvalue} value={"("}>(</button>
      <button type='button' className='btn btn-light'  onClick={getvalue} value={")"}>)</button>
      <button type='button' className='btn btn-danger'  onClick={clear}   value={"AC"}>AC</button>
      <button type='button' className='btn btn-warning'  onClick={getvalue} value={"%"}>%</button>
<br />
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"7"}>7</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"8"}>8</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"9"}>9</button>
      <button type='button' className='btn btn-warning'  onClick={getvalue} value={"*"}>*</button>
<br />
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"4"}>4</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"5"}>5</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"6"}>6</button>
      <button type='button' className='btn btn-warning'  onClick={getvalue} value={"-"}>-</button>
<br />
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"1"}>1</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"2"}>2</button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"3"}>3</button>
      <button type='button' className='btn btn-warning'  onClick={getvalue} value={"+"}>+</button>
<br />
      <button type='button' className='btn btn-secondary'  onClick={back} ><b><i className="bi bi-backspace"></i></b></button>
      <button type='button' className='btn btn-info'  onClick={getvalue} value={"0"}>0</button>
      <button type='button' className='btn btn-success'  onClick={calculation}>=</button>
      <button type='button' className='btn btn-warning'  onClick={getvalue} value={"/"}>/</button>
    </div>
    </div>
  )
}

export default Calculator
