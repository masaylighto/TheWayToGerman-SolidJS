import { createResource } from "solid-js";
import ArticlesApi from "../../../Api/Services/Article";
import GetArticleDTO from "../../../Api/DTO/GetArticleDTO";
import { useParams } from "solid-app-router";
import GetArticlesResponse from "../../../Api/ResponseObject/GetArticleResponse";
import GetArticleResponse from "../../../Api/ResponseObject/GetArticleResponse";

const [ArticleResources,{mutate, refetch}] = createResource(GetArticle);
async function GetArticle(){
    let dto = new GetArticleDTO("dc897780-eb85-4019-a497-bb509c5201ee");
    let response = await ArticlesApi.GetByID(dto)
    if ("detail" in response){
        location.href="/404";
    }
    return response as GetArticleResponse
}
const Article={
    Get:refetch,
    Content:ArticleResources
}
export default Article;