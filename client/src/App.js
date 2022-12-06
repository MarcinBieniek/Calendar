import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import AddWeek from './components/features/AddWeek/AddWeek';
import AddNotice from './components/features/AddNotice/AddNotice';
import SetMeeting from './components/features/SetMeeting/SetMeeting';
import UserPage from './components/pages/UserPage/UserPage';

import './styles/global.scss';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/week/add" element={<AddWeek />} /> 
        <Route path="/addNotice" element={<AddNotice />} /> 
        <Route path="/week/setmeeting" element={<SetMeeting />} /> 
        <Route path="/user/:id" element={<UserPage />} /> 
      </Routes>
    </main>
  );
}

export default App;
