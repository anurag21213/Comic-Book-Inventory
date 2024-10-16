const { comicModel } = require("../../model/comicSchema")


const createController = async (req, res) => {

    try {
        
        //creating new comic book entry
        const newComic = new comicModel(req.body)
        console.log(newComic);

        //saving it into DB
        await newComic.save();

        res.status(201).send({ message: "created success", comic: newComic })

    } catch (error) {
        res.status(500).send({ message: "Errot in creating comic", error })
    }
}


module.exports = createController