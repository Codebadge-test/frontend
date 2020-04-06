import React, { Component } from "react"; 
import axios from 'axios';
import Cookies from 'js-cookie'
var backend;
if(process.env.NODE_ENV==="production"){
    backend = "https://codebadge-backend.herokuapp.com/"
}
else{
    backend = "http://localhost:3001/"
}
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:null
        }
    }
    ComponentDidMoiunt(){
        console.log("test")
        var data = {token:Cookies.get("token")}
        axios.post(`${backend}/github/user`,data)
            .then(result=>{
                this.setState("username",result.json.username)
            })
            .catch(err=>console.log(err))
    }
    render() {
        var state = this.state
        console.log(state.usernmae)
    if(state.username!==null){
        return (
     <div>
         <h1>Test</h1>
       <p>{state.username}</p>
     </div>
    );
  }
    else{
        return(
            <p>Loading...</p>
        )
    }
}
}

export default Dashboard;