
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import ClientOrder from './Component/Pages/ClientOrder/ClientOrder';
import Footer from './Component/Pages/Footer/Footer';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home';
import Login from './Component/Pages/Login-form/Login';
import Orders from './Component/Pages/My-Orders/Orders';
import NotFounsd from './Component/Pages/NotFound/NotFounsd';
import Orderplace from './Component/Pages/Order-Place/Orderplace';
import PrivateRoute from './Component/Pages/PrivateRoute/PrivateRoute';
import Services from './Component/Pages/Services/Services'
import Authprovider from './context/Authprovider';

function App() {
  return (
    <div className="App">
     <Authprovider>
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
              <Home/>
          </Route>
          <PrivateRoute path="/services">
          <Services/>
          </PrivateRoute>
          <PrivateRoute path="/order">
          <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/ClientOrder">
          <ClientOrder/>
          </PrivateRoute>
          <PrivateRoute path="/orders">
              <Orders/>
          </PrivateRoute>
          <Route path="/Orderplace">
              <Orderplace/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/*">
            <NotFounsd/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
     </Authprovider>
    </div>
  );
}

export default App;
