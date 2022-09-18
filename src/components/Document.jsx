import { useState } from "react"

const Document = ({document}) => {
  const [isHiden, setIsHiden] = useState(true)

  const handleClick = () => {
    setIsHiden(prevState => !prevState)
  }

  return (
    <div className="document-item">
      <div className="document-header" onClick={handleClick}>{document.header}</div>
      {!isHiden &&
        <div className="document-body">
        <p className="document-id">ID: {document.id}</p>
        <p className="document-date">Создан: {document.date}</p>
      </div>
      }
    </div>
  )
}
export default Document