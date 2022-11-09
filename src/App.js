import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import CreateForm from './pages/CreateForm';
import Homepage from './pages/Homepage';
import Sharedpage from './pages/Sharedpage';
import SingleForm from './pages/SingleForm';
import './App.css'


function App() {

  return (
    <BrowserRouter >
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/form-list" element={<Sharedpage />} />
        <Route path="/form-view/:id" element={<SingleForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
