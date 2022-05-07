
import Navbar from "../Components/navbar/Navbar"
import "./home.scss"
import star from "./star.jpeg"

const home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img 
        width="100% "
        src={star} 
        alt="" />
    </div>
  )
}

export default home
