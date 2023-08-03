// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="each-app">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-title">{appName}</p>
    </li>
  )
}

export default AppItem
