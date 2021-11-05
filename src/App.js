import React from 'react';
import GlobalStyle from './globalStyles';
import "./App.css";
import Home from './pages/HomePage/Home';
import MyWardrobe from './pages/MyWardrobe/TopsData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import CustomerAccess from './pages/CustomerAccess/CustomerAccess';
import AddForm from './pages/AddItem/BothForms';
import displayGenerator from './pages/Generator/Generator';
import { AuthProvider } from './contexts/AuthContexts';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <AuthProvider>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <PrivateRoute path='/add-item' component={AddForm} />
        <PrivateRoute path='/my-wardrobe' component={MyWardrobe} />
        <PrivateRoute path='/generator' component={displayGenerator} />
        <Route path='/customer-access/:action' component={CustomerAccess} />
      </Switch>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;