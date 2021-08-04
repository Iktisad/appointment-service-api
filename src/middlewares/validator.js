// ...rest of the initial code omitted for simplicity.
import pkg from 'express-validator';
const { check, validationResult,body } = pkg;

// start and end date validator
export const dateCheck = [

    body('startDate','Date is required').notEmpty().isDate().withMessage('Enter a valid date'),

    body('endDate','Date is required').notEmpty().isDate().withMessage('Enter a valid date'),
];


export const paValidationSchema= [

    check('duuid').notEmpty(),
    check('doctorName','Please choose your doctor').notEmpty(),
    
    check('startDate','Appointment date is required').notEmpty(),                                 
    
    check('userContact', 'Phone number is requred').notEmpty(),                                 
    check('userContact','Enter a valid phone number').isMobilePhone(),                                 
    
    check('description').optional().isString().isLength({max:255}),                                 
    
    check('appointmentType').notEmpty()

];
   
export const validate = (req, res, next) => {   
    
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() });
        // next(new Error("Bad Request, 400"))
    }

    next()
};
  
