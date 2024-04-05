import UserModel from "../models/user.js"



export const signup = async (req, res) => {
    const data= await UserModel.create(req.body)
    await data.save()
    res.status(201).json({message:"User has been created!",result: data})
}


export const login= async (req, res) => {
    const {email,password}=req.body
    if(!email || !password){
        return res.status(501).json({message: "please provide email and password"}) 
    }
    const user = await UserModel.findOne({email:email})
    if(!user){
        return res.status(401).json({message: "No account is found this email"})
    }   
    if(user.password!==password){
        return res.status(301).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"login successfully",result: user})
}