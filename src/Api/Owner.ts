
import HTTP_STATUS_CODES from 'http-status-enum';
import {Keys, QualifyPath} from "../helper"
import CreateAdminDTO from './DTO/CreateAdminDTO';
import ErrorResponse from './ResponseObject/ErrorResponse';
import Ok from './ResponseObject/Ok';
export default async function CreateAdmin(dto:CreateAdminDTO) : Promise<Ok | ErrorResponse>{

   let response = await fetch(QualifyPath("Owner/Admin"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
        },
        method:"POST",
        body:JSON.stringify(dto)
    });
   if (response.status == HTTP_STATUS_CODES.OK){
        return new Ok();
   }
   if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
        return await response.json() as ErrorResponse;
   }
   return new ErrorResponse(await response.text());

}

