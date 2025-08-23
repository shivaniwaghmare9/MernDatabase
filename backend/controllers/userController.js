
const userModel=require("../models/userModel")


const userRegister=async(req,res)=>{
    const {name,email,password}=req.body
    const user=await userModel.create({
        name:name,
        email:email,
        password:password,
       
    })
    console.log(user);
      res.status(200).send({msg:"user successfully registered!"});
}
const userLogin=async(req, res)=>{
    const { email, password} = req.body; 
   
        const User= await userModel.findOne({email:email});
         
        if (!User)
        {
            res.status(400).send({msg:"Invalid Email"});
        }

        if (User.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!"})
        }
    
    res.status(200).send({token:token});
    
    
}



module.exports={
  userRegister,
  userLogin
    
}