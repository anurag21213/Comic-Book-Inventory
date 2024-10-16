const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')

const main=require('./database/database')


const createRouter=require('./routes/comic_book_management')
const getComicRoute=require('./routes/fetch_comic')

dotenv.config()


const app=express()
app.use(cors())
app.use(express.json())


//connecting DB
main()


//using routes
app.use('/api',createRouter)
app.use('/api',getComicRoute)

app.get('/',(req,res)=>{
    res.send("hello")
})

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server has started on ${port}`);
    
})