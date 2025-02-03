import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db, googleAuth } from '../Firebase/fire'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
  
  var goHome = useNavigate()
    var [comp, setComp] = useState({
        logemail: '',
        logpass: ''
        })
        var [ans1,setAns1]=useState([])

        var userLogData = useSelector(st=>st.loginReducer)
        var dispatch = useDispatch()
        console.log(userLogData);

       

  function loghandel(h){
    var { name, value } = h.target
    
    setComp({ ...comp, [name]: value })
    
    console.log(comp.logemail);
  }
  
  
  var userCollaction = collection(db,"user")

 async function getUserData(){

    var usertData = await getDocs(userCollaction)
     ans1 = usertData.docs.map((el) => {
      return {id: el.id,...el.data()}
        
    })
setAns1(ans1)


    console.log(ans1);
  }





  async function submitLog(e){
    e.preventDefault()
    dispatch({type:"LOADING1"})
    await  getUserData()
     ans1.filter((el) => {if(el.email === comp.logemail){localStorage.setItem("isUser",el.user),localStorage.setItem("isUserEmail",el.email.slice(0,2))}} );  

    let foundUser = ans1.find((el) =>el.email === comp.logemail ); 
    let foundPass = ans1.find((el) => el.pass == comp.logpass);  

    
    if (foundUser && foundPass) {
      Swal.fire({
        title: "Login Successful",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonText: "Go to Home"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/";  
        }
      });
      localStorage.setItem("isLogin",true)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Credentials !",
      });
    }
}
function handelAuth(){
  googleAuth()
}

return (
  <div className='loginmain'>
        <form className="form" action="" onSubmit={submitLog}>
              <h1 className='h1 uppercase underline '>Login</h1>
              <input  id='intr' required className='lohinput' type="text" name='logemail' placeholder='Enter Your Email' onChange={loghandel}/>
              <input  id='intr' required className='lohinput' type="text" name='logpass' placeholder='Enter Your Password'onChange={loghandel}/>
              <input   className='lohinputbtn'  id='subbt'  type="submit" value="Login"/>
              <div onClick={handelAuth} className='googel flex justify-center items-center'><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" width={"35px"}  /> Signup with Google</div>
              <p className='mb-[15px]'>OR</p>
              <Link to={'/signup'} className='kk' >Creat New Account</Link>
        </form>
    </div>
)

}

export default Login