
import HTTP_STATUS_CODES from 'http-status-enum';
import {QualifyPath} from "../models/helper"
import LoginDTO from './DTO/LoginDTO';
import ErrorResponse from './ResponseObject/ErrorResponse';
import LoginResponse from './ResponseObject/LoginResponse';
export default async function Auth(dto:LoginDTO) : Promise<LoginResponse | ErrorResponse>{

   let response = await fetch(QualifyPath("Login/Auth"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method:"POST",
        body:JSON.stringify(dto)
    });
   if (response.status == HTTP_STATUS_CODES.OK){
        return await response.json() as LoginResponse;
   }
   if (response.status == HTTP_STATUS_CODES.UNAUTHORIZED){
        return await response.json() as ErrorResponse;
   }  
   if (response.status == HTTP_STATUS_CODES.SERVICE_UNAVAILABLE){  
     return new ErrorResponse("Wait for few minute before you Try again");
   }
   return new ErrorResponse(await response.text());

}

