import "./navbar.scss"
import logo from "./Logo.png"
import Dp from "./ca.jpg"
import { ArrowDropDown, NotificationImportantOutlined, Search, SettingsApplicationsTwoTone } from "@material-ui/icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">

          <div className="left">
              <img src={logo} alt="logo" />
              <span>HomePage</span>
              <span>New</span>
              <span>Series</span>
              <span>Playlist</span>
          </div>
          
          <div className="right">
              <Search className="icon"/>
              <span>Search</span>
              <NotificationImportantOutlined className="icon"/>
              <img src={Dp} alt="" />

            <div className="profile">
              <ArrowDropDown className="icon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
              </div>
              
              
              
          </div>
      </div>
    
    </div>
  )
}

export default Navbar
