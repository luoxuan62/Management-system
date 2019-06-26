import React,{Component} from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import {pageRoute} from "./routers"
import LayoutCom from "./layout"
class App extends Component{
  render(){
    return(
      <div>
        <Switch>
          <LayoutCom>
            {
              pageRoute.map((item,index)=>(
                <Route path={item.pathname}key={index} render={()=>{
                  return <item.component/>
                }}/>
              ))
            }
          </LayoutCom>
          <Redirect from="/admin" exact to="/admin/home"/>
          <Redirect from="**" to="/404"/>
        </Switch>
      </div>
    )
  }
}

export default App;
