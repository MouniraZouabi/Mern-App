const router = require("express").Router();
const res = require("express/lib/response");
const Cat = require("../../models/Cat");

// // creating the cat 
router.post("/Cat/createCat", async (req, res) => {
  try {
    const {CatName, Location, Condition, State, Reward, Desc, ImgUrl} = req.body;
    const cat = await Cat.create({
        CatName,
        Location,
        Condition, 
        State,
        Reward,
        Desc,
        ImgUrl, 
    });
    res.status(200).json({
    status: true,
    success: true,
    msg: "cat created successfully ",
    data: cat,
    });
  } 
  catch (err) {
    res.status(500).json({ status: false, msg: "something is wrong " });
  }
});

// // getting the cat
router.get("/getCat", async (req, res) => {
  try {
    const cats = await Cat.find({});
    res.status(200).json({
      status: true,
      success: true,
      msg: "Cats List ",
      data: cats,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

// //remove cat 
router.delete("/Cat/deleteCat/:id", async (req, res) => {
  const { id } = req.params;
  let cat = await Cat.findById(id);

  try {
    await Cat.findByIdAndDelete(id);

    let cat = await Cat.findById(id);
    res.status(200).json({
      status: true,
      success: true,
      msg: "cat deleted successfully ",
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

// //update cat
router.put("updateCat/:id", async (req, err) => {
  const { id } = req.params;
  const {CatName, Location, Condition, State, Reward, Desc, ImgUrl} = req.body;
  let cat = await Cat.findById(id);
  try {
    if (cat) {
      await Cat.findByIdAndUpdate(id, { ...req.body }, { new: true });
      let cat = await Cat.findById(id);
      res.status(200).json({
        status: true,
        msg: "Contact updated successfully ",
        data: cat,
      });
    } else {
      res.status(404).json({ status: true, msg: "cat not found" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});
module.exports = router;