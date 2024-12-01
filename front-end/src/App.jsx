import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import AuthProvider from './security/AuthContext';

function App() {

  return (
    <div>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  )
}

export default App
