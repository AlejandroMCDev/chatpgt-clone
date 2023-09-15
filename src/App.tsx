import { Main } from './components/Main'
import { Sidebar } from './components/Sidebar'
import { useMessages } from './hooks/useMessages'



function App() {

  const { handleChange,handleSend,handleKey,prompt,ref,messages,setMessages,setPrompt,messagesInitialState,handleQuery } = useMessages()

  return (
    <div className='App'>
      <Sidebar setMessages = {setMessages} setPrompt = {setPrompt} messagesInitialState = {messagesInitialState} handleQuery = {handleQuery}/>
      <Main handleChange = {handleChange} handleSend={handleSend} handleKey={handleKey} prompt={prompt} chatEnd={ref} messages={messages}  />
    </div>
  )
}

export default App
