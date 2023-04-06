import express from 'express';
const { Request, Response } = express;
import { Configuration, OpenAIApi } from 'openai'

const getPromptResponse = async (req = Request, res = Response) => {
    try {
        const { prompt } = req.body;

        const configuration = new Configuration({ apiKey: process.env.GPT_KEY });
        const openai = new OpenAIApi(configuration);
        const model = 'gpt-3.5-turbo';
        const messages = [{
            role: 'user',
            content: `[Responde en Español] ${prompt}`
        }];
        const gptResponse = await openai.createChatCompletion({ model, messages });
        console.log('gptResponse', gptResponse.data.choices[0].message);
        res.send({ ok: true, response: gptResponse.data.choices[0].message });
    } catch (error) {
        console.log(error);
        res.send({ ok: false, msg: 'Ocurrio un error' });
    }
}

export const methods = {
    getPromptResponse
};
