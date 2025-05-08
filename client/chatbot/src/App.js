import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ChatPage from './components/ChatPage';
import AuthPage from './components/AuthPage';
import AdminUsersPage from './admin/users/adminUserPage';
import AdminMessagesPage from './admin/messages/AdminMessagesPage';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('role') === 'admin'; // שמור את role בעת התחברות

  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />

          {token && (
            <>
              <Route path="/" element={<ChatPage />} />
              {isAdmin && (
                <>
                  <Route path="/admin/users" element={<AdminUsersPage />} />
                  <Route path="/admin/messages" element={<AdminMessagesPage />} />
                </>
              )}
            </>
          )}

          <Route path="*" element={<Navigate to={token ? "/" : "/auth"} />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
