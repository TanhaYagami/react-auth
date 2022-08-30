import photo from './imgs/photo2.avif'
import {FaEye} from 'react-icons/fa'
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
           <span className="widgetSmTitle">User</span>


        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={photo} alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Carol Nano</span>
                    <span className="widgetSmUserPost">Graphic Designer</span>
                </div>
                    <button className='widgetSmBtn'>
                        <FaEye className='widgetSmIcon' /> Display
                    </button>
                </li>
        </ul>
        
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={photo} alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Carol Nano</span>
                    <span className="widgetSmUserPost">Graphic Designer</span>
                </div>
                    <button className='widgetSmBtn'>
                        <FaEye className='widgetSmIcon' /> Display
                    </button>
                </li>
        </ul>
        
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={photo} alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Carol Nano</span>
                    <span className="widgetSmUserPost">Graphic Designer</span>
                </div>
                    <button className='widgetSmBtn'>
                        <FaEye className='widgetSmIcon' /> Display
                    </button>
                </li>
        </ul>
        
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={photo} alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Carol Nano</span>
                    <span className="widgetSmUserPost">Graphic Designer</span>
                </div>
                    <button className='widgetSmBtn'>
                        <FaEye className='widgetSmIcon' /> Display
                    </button>
                </li>
        </ul>
        
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={photo} alt="" className="widgetSmImage" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Carol Nano</span>
                    <span className="widgetSmUserPost">Graphic Designer</span>
                </div>
                    <button className='widgetSmBtn'>
                        <FaEye className='widgetSmIcon' /> Display
                    </button>
                </li>
        </ul>
    </div>
  )
}
