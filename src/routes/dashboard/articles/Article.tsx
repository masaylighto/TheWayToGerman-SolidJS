import { createResource } from "solid-js";

const [ArticlesResource,{mutate, refetch}] = createResource(GetArticles);
async function GetArticles()
{ 
return []
}
async function AddArticle()
{ 

}
const Articles = {
    Add:AddArticle,
    Get:refetch,
    List: ArticlesResource
}


export default Articles