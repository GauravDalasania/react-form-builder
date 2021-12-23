const express = require("express");
const formController = require("../controller/form.controller");

const router = express.Router();

router.route("/saveForm").post(formController.saveForm);
router.route("/getForms").get(formController.getForms);
router.route("/getFormById/").get(formController.getFormById);
router.route("/saveResponse/").post(formController.saveResponse);
router.route("/getTotalResponseCount/").get(formController.getTotalResponseCount);

module.exports = router;
