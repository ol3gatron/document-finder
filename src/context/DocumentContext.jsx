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

  const [searchParams, setSearchParams] = useState({
    id: "",
    dateFrom: "",
    dateTo: "",
    header: "",
    sort: "date",
    sortBy: "newest"
  })

  const handleChange = (e) => {
    setSearchParams(prevSearchParams => {
        return {
            ...prevSearchParams,
            [e.target.name]: e.target.value
        }
    })
  }

  console.log(searchParams)

  return (
    <DocumentsContext.Provider value={{documents, searchParams, handleChange}}>
      {children}
    </DocumentsContext.Provider>
  )
}

export { DocumentsContextProvider, DocumentsContext }