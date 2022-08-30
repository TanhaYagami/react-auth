import imgOne from "./productImgs/hell.jpg";
import { FaTrash } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import {productRows} from "../../../dummyData.js"
import { Link } from "react-router-dom";
import React from "react"

import "./productList.css"



    

export default function ProductList() {

  const [data, setData] = React.useState(productRows)


const deletHandler = (id)=>{
  const newArr=data.filter((item)=>item.id !== id)
  setData(newArr)
}

  const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'product', headerName: 'Product', width: 230, renderCell:(params)=>{
          return(
               <div className='productListItem'>
              <img src={imgOne} alt="imgOne" className='productListImg' />
              {params.row.name}
          </div>)
      }},
      
      {
        field: 'stock',
        headerName: 'Stock',
        width: 100,
      },
      
      {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 120,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 170,
        renderCell:(params)=>{
          return(
            <>
            <Link to={"/product/"+ params.row.id}>
            <button className="productListEditBtn">Edit</button>
            </Link>
            <FaTrash className="productListDltBtn" onClick={()=>deletHandler(params.row.id)} />
            </>
          )
        }
        },
    ];
    
 
return (
  <div className='productList'>
       <DataGrid
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  
  </div>
)
}

