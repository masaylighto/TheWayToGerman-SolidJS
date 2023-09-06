import { Keys, QualifyPath } from "../../helper";
import CreateArticleDTO from "../DTO/CreateArticleDTO";
import GetArticlesDTO from "../DTO/GetArticlesDTO";
import CreateArticleResponse from "../ResponseObject/CreateArticleResponse";
import ErrorResponse from "../ResponseObject/ErrorResponse";
import GetArticlesResponse from "../ResponseObject/GetArticlesResponse";
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
     }).then(HandleCreateArticleResponse).catch(HandleApiExceptions);
 
 }
 async function GetArticles(dto:GetArticlesDTO) : Promise<GetArticlesResponse[] | ErrorResponse>{
    let url = new URL(QualifyPath(`Article`))  
    if( dto.Title != undefined){
        url.searchParams.append("Title",dto.Title as string)   
    } 
    if( dto.Description != undefined){
        url.searchParams.append("Description",dto.Description as string)   
    } 
    if( dto.CategoryID != undefined){
        url.searchParams.append("CategoryID",dto.CategoryID as string)   
    } 
    return await fetch(url,{
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization':'Bearer '+ localStorage.getItem(Keys.AuthToken)
         },
         method:"GET"
     }).then(HandleGetArticlesResponse).catch(HandleApiExceptions);
 
 }
async function HandleCreateArticleResponse(response:Response) :  Promise<CreateArticleResponse | ErrorResponse>
{
  if (response.status == HTTP_STATUS_CODES.OK){
       return await response.json() as CreateArticleResponse;
  }
  if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
       return await response.json() as ErrorResponse;
  }
  return new ErrorResponse(await response.text());

}
async function HandleGetArticlesResponse(response:Response) :  Promise<GetArticlesResponse[] | ErrorResponse>
{
  if (response.status == HTTP_STATUS_CODES.OK){
       return await response.json() as GetArticlesResponse[];
  }
  if (response.status == HTTP_STATUS_CODES.BAD_REQUEST){
       return await response.json() as ErrorResponse;
  }
  return new ErrorResponse(await response.text());

}
const ArticlesApi={
 Add:CreateArticle,
 Get:GetArticles
}
export default ArticlesApi;