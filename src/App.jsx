import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import {Provider} from "react-redux"
import reduxStore from './utils/reduxStore'
import { cartContext } from './utils/UserContext'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const [cartCount,setCartCount] = useState(0)
  const queryClient = new QueryClient();
  return (
    <cartContext.Provider value={{cartCount,setCartCount}}>
    <QueryClientProvider client={queryClient} >
    <Provider store={reduxStore}>
      <div className="app bg-[#f5f5f5] ">
        <Header />
        <Outlet />   {/* Body or About will load here */}
      </div>
    </Provider>
    </QueryClientProvider>
    </cartContext.Provider>
  )
}

export default App
