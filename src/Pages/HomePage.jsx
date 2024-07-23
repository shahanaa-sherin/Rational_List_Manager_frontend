import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Tabs from '../Components/Tabs/Tabs'

function HomePage() {
  return (
    <>
        <Header />
        <Tabs />
        <div className="bg-[#646669] px-2 py-5 h-screen"><Outlet/></div>
    </>
  )
}

export default HomePage