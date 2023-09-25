import { useState } from 'react'
import AppContainer from './components/AppContainer'
import Botao from './components/Botao'
import MainFrame from './components/MainFrame'

function App(){
  const [page,setPage] = useState(0);

  return(
    <AppContainer>
        <Botao position='left' page={page} onPress={()=>{setPage(page-1)}}/>

        <MainFrame page={page}/>
        
        <Botao position='right' page={page} onPress={()=>{setPage(page+1)}}/>
    </AppContainer>
  )
}

export default App
