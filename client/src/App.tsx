import React, { lazy, Suspense } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.page'));

function App() {
    const fallbackComponent = () => <div>Loading...</div>;

    return (
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
    );
}

export default App;
