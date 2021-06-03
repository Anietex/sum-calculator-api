import BaseController from "./BaseController";

export default class CalculatorController extends BaseController{

    /**
     * Handles request for adding 2 numbers
     * @param req
     * @param res
     */
    static add = (req, res) =>{
        const input = req.query;
        const errors = {}

        let inputsValid = true;

       // validate input
        if(!(input.number1 && !isNaN(input.number1))){
            errors.number1= 'Number 1 requires a valid numeric value';
            inputsValid = false;
        }
        if(!(input.number2 && !isNaN(input.number2))){
            errors.number1= 'Number 1 requires a valid numeric value';
            inputsValid = false;
        }

        // Return error if not valid
        if(!inputsValid){
          return res.status(422).json(this.error('Invalid input', errors))
        }

        let sum = parseFloat(input.number1) + parseFloat(input.number2);
       return  res.json(this.success({sum}))
    }



}

