import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from '../Context/Context';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

// const Auth = lazy(() => import('../AuthGuard/Auth'));
const User = lazy(() => import('../Components/User/Users/User'));
const Login = lazy(() => import('../Components/Authentication/Login'));
const Signup1 = lazy(() => import('../Components/Authentication/Signup1'));
const Home = lazy(() => import('../Pages/HomePage'));
const Profile = lazy(() => import('../Components/User/Profile'));
const Admin = lazy(() => import('../Components/Admin/Admin'));


function CommonRouter() {
  return (
    <Context>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup1 />} />
          {/* <Route path='/' element={<Auth />}> */}
            <Route path='/' element={<Home />}>
              <Route path='/' element={<User />} />
              <Route path='admin' element={<Admin />}>
                {/* <Route index element={<AddRationales />} />
                <Route path='showusers' element={<ShowUsers />} />
                <Route path='rationales' element={<ShowRationales />} />
                <Route path='addbill' element={<AddMedicalBill />} />
                <Route path='billstatus' element={<BillStatus />} /> */}
              </Route>
              <Route path='profile' element={<Profile />} />
            </Route>
          {/* </Route> */}
            
        </Routes>
      </Suspense>
    </Context>
  )
}

export default CommonRouter