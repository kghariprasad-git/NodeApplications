import express from "express";
import applicationController from "../controller/applicationController";
const router = express.Router();


router.get("/", applicationController.getTableData);
router.post('/add', applicationController.addNewTableData);
router.post('/:id', applicationController.editTableData);
router.post('/delete/:id', applicationController.deleteTableData);

module.exports = router;



