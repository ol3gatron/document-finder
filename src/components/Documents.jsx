import { useContext } from "react"
import { DocumentsContext } from "../context/DocumentContext"
import Document from "./Document"

const Documents = () => {
  const {documents, searchParams} = useContext(DocumentsContext)

  const documentsSorted = documents.sort((a, b) => {
    if (searchParams.sort === "date" && searchParams.sortBy === "newest") {
      return new Date(b.date) - new Date(a.date)
    } else if (searchParams.sort === "date" && searchParams.sortBy === "oldest") {
      return new Date(a.date) - new Date(b.date)
    }
  })

  return (
    <div className="documents">
      {documents.map(document => (
        <Document document={document} key={document.id}/>
      ))}
    </div>
  )
}
export default Documents