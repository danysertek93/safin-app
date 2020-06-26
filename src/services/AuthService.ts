import axios from 'axios'
import UrlService from "./URLService"
import CookieService from './CookieService';


interface Credentials {
    mail: string
    password:string
}
const expiresAt =60 * 24;

class AuthService {
    async doUserLogin(credentials:Credentials){
        try{
            const response =await axios.post(UrlService.loginUrl(),credentials);
            return response.data;
    }catch(error){
        return false;
        
    }

    }
    
    handleLoginSuccess(response:any, remember:boolean){
        console.log(response);
        
        const token= response.access_token
        if (!remember) {
            const options={path:'/dashboard'};
            CookieService.set('access_token',token,options)
            return true;
        }
        let date=new Date();
        date.setTime(date.getTime()+ (expiresAt * 60 * 1000))
        const options ={path: '/dashboard', expires:date}
        CookieService.set('access_token',token,options);
        return true
    }
}

export default new AuthService();