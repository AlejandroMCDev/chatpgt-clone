import chatgptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'


interface Args {
  handleQuery: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  setMessages: React.Dispatch<React.SetStateAction<{
    text: string;
    isBot: boolean;
  }[]>>
  setPrompt: React.Dispatch<React.SetStateAction<string>>
  messagesInitialState: {
    text: string;
    isBot: boolean;
  }[]
}

export const SidebarTop = (args: Args) => {

  const { messagesInitialState, setMessages, setPrompt,handleQuery} = args

  const handleNewChat = () => {
    setMessages(messagesInitialState)
    setPrompt('')
  }

  return (
    <article className="upperSide">
        <div className="upperSideTop">
          <img src={chatgptLogo} alt="Logo" className='logo'/>
          <span className='brand'>ChatGPT</span>
        </div>
        <button onClick={handleNewChat} className='midBtn'>
          <img src={addBtn} alt="New chat" className="addBtn" />
          New Chat
        </button>
        <div className='upperSideBottom'>
          <button onClick={(e) =>handleQuery(e)} value='¿Que es programar?' className="query">
            <img src={msgIcon} alt="Query" />
            ¿Que es programar?
          </button>
          <button onClick={handleQuery} className="query" value='¿Como utlizar una API?'>
            <img src={msgIcon} alt="Query" />
            ¿Como utlizar una API?
          </button>
        </div>
    </article>
  )
}
