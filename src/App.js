import React from 'react';
import GlobalStyle from './globalStyles';
import "./App.css";
import Home from './pages/HomePage/Home';
import MyWardrobe from './pages/MyWardrobe/MyWardrobe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import CustomerAccess from './pages/CustomerAccess/CustomerAccess';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/my-wardrobe' component={MyWardrobe} />
        <Route path='/customer-access/:action' component={CustomerAccess} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;