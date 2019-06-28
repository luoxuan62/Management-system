import React,{Component,Fragment} from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import {pageRoute} from "./routers"
import LayoutCom from "./layout"
import {connect} from "react-redux"
class App extends Component{
  render(){
    return(
      <Fragment>
        {
          this.props.token?<Switch>
          <Redirect from="/admin" exact to="/admin/home"/>
          <LayoutCom>
            {
              pageRoute.map((item,index)=>{
                return item.component?<Route path={item.pathname} key={index} render={()=>{
                         return <item.component/>
                      }}/>:item.children.map((child,index)=>{
                          return <Route path={child.pathname} key={index} render={()=>{
                                          return <child.component/>
                            }}/>

                        })

             })
            }
          </LayoutCom>
          
          <Redirect from="**" to="/404"/>
        </Switch>: <Redirect to="/login"/>
        }
      </Fragment>
    )
  }
}
const mapStateToProps=(state)=>({
  token:state.user.token
})
export default connect(mapStateToProps)(App);
