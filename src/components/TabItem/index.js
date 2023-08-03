// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTabIdUpdate, isActive} = props
  const {displayText, tabId} = tabDetails

  const onUpdateActiveTabId = () => {
    onActiveTabIdUpdate(tabId)
  }

  const ActiveButton = isActive ? 'active' : ''

  return (
    <li className="each-tab">
      <button
        type="button"
        className={`tab-button ${ActiveButton}`}
        onClick={onUpdateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
