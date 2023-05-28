import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="list-items-box">
      <div className="list-item">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo-item" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
