import User from '../models/User.js';

// req, res to get all users in the table
export const getAll = async (req, res, next)=>{
    
    try {
        const user = await User.find();
        res.json(user);

        console.log(user);

    } catch (error) {
        res.json({message: error});
    }
}
export const getUser = async (req, res, next)=>{
    
    try {
        const user = await User.findById(req.params.id);
        res.json(user);

        console.log(user);

    } catch (error) {
        res.json({message: error});
    }
}

// req, res to create users
export const create = async (req, res, next)=> { 
    const user = new User({
        firstName: req.body.firstName,
        lastName : req.body.lastName
    })
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({message:error});
    }
   
 };

 // req, res to update users
export const update = async (req, res, next)=> { 
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(updateUser);

    } catch (error) {
        res.json({message:error});
    }
   
 };
// req, res to delete a user
export const remove = async (req, res, next)=> { 
    const userDelete = await User.findByIdAndRemove(req.params.id);
    try {
        res.json(userDelete);
    } catch (error) {
        res.json({message:error});
    }
   
 };
