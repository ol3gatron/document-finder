import { useState } from "react"

const Document = ({document}) => {
  const [isHiden, setIsHiden] = useState(true)

  const handleClick = () => {
    setIsHiden(prevState => !prevState)
  }

  const date = document.timeStamp.split("-")

  return (
    <div className="document-item">
      <div className="document-header" onClick={handleClick}>{document.header}</div>
      {!isHiden &&
        <div className="document-body">
        <p className="document-id">ID: {document.id}</p>
        <p className="document-date">Создан: {`${date[2]}.${date[1]}.${date[0]}`}</p>
      </div>
      }
    </div>
  )
}
export default Document