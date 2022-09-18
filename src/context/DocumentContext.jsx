import { useEffect, useState, createContext} from "react"

const DocumentsContext = createContext()

function DocumentsContextProvider({children}) {
  const [documents, setDocuments] = useState([])


  useEffect(() => {
    const getDate = async () => {
      const res = await fetch('http://localhost:5000/documents');
      const data = await res.json()
      setDocuments(data)
    }
    getDate()
  }, [])

  return (
    <DocumentsContext.Provider value={{documents}}>
      {children}
    </DocumentsContext.Provider>
  )
}

export { DocumentsContextProvider, DocumentsContext }