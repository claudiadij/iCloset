import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import MyWardrobe from './pages/MyWardrobe/MyWardrobe';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/my-wardrobe' component={MyWardrobe} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;