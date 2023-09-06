import { Keys, QualifyPath } from "../../helper";
import CreateArticleDTO from "../DTO/CreateArticleDTO";
import CreateArticleResponse from "../ResponseObject/CreateArticleResponse";
import ErrorResponse from "../ResponseObject/ErrorResponse";
import { HandleApiExceptions } from "./helper";
import HTTP_STATUS_CODES from "http-status-enum";

async function CreateArticle(dto:CreateArticleDTO) : Promise<CreateArticleResponse | ErrorResponse>{

    return await fetch(QualifyPath("Article"),{
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
         },
         method:"POST",
         body:JSON.stringify(dto)
     }).then(HandleCreateAdminResponse).catch(HandleApiExceptions);
 
 }
async function HandleCreateAdminResponse(response:Response) :  Promise<CreateArticleResponse | ErrorResponse>
{
  if (response.status == HTTP_STATUS_CODES.OK){
       return await response.json() as CreateArticleResponse;
  }
  if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
       return await response.json() as ErrorResponse;
  }
  return new ErrorResponse(await response.text());

}
const ArticlesApi={
 Add:CreateArticle,

}
export default ArticlesApi;