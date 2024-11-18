import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Home from "./components/pages/Home"
import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Profile from "./components/pages/Profile"
import JobDescription from "./components/pages/JobDescription"
import Company from "./components/admin/Company"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/CompanySetup"
import AdminJobs from "./components/admin/AdminJobs"
import PostJob from "./components/admin/PostJob"
import Applicants from "./components/admin/Applicants"
import ProtectedRoute from "./components/admin/ProtectedRoute"

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  // admin routes
  {
    path:'/admin/companies',
    element:<ProtectedRoute><Company/></ProtectedRoute>
  },
  {
    path:'/admin/companies/create',
    element:<ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path:'/admin/companies/:id',
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path:'/admin/jobs',
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute>
  },
  {
    path:'/admin/jobs/create',
    element:<ProtectedRoute><PostJob/></ProtectedRoute>
  },
 
  {
    path:'/admin/jobs/:id/applicant',
    element:<ProtectedRoute><Applicants/></ProtectedRoute>
  },


])
const App = () =>{

  return (
    <>
   <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
