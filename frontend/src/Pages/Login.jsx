
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackendUrl from '../Utils/BackendURL';
// import axios from "axios";
// import {ToastContainer,toast} from "react-toastify"
// import { useNavigate } from 'react-router-dom';


// const Login=()=>{
//     const [input,setInput]=useState({});
//     const navigate=useNavigate();
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(Values=>({...Values,[name]:value}))
//         console.log(input)
//     }
//     const handleSubmit=async(e)=>{
//         e.preventDefault();
//         let api=`${BackendUrl}user/login`;
//         try {
//           const response=await axios.post(api,input);
//         if(response.status===202)
//         {
//           localStorage.setItem("username",response.data.User.email);
//           localStorage.setItem("useremail",response.data.User.name);
//           toast.success("you are loggend in")
//           navigate("/dashboard")
//         }
//         console.log(response.data.User.email);
//         } catch (error) {
//           console.error("Login error:", error);
//             const errorMsg = error.response?.data?.message || "Invalid login credentials.";
//            toast.error(errorMsg);
//         }
        
//     }
//     return(
//         <>

//         <h3 className='h33'>Login page!!!</h3>
//           <Form id="form">
      

//       <Form.Group className="mb-3" >
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email"  name="email" onChange={handleInput}/>
//      </Form.Group>

//       <Form.Group className="mb-3" >
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password"  name="password" onChange={handleInput}/>
//      </Form.Group>

     
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Login
//       </Button>
//     </Form>
//     <ToastContainer/>
//         </>
//     )
// }
// export default Login;


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackendUrl from '../Utils/BackendURL';
import axios from "axios";
import {ToastContainer,toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [input,setInput]=useState({});
    const navigate=useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(Values=>({...Values,[name]:value}))
        console.log(input)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api=`${BackendUrl}user/login`;
        try {
          const response=await axios.post(api,input);
        if(response.status===202)
        {
          localStorage.setItem("username",response.data.User.email);
          localStorage.setItem("useremail",response.data.User.name);
          toast.success("you are loggend in")
          navigate("/dashboard")
        }
        console.log(response.data.User.email);
        } catch (error) {
          console.error("Login error:", error);
            const errorMsg = error.response?.data?.message || "Invalid login credentials.";
           toast.error(errorMsg);
        }
        
    }
    return(
        <>

        <h3 className='h33'>Login page!!!</h3>
          <Form id="form">
      

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" onChange={handleInput}/>
     </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name="password" onChange={handleInput}/>
     </Form.Group>

     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Login
      </Button>
    </Form>
    <ToastContainer/>
        </>
    )
}
export default Login;