import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import SearchUser from './SearchUser'
import Signup from './Signup'
import Signin from './Signin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/display' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
        <Route path='/search' element={<SearchUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
