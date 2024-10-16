const { comicModel } = require("../../model/comicSchema");

const editController = async (req, res) => {

    //getting id of comic book that needs to be edited
    const id = req.params._id;

    //checking it exists or not
    const comic = comicModel.findById(id)

    if (!comic) {
        res.status(404).send({ message: "Comic not found" })
    }

    try {
        //update it
        await comicModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send({ message: "Updated Success", newComic: req.body })
    } catch (error) {
        res.status(500).send({ message: "Error in updating" })
    }


}

module.exports = editController