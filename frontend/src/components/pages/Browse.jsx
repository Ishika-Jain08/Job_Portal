import useGetAllJobs from "@/hooks/useGetAllJobs";
import Navbar from "../shared/Navbar"
import SingleJob from "./SingleJob";
import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";


const Browse = () => {
useGetAllJobs();
const {allJobs} = useSelector(store=>store.job);
const dispatch = useDispatch();

useEffect(()=>{
    return()=>{
        dispatch(setSearchedQuery(""))
    }
})
  return (
 <>
 <div>

    <Navbar/>
    <div className='max-w-7xl mx-auto my-10'>
    <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
    <div  className='grid grid-cols-3 gap-4'>
{

allJobs.map((job)=>{
    return(
        <SingleJob key={job._id} job={job}/>
    )
})
}
    </div>
    </div>
 </div>
 </>
  )
}

export default Browse