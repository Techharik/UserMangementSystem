import express from 'express';
const router = express.Router();
import coustomControllers from '../controllers/contoler.js'

const {homepage,add}=coustomControllers

router.get('/',homepage)
router.get('/add',add)


export default router;