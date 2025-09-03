
// import { useNavigate} from "react";
// import { useEffect } from "react";
// const Dashboard=()=>{
//     const navigate=useNavigate();
//     const logout=()=>{
//         localStorage.clear();
//         navigate("/login")
//     }
//     useEffect(()=>{
//         if(!localStorage.getItem("usename"))
//         {
//             navigate("/login")
//         }
//     })
//     return(
//         <>
//          <h3>Welcome to user</h3>
//          <div>
//             Welcome :{localStorage.getItem("username")} Email:{localStorage.getItem("useremail")}
//             <a href="#" onClick={logout}>Logout</a>
//          </div>
//         </>
//     )
        
// }
// export default Dashboard;


import { useNavigate} from "react";
import { useEffect } from "react";
const Dashboard=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/login")
    }
    useEffect(()=>{
        if(!localStorage.getItem("usename"))
        {
            navigate("/login")
        }
    })
    return(
        <>
         <h3>Welcome to user</h3>
         <div>
            Welcome :{localStorage.getItem("username")} Email:{localStorage.getItem("useremail")}
            <a href="#" onClick={logout}>Logout</a>
         </div>
        </>
    )
        
}
export default Dashboard;

