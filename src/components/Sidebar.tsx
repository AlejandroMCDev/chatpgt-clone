import { SidebarBottom } from './SidebarBottom'
import { SidebarTop } from './SidebarTop'

interface Args {
  handleQuery: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  setMessages: React.Dispatch<React.SetStateAction<{
    text: string;
    isBot: boolean;
  }[]>>,
  setPrompt: React.Dispatch<React.SetStateAction<string>>,
  messagesInitialState: {
    text: string;
    isBot: boolean;
  }[]
}


export const Sidebar = (args:Args) => {

  const { messagesInitialState,setPrompt,setMessages,handleQuery } = args

  return (
    <aside className='sidebar'>
        <SidebarTop setMessages = {setMessages} setPrompt = {setPrompt} messagesInitialState = {messagesInitialState} handleQuery={handleQuery}/>
        <SidebarBottom/>
      </aside>
  )
}
