import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './Layout/Layout.jsx'
import SimpleLayout from './Layout/SimpleLayout.jsx'

import HomePage from './Pages/HomePage.jsx'
import Destinations from './Pages/Destinations.jsx'
import DetailsDestinations from './Pages/DetailsDestinations.jsx'
import Blogs from './Pages/Blogs.jsx'
import DetailsBlogs from './Pages/DetailsBlogs.jsx'
import About from './Pages/About.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import SignUp from './Pages/SignUp.jsx'
import SignIn from './Pages/SignIn.jsx'

function App() {

    
    return (
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Navigate to='/Home' replace />} />
              <Route path='/Home' element={<HomePage/>} />
              <Route path='/Destinations' element={<Destinations/>} />
              <Route path='/Detail-destinations/:id' element={<DetailsDestinations/>} />
              <Route path='/Blogs' element={<Blogs/>} />
              <Route path='/Blogs-details/:id' element={<DetailsBlogs/>} />
          </Route>
          <Route path='/' element={<SimpleLayout />}>
              <Route path='/About' element={<About/>} />
              <Route path='/Contact-Us' element={<ContactUs/>} />
              <Route path='/Contact-Us' element={<ContactUs/>} />
              <Route path='/Sign-Up' element={<SignUp/>} />
              <Route path='/Sign-In' element={<SignIn/>} />
              <Route path='/*' element={<NotFoundPage/>} />
          </Route>
        </Routes> 
    )
}

export default App