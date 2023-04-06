import { Router } from 'express'
import { check } from 'express-validator'
import validarCampos from '../middlewares/validadorCampos.js';
import { methods as gptController } from '../controllers/gpt.controller.js'

const router = Router();

router.post('/', [
    check('prompt', 'Se requiere un prompt para conseguir una respuesta de ChatGPT').not().isEmpty(),
    validarCampos
],
    gptController.getPromptResponse);

export default router;