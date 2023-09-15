import sendBtn from '../assets/send.svg'
import gpImgLogo from '../assets/chatgptLogo.svg'
import userIcon from '../assets/user-icon.png'


interface Args {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSend: () => Promise<void>
  handleKey: (e: React.KeyboardEvent<Element>) => Promise<void>
  prompt: string
  chatEnd: React.RefObject<HTMLDivElement>
  messages: {
    text: string,
    isBot: boolean
  }[]
}

export const Main = (args: Args) => {

  const { handleChange,handleSend,handleKey,prompt,chatEnd,messages } = args

  return (
    <main className='main'>
        <div className='chats'>
          {
            messages.map( (chat,index) => (
              <div key={index} className={`chat ${chat.isBot && "bot"}`}>
                <img className='chatImg' src={chat.isBot ? gpImgLogo : userIcon} alt={chat.isBot ? 'Bot' : 'User'} />
                <p className="txt">
                  {chat.text}
                </p>
              </div>
            ))
          }
          <div ref={chatEnd}/>
        </div>
        <div className="chatFooter">
            <div className='inp'>
              <input type="text" onChange={handleChange} onKeyDown={handleKey} name='prompt' value={prompt} placeholder='Envia un mensaje'  />
              <button onClick={handleSend} className='send'>
                <img className='sendBtn' src={sendBtn} alt="Send" />
              </button>
            </div>
            <p>ChatGpt may produce inaccurate information about people, places, or facts. ChatGpt August 20 Version. </p>
        </div>
    </main>
  )
}
