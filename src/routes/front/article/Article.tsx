import { createResource, createSignal } from "solid-js";
import ArticlesApi from "../../../Api/Services/Article";
import GetArticleDTO from "../../../Api/DTO/GetArticleDTO";
import { useParams } from "solid-app-router";
import GetArticlesResponse from "../../../Api/ResponseObject/GetArticleResponse";
import GetArticleResponse from "../../../Api/ResponseObject/GetArticleResponse";
const [articleID,SetArticleID]=createSignal("");
const [ArticleResources] = createResource(articleID,GetArticle);

async function GetArticle(id:string){
    let dto = new GetArticleDTO(id);
    let response = await ArticlesApi.GetByID(dto)
    if ("detail" in response){
        location.href="/404";
    }
    return response as GetArticleResponse
}
const Article={
    Get:SetArticleID,
    Content:ArticleResources
}
export default Article;