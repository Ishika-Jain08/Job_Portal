import { useEffect } from "react"
import Navbar from "../shared/Navbar"
import ApplicationTable from "./ApplicationTable"
import axios from "axios"
import { APPLICATION_API_END_POINT } from "@/utils/constant"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAllApplicants } from "@/redux/ApplicantSlice"


const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store=>store.application)

  useEffect(() => {
    
  const fetchAllApplicants = async()=>{
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicant`,{withCredentials:true});
      // console.log(res.data);
      dispatch(setAllApplicants(res.data.job));
      


    } catch (error) {
     console.log(error);
      
    }
  }
  fetchAllApplicants();
    
  }, [])
  

  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto'>
    <h1 className='font-bold text-xl my-5'>Applicants (
       {applicants?.applications?.length})
       </h1>
    <ApplicationTable/>
    </div>
    </>
  )
}

export default Applicants