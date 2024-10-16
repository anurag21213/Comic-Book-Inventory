const mongoose=require('mongoose')

const comicSchema=new mongoose.Schema({
    book_name:String,
    author_name:String,
    year_of_publication:String,
    price:Number,
    discount:Boolean,
    number_of_pages:Number,
    condition:String,
    description:String
})


const comicModel=mongoose.model('comic',comicSchema)

module.exports={comicModel}