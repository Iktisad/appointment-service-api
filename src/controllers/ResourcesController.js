import {ResourceModel} from '../models/Resource.js';

// req, res to get all users in the table
export const getAll = async (req, res, next)=>{
    
    try {
        const resource = await ResourceModel.find();
        console.log(resource);
        res.json(resource);


    } catch (error) {
        console.log(resource);
        res.json({message: error});
    }
}
// req, res to get a specific doctor
export const getResourceById = async (req, res, next)=>{
    
    try {
        const resource = await ResourceModel.findById(req.params.id);
        console.log(resource);
        res.json(resource);

    } catch (error) {
        console.log({message: error});
        res.json({message: error});
    }
}

// req, res to create resource
export const create = async (req, res, next)=> { 
    
    try {
        const createResource = await ResourceModel.create(req.body);
        console.log(createResource);
        res.send(createResource);
    } catch (error) {
        console.log({message:error});
        res.send({message:error});
    }
 };

 // req, res to update users
export const update = async (req, res, next)=> { 
    try {
        const updateResource = await ResourceModel.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.json(updateResource);

    } catch (error) {
        res.json({message:error});
    }
   
 };
// req, res to delete a user
export const remove = async (req, res, next)=> { 
    const resourceDelete = await ResourceModel.findByIdAndRemove(req.params.id);
    try {
        res.json(resourceDelete);
    } catch (error) {
        res.json({message:error});
    }
   
 };
