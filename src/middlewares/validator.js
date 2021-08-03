// ...rest of the initial code omitted for simplicity.
import { body, validationResult } from 'express-validator';

/**
 * this middle does not take into consideration of validating 
 * auto injected properties or properties that comes from dropdowns.
 * 
 * ONLY VALIDATES DATA Written OR Inputted BY USER.
 */ 
export const appointmentBodyValidation = (req, res, next)=>{
    
    body('patientName').isAlpha();
    body('startDate').isLength({ min: 5 });
    body('status').isLength({ min: 5 });
    body('userContact').isLength({ min: 5 });
    body('description').isLength({ min: 5 });
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
};
  
