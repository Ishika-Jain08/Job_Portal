/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai","Indore"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer" ,"Mern stack developer","Java Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();

  const [selectedValue,setSelectedValue] = useState('');

  const changeHandler=(value)=>{
    setSelectedValue(value)
  }
  useEffect(()=>{

    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue]);
  return (
    <>
      <div className="w-full bg-white p-3 rounded-md">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3" />
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          {filterData.map((data, index) => (
            <div>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.array.map((item, idx) => {
const itemId = `id${index}-${idx}`
                return (
                
                  <div className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} id={itemId}/>
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default FilterCard;