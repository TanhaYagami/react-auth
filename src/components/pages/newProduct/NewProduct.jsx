import './newProduct.css'

export default function NewProduct() {
  return (
    <div className='newProduct'>
          <h1 className="newProductTitle">New Product</h1>
        <form className="newProductForm">

            <div className="newProductItem">
                <label>Img</label>
                <input type="file" id='file'/>
            </div>
            <div className="newProductItem">
                <label>Name</label>
                <input type="text" placeholder="Apple AirPods" />
            </div>
          
            <div className="newProductItem">
                <label>Stock</label>
                <input type="number" placeholder="123" />
            </div>
            <div className="newProductItem">
                <label>Active</label>
                <select name="active" id="active" className="newProductSelect">
                <option value="yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>
            <button className="newProductButton">Create</button>
        </form>
    </div>
  )
}
