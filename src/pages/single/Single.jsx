import "./single.scss"
import {Sidebar} from "../../components/sidebar/Sidebar"
import {Navbar} from "../../components/navbar/Navbar"

export const Single = () => {
    return (
        <div className="single">
          <Sidebar/>
          <div className="singleContainer">
            <Navbar/>
            <div className="top">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
    )
}
