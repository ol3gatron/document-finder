import { useContext } from "react"
import { DocumentsContext } from "../context/DocumentContext"
import Document from "./Document"
import Pagination from "./Pagination"

const Documents = () => {
  const {documents, currentDocs, searchParams, docsPerPage, setCurrentPage} = useContext(DocumentsContext)

  const documentsSorted = currentDocs.sort((a, b) => {
    if (searchParams.sort === "date" && searchParams.sortBy === "newest") {
      return new Date(b.date) - new Date(a.date)
    } else if (searchParams.sort === "date" && searchParams.sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date)
    }
  })

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="documents">
      <Pagination docsPerPage={docsPerPage} totalDocs={documents.length} paginate={paginate}/>
      {currentDocs.map(document => (
        <Document document={document} key={document.id}/>
      ))}
    </div>
  )
}
export default Documents