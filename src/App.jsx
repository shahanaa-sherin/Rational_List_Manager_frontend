import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CommonRouter from './Routes/CommonRouter'


function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/*" element= {<CommonRouter />} ></Route>
        {/* <Route path="/user*" element= {<UserRouter />} ></Route> */}
        {/* <Route path="/admin*" element= {<AdminRouter />} ></Route> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
