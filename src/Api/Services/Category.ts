import { Keys, QualifyPath } from "~/helper";
import CreateCategoryDTO from "../DTO/CreateCategoryDTO";
import HTTP_STATUS_CODES from "http-status-enum";
import ErrorResponse from "../ResponseObject/ErrorResponse";
import CreateCategoryResponse from "../ResponseObject/CreateCategoryResponse";
import { HandleApiExceptions } from "./helper";

export default async function CreateCategory(dto:CreateCategoryDTO) : Promise<CreateCategoryResponse | ErrorResponse>{

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