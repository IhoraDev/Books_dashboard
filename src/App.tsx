import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {DashboardPage} from './pages/DashboardPage'
import {AddBookPage} from './pages/AddBookPage'
import {EditBookPage} from './pages/EditBookPage'

import './App.scss';

const App: React.FC = () => {

    return (
            <BrowserRouter>

                <Navbar/>

                <Switch>
                    <Route

                        component={DashboardPage}
                        path="/"
                        exact
                    />

                    <Route
                        component={AddBookPage}
                        path="/add-book"
                    />

                    <Route
                        component={EditBookPage}
                        path="/edit-book"
                    />

                </Switch>
            </BrowserRouter>
    );
}

export default App;
