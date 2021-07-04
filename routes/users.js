import express from 'express';
import {getAll, getUser, create, update, remove} from '../controllers/UsersController.js';
const router = express.Router();

// all routes start here with /users

// GET: /users
router.get('/', getAll);

// GET: /users/id
router.get('/:id', getUser);

// POST: /users/create
router.post('/create', create);

// PATCH: /users/update/id
router.patch('/update/:id', update);

// DELETE: /delete/:id

router.delete('/delete/:id', remove);

export default router;