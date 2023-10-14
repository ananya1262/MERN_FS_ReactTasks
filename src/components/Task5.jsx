import React, { useRef, useState } from 'react'

function Task5() {
    const [date, setDate] = useState("");
    const [age, setAge] = useState(0);
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };
    const calculateAge = (date) => {
        const today = new Date().getTime();
        const birthDate = new Date(date).getTime();
        const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365));
        setAge(age);
    };
    return (
        <div className="container" >
            <header className="App-header" style={{"display": "flex", "flexDirection": "column", "justifyContent":"center", "alignItems":"center","marginTop":"10%"}}>
                <h1 style={{color:"white"}}><b>Age Calculator</b></h1>
                <br />
                <h6 style={{"marginTop":"10px",color:"white"}}><b>Enter your date of birth</b></h6>
                <div className="Age-Container" style={{"display": "flex", "flexDirection": "column", "justifyContent":"center", "alignItems":"center","marginTop":"5px"}}>
                    <input type="date" onChange={handleChange} ref={dateInputRef} /> 
                    <br />
                    <button className='btn bg-primary text-white' onClick={() => calculateAge(date)} style={{"marginTop":"10px",}}>Calculate Age</button>
                    {age === 0 ? (
                        <h3 style={{"marginTop":"5px",color:"white"}}>Enter Date to calculate your age</h3>
                    ) : (
                        <h4 style={{"marginTop":"10px",color:"white"}}><b>You are {age} years old</b></h4>
                    )}
                </div>
            </header>
        </div>

    )
}

export default Task5