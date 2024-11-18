import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompanyTable from "./CompanyTable";
import useGetAllCompany from "@/hooks/useGetAllCompany";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/CompanySlice";

const Company = () => {
    useGetAllCompany();
    const [input ,setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
dispatch(setSearchCompanyByText(input));
    },[input])
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" placeholder="Filter by name" 
          onChange={(e)=>setInput(e.target.value)}/>
          <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
        </div>
<CompanyTable/>
      </div>

    </>
  );
};

export default Company;
