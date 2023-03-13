import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './layout/main';
import SignInForm from './components/sign-in-form';
import SignIn from './layout/sign-in';


function App() {

  return (
    <Routes>
      <Route path="/main/*" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/main/home" replace />} />
    </Routes>
  )
}

export default App
