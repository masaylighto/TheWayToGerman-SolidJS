import { createResource } from "solid-js";
import GetCategoriesDTO from "../../../Api/DTO/GetCategoriesDTO";
import GetCategoriesResponse from "../../../Api/ResponseObject/GetCategoriesResponse";
import CategoriesApi from "../../../Api/Services/Category";
import { ShowNotification } from "../../../components/Notification";
import { Colors } from "../../../helper";
import CreateCategoryDTO from "../../../Api/DTO/CreateCategoryDTO";


// Signals
const [CategoriesResource,{mutate, refetch}] = createResource(GetCategory);
async function GetCategory()
{ 
  let dto = new GetCategoriesDTO();
  let response = await CategoriesApi.Get(dto); 
  if ("detail" in response) 
  {
    ShowNotification(response.detail,Colors.Red)
    return new Array<GetCategoriesResponse>();
  }
  return response as GetCategoriesResponse[];
}
async function AddCategory(){

  let name      = document.getElementById("name")     as HTMLInputElement
  let language  = document.getElementById("language") as HTMLSelectElement

  if(name.value.length==0){
    ShowNotification("Please write a name",Colors.Red);
    return;
  }
  if(language.selectedIndex==0){
    ShowNotification("Please Select a Language",Colors.Red);
    return;
  }
  let dto = new CreateCategoryDTO(name.value,language.value);
  let response = await CategoriesApi.Add(dto)

  if ("detail" in response) 
  {
    ShowNotification(response.detail,Colors.Red)
    return;
  }
  ShowNotification("Done",Colors.Green)
  refetch();
}



const Category={
  Add: AddCategory,
  Get: refetch,
  List: CategoriesResource
}
export default Category