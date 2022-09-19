import { useEffect, useState, createContext} from "react"

const DocumentsContext = createContext()

function DocumentsContextProvider({children}) {
  const [documents, setDocuments] = useState([])
  const [searchParams, setSearchParams] = useState({
    id: "",
    dateFrom: "",
    dateTo: "",
    header: "",
    sort: "date",
    sortBy: "newest"
  })

  const searchQuery = () => {
    if (searchParams.id) {
      return `?id=${searchParams.id}`
    } else if (searchParams.header) {
      return `?header=${searchParams.header}`
    } else if (searchParams.dateFrom && searchParams.dateTo) {
      return `?date_gte=${Date.parse(searchParams.dateFrom)}&date_lte=${Date.parse(searchParams.dateTo)}`
    } else if ((searchParams.dateFrom && searchParams.dateTo) && (searchParams.header)) {
      return `?date_gte=${Date.parse(searchParams.dateFrom)}&date_lte=${searchParams.dateTo}&header=${searchParams.header}`
    } else {
      return ""
    }
  }

  useEffect(() => {
    const getDate = async () => {
      const res = await fetch(`http://localhost:5000/documents${searchQuery()}`);
      const data = await res.json()
      setDocuments(data)
    }
    getDate()
  }, [searchParams])

  const handleChange = (e) => {
    setSearchParams(prevSearchParams => {
        return {
            ...prevSearchParams,
            [e.target.name]: e.target.value
        }
    })
  }

  return (
    <DocumentsContext.Provider value={{documents, searchParams, handleChange}}>
      {children}
    </DocumentsContext.Provider>
  )
}

export { DocumentsContextProvider, DocumentsContext }