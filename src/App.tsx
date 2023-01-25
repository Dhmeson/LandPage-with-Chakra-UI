import { Flex} from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <Flex bgColor={"white"} h={"100vh"} w="100vw" p={10} direction="column">
        <Header/>
        <Main/>
    </Flex>
  )
}

export default App
