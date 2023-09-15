
import OpenAI from 'openai';
const apiKey = import.meta.env.VITE_API_KEY
const openai = new OpenAI({apiKey, dangerouslyAllowBrowser: true});



export const sendMessage = async( message:string ) => {
    const res = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
    })

    return res.choices[0].text
}