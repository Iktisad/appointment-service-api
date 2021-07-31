import express from 'express';
import {getAll, getResourceById, create, update, remove} from '../controllers/ResourcesController.js';
const router = express.Router();

// all routes start here with /users

// GET: /users
router.get('/', getAll)  ;

// GET: /users/id
router.get('/:id', getResourceById);

// POST: /users/create
router.post('/create', create);

// PATCH: /users/update/id
router.patch('/update/:id', update);

// DELETE: /delete/:id

router.delete('/delete/:id', remove);

export default router;