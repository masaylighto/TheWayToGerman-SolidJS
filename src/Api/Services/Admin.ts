
import HTTP_STATUS_CODES from 'http-status-enum';
import {Keys, QualifyPath} from "../../helper"
import CreateAdminDTO from '../DTO/CreateAdminDTO';
import ErrorResponse from '../ResponseObject/ErrorResponse';
import Ok from '../ResponseObject/Ok';
import GetAdminsDTO from '../DTO/GetAdminsDTO';
import { HandleApiExceptions } from './helper';
import GetAdminsResponse from '../ResponseObject/GetAdminsResponse';
import DeleteAdminDTO from '../DTO/DeleteAdminDTO';
import CreateAdminResponse from '../ResponseObject/CreateAdminResponse';
 async function CreateAdmin(dto:CreateAdminDTO) : Promise<CreateAdminResponse | ErrorResponse>{

   return await fetch(QualifyPath("Admin"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
        },
        method:"POST",
        body:JSON.stringify(dto)
    }).then(HandleCreateAdminResponse).catch(HandleApiExceptions);

}
async function DeleteAdmin(dto:DeleteAdminDTO) : Promise<Ok | ErrorResponse>{

     return await fetch(QualifyPath("Admin"),{
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
          },
          method:"Delete",
          body:JSON.stringify(dto)
      }).then(HandleDeleteAdminResponse).catch(HandleApiExceptions);
  
  }
 async function GetAdmins(dto:GetAdminsDTO) : Promise<Array<GetAdminsResponse> | ErrorResponse>{
    let url = new URL(QualifyPath(`Admin`))  
    if( dto.name != undefined){
    url.searchParams.append("name",dto.name as string)   
    } 
   return await fetch(url,{
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
 async function HandleCreateAdminResponse(response:Response) :  Promise<CreateAdminResponse | ErrorResponse>
 {
   if (response.status == HTTP_STATUS_CODES.OK){
        return await response.json() as CreateAdminResponse;
   }
   if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
        return await response.json() as ErrorResponse;
   }
   return new ErrorResponse(await response.text());

 }
 async function HandleDeleteAdminResponse(response:Response) :  Promise<Ok | ErrorResponse>
 {
   if (response.status == HTTP_STATUS_CODES.NO_CONTENT){
        return new Ok();
   }
   if (response.status == HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR){
        return await response.json() as ErrorResponse;
   }
   return new ErrorResponse(await response.text());

 }
 const AdminApi={
     CreateAdmin,
     GetAdmins,
     DeleteAdmin,     
 }
 export default AdminApi