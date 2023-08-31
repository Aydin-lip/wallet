import { createContext, useContext, useEffect, useState } from 'react';
import Loading from '@/components/loading';

interface IContext {
  loading: boolean
  setLoading: (value: boolean) => void
}
let contextDefaultValue: IContext = {
  loading: true,
  setLoading: () => { },
}
const AppContext = createContext<IContext>(contextDefaultValue);


const Context = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(true)

  const changeLoadHandler = (value: boolean) => {
    setLoading(value)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  let value = {
    loading,
    setLoading: changeLoadHandler
  }

  return (
    <AppContext.Provider value={value}>
      {loading && <Loading />}
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Context