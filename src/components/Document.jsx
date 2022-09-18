const Document = ({document}) => {
  return (
    <div className="document-item">
      <div className="document-header">{document.header}</div>
      <div className="document-body">
        <p className="document-id">ID: {document.id}</p>
        <p className="document-date">Создан: {document.date}</p>
      </div>
    </div>
  )
}
export default Document