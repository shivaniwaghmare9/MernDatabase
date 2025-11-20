
// import img1 from "../images/img1.jpeg"
// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import BackendUrl from "../Utils/BackendURL";

// const Home=()=>{
//   const navigate=useNavigate();

//   let api=`${BackendUrl}/user/userauth`;
//   const userAutehticate=async()=>{
//     const token=localStorage.getItem("token");
//     if(token)
//     {
//       const response=await axios.post(api,null,{headers:{"x-auth-tokan":token}});
//       console.log(response);

//       localStorage.setItem("username",response.data.name);
//       localStorage.setItem("useremail",response.data.email);
//     }
//   }
//   useEffect(()=>{
//     userAutehticate();
//   })

//     return(
//         <>
//     <h3 className='h33'>Our page!!</h3>
//           <div class="container">
    
//     <div className="text">
//       <h1>Welcome to Our Website</h1>
//       <p>
//         We provide creative digital solutions to grow your business online.
//         Let’s build something amazing together. Check out our services and portfolio to learn more.
//       </p>
//       <button>Get Started</button>
      
//     </div>

    
//     <div class="image">
//       <img src={img1} alt="Home page illustration"/>
//     </div>
//   </div>



  
//     </>
//     )
// }
// export default Home

import img1 from "../images/img1.jpeg"
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackendUrl from "../Utils/BackendURL";

const Home=()=>{
  const navigate=useNavigate();

  let api=`${BackendUrl}/user/userauth`;
  const userAutehticate=async()=>{
    const token=localStorage.getItem("token");
    if(token)
    {
      const response=await axios.post(api,null,{headers:{"x-auth-tokan":token}});
      console.log(response);

      localStorage.setItem("username",response.data.name);
      localStorage.setItem("useremail",response.data.email);
    }
  }
  useEffect(()=>{
    userAutehticate();
  })

    return(
        <>
    <h3 className='h33'>Our page!!</h3>
          <div class="container">
    
    <div className="text">
      <h1>Welcome to Our Website</h1>
      <p>
        We provide creative digital solutions to grow your business online.
        Let’s build something amazing together. Check out our services and portfolio to learn more.
      </p>
      <button>Get Started</button>
      
    </div>

    
    <div class="image">
      <img src={img1} alt="Home page illustration"/>
    </div>
  </div>



  
    </>
    )
}
export default Home