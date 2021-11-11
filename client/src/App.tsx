import React, { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { socket, SocketContext } from './context/socket';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));
const FileSystemPage = lazy(() => import('./pages/FileSystem/FileSystem.page'));

function App() {
  const fallbackComponent = () => <div>Loading...</div>;

  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element=
            {
              <Suspense fallback={fallbackComponent()}>
                <HomePage />
              </Suspense>
            }
          >
          </Route>
        </Routes>
        <Routes>
          <Route path="/file-system" element=
            {
              <Suspense fallback={fallbackComponent()}>
                <FileSystemPage />
              </Suspense>
            }
          >
          </Route>
        </Routes>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
