import express from 'express';
const router = express.Router();
import coustomControllers from '../controllers/contoler.js'

const {homepage,addCoustomer,PostCoustomer,viewCoustomer}=coustomControllers


router.get('/',homepage)
router.get('/add',addCoustomer)
router.post('/add',PostCoustomer)
router.get('/view/:userId',viewCoustomer)




export default router;