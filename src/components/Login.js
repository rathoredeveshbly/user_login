import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem('token')

        let loggedIn = true
        if(token==null){
            loggedIn=false
        }
        this.state = {
            username:'',
            password:'',
            loggedIn:false,
            array:[]
        }
    }
    
    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    submitForm = e =>{
        e.preventDefault()
        const {username, password, array} = this.state
        array.push({
            username:username,
            password:password
        })
        // if(username==="xyz" && password ==="123"){
            localStorage.setItem('token',"asdfghjkl")
            this.setState({
                loggedIn:true,
                array
            })
        // }
        this.setState({
            loggedIn:true,
            array
        })
        console.log("Array",array)
    }
    
    render() {
        if(this.state.loggedIn){
            return <Redirect to={{
                pathname: '/admin',
                state: {username:this.state.username}
            }} />
        }
        return (
            <div>
                <h1>LogIn</h1>
                <form onSubmit={this.submitForm}>
                    <input 
                    type="text" 
                    placeholder="Enter name" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    />
                    <br/>
                     <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Login;