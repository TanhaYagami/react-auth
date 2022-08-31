import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import Chart from "../../chart/Chart"
import WidgetLg from "../../widgetLg/WidgetLg"
import WidgetSm from "../../widgetSm/WidgetSm"
import {data} from '../../../dummyData'

import "./home.css"

export default function Home() {
  return (
    <div className="homeContainer">
        <FeaturedInfo />
        <Chart data={data} dataKey="Active User" title="User Analayitcs" />

        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
