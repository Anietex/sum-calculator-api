import express from 'express';
import CalculatorController from "../controllers/CalculatorController";
const router = express.Router();

/* GET add page */
router.get('/add', CalculatorController.add);


module.exports = router;
