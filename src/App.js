import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import DashboardContainer from './containers/DashboardContainer'
import UserLogin from './components/user/UserLogin';
import {PrivateRoute} from './components/router/protected'
const privateRoute = [
  {path:'/dashboard', component: ()=><DashboardContainer/>,exact:true}
];
class App extends Component {
  
  renderDashboard=()=><DashboardContainer/>
  renderLogin=()=><UserLogin/>
  render(){
  return (
    <Router>
        <Switch>
          {privateRoute.map((route,key)=>{
            return <PrivateRoute exact={route.exact} path={route.path} component={route.component} key={key}/>
          })}
          <Route path='/login' component={this.renderLogin}/>
        </Switch>
    </Router>
  );
}
}

export default App;
