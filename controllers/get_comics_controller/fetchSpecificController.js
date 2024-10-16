const { comicModel } = require("../../model/comicSchema")


const fetchSpecificController=async(req,res)=>{
    const data= await comicModel.find({_id:req.params._id})

    if(!data){
        res.status(404).send({message:"Comic book not found"})
    }

    res.status(200).send({message:"Comic book found successfully",comic:data});
}

module.exports=fetchSpecificController