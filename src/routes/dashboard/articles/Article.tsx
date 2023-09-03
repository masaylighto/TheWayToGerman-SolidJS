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
async function ConvertFileToBase64(file:File) :Promise<string>
{
    let result_Array = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsArrayBuffer(file);
    }); 
    return btoa(new Uint8Array(result_Array as ArrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
}
async function AddArticle(html:string)
{ 
    let pictureField = document.getElementById("PictureField") as HTMLInputElement   
    if (pictureField.files?.length==0){
        return;
    }
    let titleField = document.getElementById("TitleField") as HTMLInputElement
    let categoryField = document.getElementById("CategoryField") as HTMLSelectElement    
    let picture= await ConvertFileToBase64(pictureField.files?.item(0) as File)  
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