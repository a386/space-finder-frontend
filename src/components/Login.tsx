import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps{
    authServices:AuthService
}
interface LoginState{
    userName:string,
    password:string,
    loginAttemp:boolean,
    loginSuccessfull: boolean
}

interface CustomEvent{
    target:HTMLInputElement
}
export class Login extends React.Component<LoginProps, LoginState>{
    state:LoginState = {
        userName:'',
        password:'',
        loginAttemp:false,
        loginSuccessfull:false
    }

    private setUserName(event:CustomEvent){
        this.setState({userName:event.target.value});
        console.log('set Username ' + event.target.value);
    }

    private setPassword(event:CustomEvent){
        this.setState({password:event.target.value});
        console.log('set password ' + event.target.value);
    }

    private async handleSubmit(event:SyntheticEvent){
        event.preventDefault();
        this.setState({
            loginAttemp:true
            });

        this.props.authServices.login(
            this.state.userName, 
            this.state.password).then((result)=> {
                this.setState({loginSuccessfull:true});
                console.log(result);
            }).catch((error)=> {
                console.log("wrong login");
                this.setState({loginSuccessfull:false});
            });
    }

    render():React.ReactElement{
        let loginMessage:any;
        if (this.state.loginAttemp){
            if (this.state.loginSuccessfull)
            {
                loginMessage = <label>login successful</label>
            }else 
            {
                loginMessage = <label>Login failed</label>
            }
        }
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <input value={this.state.userName} onChange={e=> this.setUserName(e)}/><br/>
                    <input value={this.state.password} type="password" onChange={e=> this.setPassword(e)}/><br/>
                    <input type="submit" value='Login'/>
                </form>
                {loginMessage}
            </div>
        )
    }
}