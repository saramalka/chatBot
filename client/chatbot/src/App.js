import Navbar from './components/Navbar';

function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('role') === 'admin';

  return (
    <PrimeReactProvider>
      <Router>
        {token && <Navbar isAdmin={isAdmin} />}
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
