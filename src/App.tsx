import './App.css'

import {MyRoutes} from "./routers/routes"

function App() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <header>
          <h1 className='title'>🎥Películas</h1>
        </header>
        <MyRoutes></MyRoutes>
      </div>
      
    </>
  )
}

export default App
