import { Router } from "express";
import  * as controller from '../controllers/controller.js'


const router = Router();


// question routes api
// router.get('/questions', controller.getQuestion)
// router.post('/questions', controller.insertQuestions)

router.route('/questions')
    .get(controller.getQuestion)
    .post(controller.insertQuestions)
    .delete(controller.dropQuestions);

router.route('/result')
    .get(controller.getResult)
    .post(controller.storeResult)
    .delete(controller.dropResult);



export default router;