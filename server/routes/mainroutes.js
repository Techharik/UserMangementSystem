import express from 'express';
const router = express.Router();
import coustomControllers from '../controllers/contoler.js'

const {homepage,addCoustomer,PostCoustomer}=coustomControllers


router.get('/',homepage)
router.get('/add',addCoustomer)
router.post('/add',PostCoustomer)



export default router;