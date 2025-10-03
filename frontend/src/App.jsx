
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  // ✅ use react-router-dom
import './App.css'
import Root from './utils/Root'
import Login from './pages/Login'
import ProctectRoutes from './utils/ProctectRoutes'
import AdminDashboard from './pages/AdminDashboard'
import Customer from './pages/Customer'
import UnauthorizedPage from './pages/Unauthorized'
function App() {
  return (
    <>
      <Router className="">
        <Routes>
              <Route path="/" element={<Root />} />
          <Route path="/admin/dashboard" element={<ProctectRoutes  requireRole={["admin"]}>  <AdminDashboard /></ProctectRoutes>} />
 <Route 
    path="/customer/dashboard" 
    element={
      <ProctectRoutes requireRole={["customer"]}>
        <Customer />
      </ProctectRoutes>
    } 
  />    
    <Route path="/login" element={<Login/>} />    
                {/* <Route path="/unaauthorized" element={<p className='font-bold text-3xl my-20 ml-20'>Unauthorized</p>} /> */}
                 <Route path="/unauthorized" element={<p className='font-bold text-3xl my-20 ml-20'><UnauthorizedPage/></p>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
