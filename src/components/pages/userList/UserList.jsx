import imgOne from "./userImgs/jonas-1.jpg";
import { FaTrash } from 'react-icons/fa';
import { DataGrid } from '@mui/x-data-grid';
import {Rows} from "../../../dummyData.js"
import { Link } from "react-router-dom";
import React from "react"
import "./userList.css"


export default function UserList() {

  const [data, setData] = React.useState(Rows)

  const deletHandler = (id)=>{
    const newArr=data.filter((item)=>item.id !== id)
    setData(newArr)
  }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 230, renderCell:(params)=>{
            return(
                 <div className='userListUser'>
                <img src={imgOne} alt="imgOne" className='userListImg' />
                {params.row.userName}
            </div>)
        }},
        
        {
          field: 'email',
          headerName: 'Email',
          width: 140,
        },
        
        {
        field: 'transaction',
        headerName: 'Recent Transaction',
        type: 'number',
        width: 170,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 170,
          renderCell:(params)=>{
            return(
              <>
              <Link to={"/user/"+ params.row.id}>
              <button className="userListEditBtn">Edit</button>
              </Link>
              <FaTrash className="userListDltBtn" onClick={()=>deletHandler(params.row.id)} />
              </>
            )
          }
          },
      ];
      
      

  return (
    <div className='userList'>
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
