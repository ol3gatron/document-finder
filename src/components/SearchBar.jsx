import { useContext } from "react"
import { DocumentsContext } from "../context/DocumentContext"

const SearchBar = () => {
  const {handleChange} = useContext(DocumentsContext)

  return (
    <form className="search-bar">
      <div className="input">
        <div className="input--fields">
          <label htmlFor="id" className="input--title">ID документа</label>
          <input className="input-fullsize" type="text" name="id" id="id" onChange={handleChange}/>
        </div>
        <p className="input--subtitle">Если заполнено поле <strong>ID документа</strong>, все остальные поля будут проигнориваны</p>
      </div>
      <div className="input">

      <label htmlFor="dateRangeFrom" className="input--title">Создан</label>
        <div className="input-fields">
          <input className="input-halfsize" type="date" name="dateFrom" id="dateRangeFrom" onChange={handleChange}/>
          <input className="input-halfsize" type="date" name="dateTo" id="dateRangeTo" onChange={handleChange}/>
        </div>
      </div>

      <div className="input">
        <div className="input-fileds">
          <label htmlFor="header" className="input--title">Название документа</label>
          <input className="input-fullsize" type="text" name="header" id="header" onChange={handleChange}/>
        </div>
      </div>

      <div className="input">
        <label htmlFor="sort" className="input--title">Сортировка</label>
        <div className="input-fields">
          <select name="sort" id="sort" className="input-halfsize" onChange={handleChange}>
            <option value="date">Создан</option>
          </select>
          <select className="input-halfsize" name="sortBy" id="" onChange={handleChange}>
            <option value="newest">По убыванию</option>
            <option value="oldest">По возрастанию</option>
          </select>
        </div>
      </div>
    </form>
  )
}
export default SearchBar