
import {useNavigate} from 'react-router-dom'

export default function ProtectedRoute({children, listFormData}) {

    const navigate= useNavigate()
    if(!listFormData){
     return navigate("/signUp") }
  return children;
}
