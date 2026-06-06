

import './App.css'

function App() {
  function handleOnClick(){
    alert("diste click")
  }

  return (
    <>
    
     <button onClick={handleOnClick}>fetch</button>
    </>
  )
}

export default App
