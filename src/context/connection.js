import Cookies from "js-cookie"
import { createContext, useContext, useEffect, useState } from "react"

const ConnectionContext = createContext({})

export const ConnectionContextProvider = ({ children }) => {
  const [connected, setConnected] = useState()

  useEffect(() => () => {
    const connect = Cookies.get("token")
    setConnected(connect)
  })

  return (
    <ConnectionContext.Provider value={{ connected, setConnected }}>
      {children}
    </ConnectionContext.Provider>
  )
}

export const useConnectionContext = () => useContext(ConnectionContext)