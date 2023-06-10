
import HTTP_STATUS_CODES from 'http-status-enum';
import QualifyPath from "./helper"
import LoginDTO from './DTO/LoginDTO';
export default async function Auth(dto:LoginDTO) : Promise<String | LoginResponse | ErrorResponse>{

   let response = await fetch(QualifyPath("Login/Auth"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body:JSON.stringify(dto)
    });
   if (response.status == HTTP_STATUS_CODES.OK){
        return await response.json() as LoginResponse
   }
   if (response.status == HTTP_STATUS_CODES.UNAUTHORIZED){
        return await response.json() as ErrorResponse
   }
   return await response.text();

}

