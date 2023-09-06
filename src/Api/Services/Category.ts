import { Keys, QualifyPath } from "../../helper";
import CreateCategoryDTO from "../DTO/CreateCategoryDTO";
import HTTP_STATUS_CODES from "http-status-enum";
import ErrorResponse from "../ResponseObject/ErrorResponse";
import CreateCategoryResponse from "../ResponseObject/CreateCategoryResponse";
import { HandleApiExceptions } from "./helper";
import GetCategoriesDTO from "../DTO/GetCategoriesDTO";
import GetCategoriesResponse from "../ResponseObject/GetCategoriesResponse";

async function CreateCategory(dto:CreateCategoryDTO) : Promise<CreateCategoryResponse | ErrorResponse>{
    return await fetch(QualifyPath("Category"),{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
        },
        body:JSON.stringify(dto),
        method:"POST",        
    }).then(HandleCreateCategoryResponse).catch(HandleApiExceptions);
 }
 async function HandleCreateCategoryResponse(response:Response) :  Promise<CreateCategoryResponse | ErrorResponse>
 {
    if (response.status == HTTP_STATUS_CODES.OK){
            return await response.json() as CreateCategoryResponse;
    }
    if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
            return await response.json() as ErrorResponse;
    }
    return new ErrorResponse(await response.text());
 }


async function GetCategory(dto:GetCategoriesDTO) : Promise<GetCategoriesResponse[] | ErrorResponse>{

    let url = new URL(QualifyPath(`Category`))  
     if( dto.Language != undefined){
      url.searchParams.append("Language",dto.Language.toString())   
     }     
    return await fetch(url,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
        },
        method:"GET",        
    }).then(HandleGETCategoryResponse).catch(HandleApiExceptions);
 }
 async function HandleGETCategoryResponse(response:Response) :  Promise<GetCategoriesResponse[] | ErrorResponse>
 {
    if (response.status == HTTP_STATUS_CODES.OK){
            return await response.json() as GetCategoriesResponse[];
    }
    if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
            return await response.json() as ErrorResponse;
    }
    return new ErrorResponse(await response.text());
 }
 const CategoriesApi = {
   Add: CreateCategory,
   Get: GetCategory
 }
 export default CategoriesApi