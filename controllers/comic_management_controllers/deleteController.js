const { comicModel } = require("../../model/comicSchema");

const deleteController = async (req, res) => {
    //ggetting id of comic book that are need to be deleted
    const id = req.params._id;

    //checking whether the book exists or not
    const comic = await comicModel.findById(id)

    if (!comic) {
        res.status(404).send({ message: "Not found" })
    }

    try {
        //deleting the book
        await comicModel.findByIdAndDelete(id)
        res.status(200).send({ message: "successfully deleted comic book" })
    } catch (error) {
        res.status(404).send({ message: "Error in deleting comic book", error })
    }
}

module.exports = deleteController