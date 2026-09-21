import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Nodemailer() {
    const [email, setEmail] = useState("")

    async function sendMail(e){
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/sender/mailer",{
                msg:email
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        <p className="center">This is the nodemailer email sender page</p>

        <div>
            <form action="" onSubmit={sendMail}>
                <label htmlFor="">Enter the email to send here</label>
                <div>

                </div>
                <input style={{
                    width:'400px',
                    height:'70px',
                    border:'2px solid black',
                    borderRadius:'10px',
                    textAlign:'center'
                }} name="" id="" value={email} type='text' onChange={(e)=>setEmail(e.target.value)}>Enter your email context here </input>
                <div>

                </div>
                <button  type='submit'> send email</button>
            </form>
        </div>
    </div>
  )
}

export default Nodemailer