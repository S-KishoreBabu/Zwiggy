import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {Provider} from "react-redux"
import appStore from './utils/appStore'

function App() {
  return (
    <Provider store={appStore}>
      <div className="app bg-[#f5f5f5] ">
        <Header />
        <Outlet />   {/* Body or About will load here */}
      </div>
    </Provider>

  )
}

export default App
