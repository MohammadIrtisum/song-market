import { clerkClient } from "@clerk/express";

const protcectRoute = (req,res,next) => {
    if(!req.auth.userId){
        res.state(401).json({
            message: "unauthorized you must be logged in"
        })

        return;
    }
    next();
}

export const requieAdmin = async (req,res,next) =>{
    
}