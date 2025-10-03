import Sidebar from '../components/Side'
import Dashboard from '../components/Dashboard'
const AdminDashboard = () => {
  return (
      <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminDashboard
