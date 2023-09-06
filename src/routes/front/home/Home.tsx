import { createResource } from "solid-js";
import GetArticlesDTO from "../../../Api/DTO/GetArticlesDTO";
import GetArticlesResponse from "../../../Api/ResponseObject/GetArticlesResponse";
import ArticlesApi from "../../../Api/Services/Article";
import { ShowNotification } from "../../../components/Notification";
import { Colors } from "../../../helper";

// Signals
const [ArticleResources,{mutate, refetch}] = createResource(GetArticles);
async function GetArticles() : Promise<GetArticlesResponse[]>{
    let dto =new GetArticlesDTO()
    let response = await ArticlesApi.Get(dto)
    if ("detail" in response)
    {         
         ShowNotification(response.detail,Colors.Red)
         return new Array<GetArticlesResponse>()
    }
    return response as Array<GetArticlesResponse>
}
const Home={
    GetArticles : refetch,
    ArticleList :ArticleResources
}
export default Home;