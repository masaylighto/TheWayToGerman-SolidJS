import { createResource } from "solid-js";
import CreateArticleDTO from "../../../Api/DTO/CreateArticleDTO";
import ArticlesApi from "../../../Api/Services/Article";
import { Colors } from "../../../helper";
import { ShowNotification } from "../../../components/Notification";


const [ArticlesResource,{mutate, refetch}] = createResource(GetArticles);
async function GetArticles()
{ 
return []
}
async function ConvertFileToURl(file:File) :Promise<string>
{
    let result_Array = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    }); 
    return result_Array as String;
}
async function AddArticle(html:string)
{ 
    let pictureField = document.getElementById("PictureField") as HTMLInputElement   
    if (pictureField.files?.length==0){
        return;
    }
    let titleField = document.getElementById("TitleField") as HTMLInputElement
    let categoryField = document.getElementById("CategoryField") as HTMLSelectElement    
    let picture= await ConvertFileToURl(pictureField.files?.item(0) as File)  
    let overviewField = document.getElementById("OverviewField") as HTMLInputElement
    let dto = new CreateArticleDTO(titleField.value,overviewField.value,html,categoryField.value,picture) 
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