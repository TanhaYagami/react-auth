
import Chart from '../../../components/chart/Chart'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../../components/widgetLg/WidgetLg'
import WidgetSm from '../../../components/widgetSm/WidgetSm'

import {data} from '../../../components/dummyData'

import "./dashHome.css"

export default function DashHome() {
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
