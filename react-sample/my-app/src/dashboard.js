
import * as React from 'react';
import { TextField,  Autocomplete } from '@mui/material';
import { useState, useEffect } from 'react';

export default function BasicTextFields() {

const [bNo,setbNo] = useState("")
const [bDate,setbDate] = useState("")
const [cNum,setcNum] = useState("")
const [iRate,setiRate] = useState("10")
const [iAmount,setiAmount] = useState("")
const [iQty,setiQty] = useState("")
const [inputList, setInputList] = useState(['']);

useEffect(() => {
  const currentDate = new Date().toISOString().split('T')[0]; // Formats the date to yyyy-mm-dd
  setbDate(currentDate);
}, []);

const handleChange = (e,name) => {


  switch (name) {
    case "bNo":
       setbNo(e.target.value);
       break;
    case "bDate":
       setbDate(e.target.value);
       break;
    case "cNum":
       setcNum(e.target.value);
       break;
    case "iRate":
      setiRate(e.target.value);
      // calculateAmount(e.target.value, iQty); // Recalculate amount when rate changes
      break;
    case "iAmount":
       setiAmount(e.target.value);
       break;
    case "iQty":
       setiQty(e.target.value);
      //  calculateAmount(iRate, e.target.value); // Recalculate amount when quantity changes
       break;
    case "inputList"
      
    // const newList = [...inputList];
    // newList[name] = e.target.value;
    setInputList(newList);

    break;
}

  }

  
  const newList = [...inputList];
  newList[name] = e.target.value;
  setInputList(newList);
}

const handleAddInput = () => {
  setInputList([...inputList, '']);
};




const calculateAmount = (rate, qty) => {
  // Convert values to numbers and calculate the amount
  const quantity = parseFloat(qty);
  const rateValue = parseFloat(rate);
  
  if (!isNaN(quantity) && !isNaN(rateValue)) {
    setiAmount(quantity * rateValue);
  } else {
    setiAmount(""); // If the quantity or rate is invalid, reset the amount
  }
};

const onmsg =(name1)=> {
  switch (name1) {
    case "bNo":
      // if(bNo) alert(bNo);
      break;
    case "bDate":
      // if(bDate) alert(bDate);
      break;
    case "cNum":
      // if(cNum)alert(cNum);
       break;
    case "iRate":
      calculateAmount(iRate,iQty)
      // if(iRate) alert(iRate);
       break;
    case "iAmount":
      // if(iAmount) alert(iAmount);
       break;
    case "iQty":
      // if(iQty) alert(iQty);
      calculateAmount(iRate,iQty)

       break;
  }
  
}


const CusList=[{label:"Rajkumar"},  {label:"Neelamegam"},  {label:"RaviKumar"},  {label:"kumar"}]
const ItemList=[  {label:"mango"},  {label:"papaya"},  {label:"orange"},  {label:"guva"}]
 
return (
    <div className="ds">
      <div className='header'>
        <h1>Welcome To Shop</h1>
      </div>
       <div className='box'>
        <TextField className='tbox' type ="text" label="Bill No" variant="outlined" onChange={(event) => handleChange(event, "bNo")} value={bNo} onBlur={() => onmsg("bNo")} tabIndex={1}/> 
        <TextField className='tbox' type ="date" label="Bill Date" variant="outlined" onChange={(event) => handleChange(event, "bDate")} value={bDate} onBlur={() => onmsg("bDate")} tabInde={2}  />
        <Autocomplete
        disablePortal
        options={CusList}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Cusomer" className='tbox' tabIndex="4"/>}
        />
        <TextField className='tbox' type ="number" label="cell" variant="outlined"  onChange={(event) => handleChange(event, "cNum")} value={cNum} onBlur={() => onmsg("cNum")} tabIndex={3} />
      </div> 
      
      <div className='box'>
        <Autocomplete
        disablePortal
        options={ItemList}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Items" className='tbox' tabIndex="5"  />}
        />

        <TextField className='tbox' type ="number"label="Qty" variant="outlined" onChange={(event) => handleChange(event, "iQty")} value={iQty} onBlur={() => onmsg("iQty")} tabIndex="6" /> 
        <TextField className='tbox' type ="number" label="Rate" variant="outlined"  onChange={(event) => handleChange(event, "iRate")} value={iRate} onBlur={() => onmsg("iRate")} tabIndex="7"/>

        <TextField className='tbox' type ="number" label="Amount" variant="outlined" onChange={(event) => handleChange(event, "iAmount")} value={iAmount} onBlur={() => onmsg("iAmount")} tabIndex="8"/>
      </div>

      <div>

        <h1>Itenlist</h1>

        <button onClick={handleAddInput}>Add</button>
        <button>Delete</button>


        <ul>
        {inputList.map((inputValue, index) => (
          <li key={index}>{inputValue}</li>
        ))}
      </ul>


      </div>

      </div>
  );
}


