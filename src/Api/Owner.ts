
import HTTP_STATUS_CODES from 'http-status-enum';
import {Keys, QualifyPath} from "../helper"
import CreateAdminDTO from './DTO/CreateAdminDTO';
import ErrorResponse from './ResponseObject/ErrorResponse';
import Ok from './ResponseObject/Ok';
import GetAdminsDTO from './DTO/GetAdminsDTO';
import { HandleApiExceptions } from './helper';
import GetAdminsResponse from './ResponseObject/GetAdminsResponse';
 async function CreateAdmin(dto:CreateAdminDTO) : Promise<Ok | ErrorResponse>{

   return await fetch(QualifyPath("Owner/Admin"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
        },
        method:"POST",
        body:JSON.stringify(dto)
    }).then(HandleCreateAdminResponse).catch(HandleApiExceptions);

}

 async function GetAdmins(dto:GetAdminsDTO) : Promise<Array<GetAdminsResponse> | ErrorResponse>{

   return await fetch(QualifyPath(`Owner/Admin?name${dto.name}`),{
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
         },
         method:"Get",
     }).then(HandleGetAdminsResponse).catch(HandleApiExceptions);
 
 
 }
 async function HandleGetAdminsResponse(response:Response) : Promise<Array<GetAdminsResponse> | ErrorResponse>{
   if (response.status == HTTP_STATUS_CODES.OK){
        return await response.json() as Array<GetAdminsResponse>;
   }
   if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
        return await response.json() as ErrorResponse;
   }
   return new ErrorResponse(await response.text());
 }
 async function HandleCreateAdminResponse(response:Response) :  Promise<Ok | ErrorResponse>
 {
   if (response.status == HTTP_STATUS_CODES.OK){
        return new Ok();
   }
   if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
        return await response.json() as ErrorResponse;
   }
   return new ErrorResponse(await response.text());

 }
 export {
    CreateAdmin,
    GetAdmins
 }