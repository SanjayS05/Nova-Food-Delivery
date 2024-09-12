const router = require('express').Router();
const {sendDetails,getDetails} = require("../controllers/rest")

router.post("/sendDetails",sendDetails);
router.get("/getDetails",getDetails);

module.exports = router;