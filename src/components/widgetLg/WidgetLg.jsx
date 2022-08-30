import photo1 from "./widgetLgImgs/lgPhoto1.jpg"
import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({type})=>{
        return <button className={"widgetLgButton " + type }>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={photo1} alt="" className="widgetLgPhoto" />
                    <span className="widgetLgUserName">Carol Susan</span>
                </td>
                <td className="widgetLgDate">1 jun 2021</td>
                <td className="widgetLgAmount">$122,00</td>
                <td className="widgetStatus">
                    <Button type="Approved" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={photo1} alt="" className="widgetLgPhoto" />
                    <span className="widgetLgUserName">Carol Susan</span>
                </td>
                <td className="widgetLgDate">1 jun 2021</td>
                <td className="widgetLgAmount">$122,00</td>
                <td className="widgetStatus">
                    <Button type="Declined" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={photo1} alt="" className="widgetLgPhoto" />
                    <span className="widgetLgUserName">Carol Susan</span>
                </td>
                <td className="widgetLgDate">1 jun 2021</td>
                <td className="widgetLgAmount">$122,00</td>
                <td className="widgetStatus">
                    <Button type="Pending" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src={photo1} alt="" className="widgetLgPhoto" />
                    <span className="widgetLgUserName">Carol Susan</span>
                </td>
                <td className="widgetLgDate">1 jun 2021</td>
                <td className="widgetLgAmount">$122,00</td>
                <td className="widgetStatus">
                    <Button type="Approved" />
                </td>
            </tr>
        </table>
    </div>
  )
}
