import { useContext } from "react"
import { DocumentsContext } from "../context/DocumentContext"
import Document from "./Document"

const Documents = () => {
  const {documents} = useContext(DocumentsContext)

  return (
    <div className="documents">
      {documents.map(document => (
        <Document document={document} key={document.id}/>
      ))}
    </div>
  )
}
export default Documents