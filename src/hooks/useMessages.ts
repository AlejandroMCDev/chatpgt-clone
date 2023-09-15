import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { sendMessage } from '../api/api'
import OpenAI from 'openai';


export const useMessages = () => {
    const ref = useRef<HTMLDivElement>(null)

    const messagesInitialState = [{
      text: 'Hola, soy ChatGPT, y esta pagina es un clon, prueba a decirme algo',
      isBot: true
    }]

    const [prompt, setPrompt] = useState<string>('')
    const [messages, setMessages] = useState(messagesInitialState)

    const handleSend = async() => { 

        try {
            const text = prompt
            setPrompt('')
            setMessages([
              ...messages,
              {text, isBot: false}
            ])
            const res = await sendMessage(text)
            setMessages([...messages,{text, isBot: false},{text: res, isBot: true}])

        } catch (error) {
            if (error instanceof OpenAI.APIError) {
              console.error(error.status);  // e.g. 401
              console.error(error.message); // e.g. The authentication token you passed was invalid...
              console.error(error.code);  // e.g. 'invalid_api_key'
              console.error(error.type);  // e.g. 'invalid_request_error'
            } else {
              // Non-API error
              console.log(error);
          
        } 
      }
    }

    const handleChange = ( e:ChangeEvent<HTMLInputElement> ) => {
        const { value } = e.target
        setPrompt(value)
    }

    const handleKey = async(e:React.KeyboardEvent) => {
        (e.key === 'Enter') && await handleSend()
    }

    const handleQuery = async(e:React.MouseEvent<HTMLButtonElement>) => {
      
      const text = e.currentTarget.value
      setMessages([
        ...messages,
        {text, isBot: false}
      ])
      const res = await sendMessage(text)
      setMessages([...messages,{text, isBot: false},{text: res, isBot: true}])
    }

    useEffect(() => {
      if (messages.length) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block:'end'
        })
      }
    }, [messages.length]);

    return {
        ref,
        prompt,
        messages,
        handleChange,
        handleSend,
        handleKey,
        setMessages,
        setPrompt,
        handleQuery,
        messagesInitialState
    }
}
