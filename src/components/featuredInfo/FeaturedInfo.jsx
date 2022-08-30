import { FaArrowDown,FaArrowUp } from "react-icons/fa"
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>

        <div className="featuredItem">
            <span className="featuredTitle">Revenu</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
                -11.4
                <FaArrowDown className="featuredIcon nagative" />
                </span>
            </div>
            <span className="featuredSubTitle">Campared to Previous month</span>
        </div>
        
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,560</span>
            <span className="featuredMoneyRate">
                -12.1
                <FaArrowDown className="featuredIcon nagative" />
                </span>
            </div>
            <span className="featuredSubTitle">Campared to Previous month</span>
        </div>

        
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">$1,413</span>
            <span className="featuredMoneyRate">
                +2.4
                <FaArrowUp className="featuredIcon"  />
                </span>
            </div>
            <span className="featuredSubTitle">Campared to Previous month</span>
        </div>

    </div>
  )
}
