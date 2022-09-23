const {getApplication, createApplication} = require("../controllers/applicationController")

const express = require("express")
const router = express.Router()

router.route("/getapplication").get(getApplication)
router.route("/createapplication").post(createApplication)


module.exports = router;