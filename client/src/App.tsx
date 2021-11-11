import React, { lazy, Suspense } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { socket, SocketContext } from './context/socket';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));

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
            </Router>
        </SocketContext.Provider>
    );
}

export default App;
