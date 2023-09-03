import React from 'react';
import {User} from '../model/User';
import {AuthService} from '../services/AuthService';
import { Login } from '../components/Login';


interface AppState{
  user:User | undefined

}
export class App extends React.Component<{}, AppState>{
  
  private authService:AuthService = new AuthService();

  render(): React.ReactNode {
    return (
      
      <div>App Works from Class!
        <Login authServices={this.authService}></Login> 
      </div>
     );
  }
  
}
