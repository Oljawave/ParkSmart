import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/desktop/account/login'
import Register from './pages/desktop/account/register'
import Main from './pages/desktop/main/main'
import Book from './pages/desktop/profile/book'
import Select from './pages/desktop/profile/select'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Main />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
