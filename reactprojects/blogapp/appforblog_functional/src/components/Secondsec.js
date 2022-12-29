import React, { useState } from 'react';
const Secondsec = () => {

    const [name, setName] = useState("");
    const updateInput = (e) => {
        setName({ name: e.target.value });
    }

    const handleSubmit = () => {

        alert("CONGRATULATIONS ON WINNING FREE BOOK");
    }





    return (
        <div >
            <h3 style={{ color: "blue", textAlign: "center" }}>WELCOME TO HEALTHY LIVING</h3>
            <form className='Formstyling'>
                <label>ENTER YOUR DETAILS TO GET FREE COPY </label> <br></br><br></br>
                NAME: <input type="text" id="customername" onChange={updateInput} /> <br></br><br></br>
                EMAIL: <input type="text" id="email" /> <br></br><br></br>
                <input type="submit" onClick={handleSubmit} value="SUBMIT HERE" />
            </form><br></br><br></br>
            <ul className='b'>
                <li>A healthy lifestyle keeps us fit.</li><br></br>
                <li>A healthy lifestyle includes healthy foods.</li><br></br>
                <li>Proper sleep is necessary for a healthy lifestyle.</li><br></br>
                <li> We should avoid junk foods.</li><br></br>
                <li>Healthy lifestyle keeps you disease-free.</li><br></br>
            </ul>



        </div>
    )
}

export default Secondsec;
