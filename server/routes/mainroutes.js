import express from 'express';
const router = express.Router();
import coustomControllers from '../controllers/contoler.js'

const {homepage,addCoustomer,PostCoustomer,viewCoustomer,editCoustomer,editCoustomerInfo,deleteCoustomerInfo}=coustomControllers


router.get('/',homepage)
router.get('/add',addCoustomer)
router.post('/add',PostCoustomer)
router.get('/view/:userId',viewCoustomer)
router.get('/edit/:userId',editCoustomer)
router.put('/edit/:userId',editCoustomerInfo)
router.delete('/edit/:userId',deleteCoustomerInfo)





export default router;