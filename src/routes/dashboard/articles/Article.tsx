import { createResource } from "solid-js";
import CreateArticleDTO from "~/Api/DTO/CreateArticleDTO";
import ArticlesApi from "~/Api/Services/Article";
import { ShowNotification } from "~/components/Notification";
import { Colors } from "~/helper";

const [ArticlesResource,{mutate, refetch}] = createResource(GetArticles);
async function GetArticles()
{ 
return []
}
async function AddArticle(html:string)
{ 
    let titleField = document.getElementById("TitleField") as HTMLInputElement
    let categoryField = document.getElementById("CategoryField") as HTMLSelectElement
    let pictureField = document.getElementById("PictureField") as HTMLInputElement
    let overviewField = document.getElementById("OverviewField") as HTMLInputElement
    let dto = new CreateArticleDTO(overviewField.value,overviewField.value,html,categoryField.value) 
    let response= await ArticlesApi.Add(dto)
    if ("detail" in response)
    {         
       ShowNotification(response.detail,Colors.Red)   
       return;
    }
    ShowNotification("Article Added",Colors.Green)    
    refetch();
}
const Articles = {
    Add:AddArticle,
    Get:refetch,
    List: ArticlesResource
}


export default Articles