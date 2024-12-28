import React,{useState} from "react"
import { Link } from "react-router-dom";
import "../App.css"
import Registration from "./Registration";
import eye from '../eye.jpeg';
const Loginform = () =>{
    function handle()
    {
        let pass=document.getElementById("pass")
        if(pass.type === 'password')
        {
            pass.type = 'text';
        }
        else{
            pass.type ='password';
        }
    }
    const [data,setData]=useState({
        username:'',
        password:'',
    })
    const {username,password}=data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        alert("Form Submitted");
        e.preventDefault()
        console.log(data)
        
    }
    function clear(){
        let pass=document.getElementById("pass")
        let username=document.getElementById("username")
        if(pass.value === '' && username.value ==='')
        {
            pass.placeholder = 'password';
            username.placeholder = 'username';
        }
        else{
            pass.value=''
            username.value=''
        }
        
    }
   
    return(
       
        <div>
           
            <div className='box'>
            <form onSubmit={submitHandler}> 
                <h1>Login</h1>
                <br></br>
                <input type='text' placeholder="username" name="username" id="username" value={username} onChange={changeHandler} autoComplete="of"/>
                <br></br>
                <br></br>
                <input type='password' placeholder="password" name="password" id="pass" value={password} onChange={changeHandler} style={{marginLeft:'23px'}} />
                <img src={eye} style={{width:'20px',height:'20px',borderRadius:'50px',marginLeft:'2px',cursor:'pointer'}} id='eye' onClick={handle}></img>
                <br></br>
                <br></br>
                <button className="button-85" role="button">Submit</button>
                <br></br>
                </form>
                <h4 >click here to clear fields  <button onClick={clear} style={{border:'3px solid grey',fontSize:'20px'}}>clear</button></h4>
                <br></br>
                <p style={{display:'inline',fontSize:'20px'}}>To Create a account :</p><Link to="/reg" style={{marginLeft:'10px',fontSize:'20px'}}>ClickHere</Link>
            </div>
           
        </div>
       
    )
}
export default Loginform;