import {FaUpload} from "react-icons/fa";
import Chart from '../../../components/chart/Chart'
import { Link } from 'react-router-dom'
import {productData} from '../../../dummyData'
import productImg from './productImages/appleAirpods.png'
import './product.css'

export default function Product() {
  return (
    <div className='product'>
         <div className="productTitelContainer">
            <h1 className="productTitleTitle">Product</h1>
            <Link to="/newproduct">
            <button className="productAddButton">Create</button>
            </Link>
         </div>
         <div className="productTop">

            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance" />
            </div>
            <div className="productTopRight">
                <div className="productTopRightTop">
                    <img src={productImg} alt="appleAirpods" className='productInfoImg' />
                    <span className='productName'>Apple Airpods</span>
                </div>
                <div className="productTopRightBottom">
                    <div className="productInfoItem">
                        <span className='productInfoKey'>Sales:</span>
                        <span className='productInfoValue'>5123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>active:</span>
                        <span className='productInfoValue'>yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className='productInfoKey'>in stock:</span>
                        <span className='productInfoValue'>no</span>
                    </div>
                   
                </div>
            </div>
         </div>

         <div className="productBottom">

            <form className='productForm'>
                <div className="produtcFormLeft">
                
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpods" />
                <label>In Stock</label>
                    <select name="inStock" id="inStock" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                </select>   
                </div>
               
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={productImg} alt="" className='productUploadImg' />
                        <label for="file">
                            <FaUpload className="productUpdateIcon" />
                        </label>
                            <input type="file" id='file' style={{display:"none"}} /> 
                    </div>
                        <button className="productUpdateButton">Update</button>
                </div>
            </form>
         </div>
    </div>
  )
}
