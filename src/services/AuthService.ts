import { User } from "../model/User";

export class AuthService {

    public async login(userName:string, password:string):Promise<User | undefined>{
        return new Promise((resolve, reject) => {
            if (userName === 'user' && password === '1234')
                resolve({
                    userName:userName,
                    email:'abcd@gmail.com'
                });
            else 
                reject(undefined);
        });
       
    }
}