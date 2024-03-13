const express = require("express")
const router = express.Router()


router.get("/jobs",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"This route will display fddfff ssall jobs in future"
    })
})

module.exports = router