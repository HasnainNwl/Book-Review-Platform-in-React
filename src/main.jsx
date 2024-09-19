
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx';
import BookDetail from './pages/BookDetail/BookDetail .jsx';
import BookSubmission from './pages/BookSubmission/BookSubmission.jsx';
import Community from './pages/Community/Community.jsx';
// import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import SearchFilter from './pages/SearchFilter/SearchFilter.jsx';
const router = createBrowserRouter([
 
  {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Home /> },
        { path: "/bookdetail", element: <BookDetail/> },
        { path: "/booksubmission", element: <BookSubmission/> },
        { path: "/community", element: <Community/> },
        { path: "/userprofile", element: <UserProfile/> },
        { path: "/searchfilter", element: <SearchFilter/> },


        
    ],

  },
  // { path: "/admin", element: <AdminDashboard/> },



]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
   
)
