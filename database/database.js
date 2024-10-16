const mongoose=require('mongoose')



async function connectDB(){
    try {
        const connString=process.env.MONGOURI
        
        
        const res=await mongoose.connect(connString)

        if(res){
            console.log("connected...");
        }
    } catch (error) {
        console.log("error");
        
    }
}

const main=()=>{
    connectDB()
}


module.exports=main