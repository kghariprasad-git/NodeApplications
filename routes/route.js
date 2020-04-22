import express from "express";
import applicationController from "../controller/applicationController";
const router = express.Router();


router.get("/config", applicationController.getTableData);
router.put('/config', applicationController.addNewTableData);
router.post('/:id', applicationController.editTableData);
router.delete('/config', applicationController.deleteTableData);

module.exports = router;



