const { comicModel } = require("../../model/comicSchema")

const getController=async(req,res)=>{
    
    try {
        let {skip,price,year,alpha,fprice,fcondition,fauthor,fyear,pages}=req.query

        skip=parseInt(skip)
        
        //object for appling sorting on datasets
        const sortOptions={}

        if(price!=undefined)sortOptions.price=1
        if(year!=undefined)sortOptions.year_of_publication=1
        if(alpha!=undefined)sortOptions.book_name=1;


        //object for apply filtering

        //checking whether the price query is number or string
        const regex=/^[a-zA-Z]+$/
        if(regex.test(fprice)){
            res.status(403).send({message:"Enter integer value only"})
            return
        }
        if(regex.test(pages)){
            res.status(403).send({message:"Enter integer value only"})
            return
        }

        //filter option for filtering comic books
        const filterOption={}

        if(fprice)filterOption.price=parseInt(fprice);
        if(fcondition)filterOption.condition=toString(fcondition)
        if(fauthor)filterOption.author_name=fauthor
        if(fyear)filterOption.year_of_publication=fyear;
        if(pages)filterOption.year_of_publication=parseInt(pages);

        
        
        
        let comics=await comicModel.find(filterOption).skip(skip).limit(10).sort(sortOptions)
        res.status(200).send({"message":"Comic data",comics})
        
    } catch (error) {
        res.status(404).send({"message":"Comic data not found"})
    }
}

module.exports=getController