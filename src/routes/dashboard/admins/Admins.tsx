import { Colors  } from "~/helper";
import {  createSignal,createResource } from "solid-js";
import CreateAdminDTO from "~/Api/DTO/CreateAdminDTO";
import {  ShowNotification } from "~/components/Notification";
import GetAdminsDTO from "~/Api/DTO/GetAdminsDTO";
import AdminApi from "~/Api/Services/Admin" ;
import GetAdminsResponse from "~/Api/ResponseObject/GetAdminsResponse";
import DeleteAdminDTO from "~/Api/DTO/DeleteAdminDTO";


// Signals
const [AdminsResources,{mutate, refetch}] = createResource(GetAdmins);
// Api Callers 
async function AddAdmin(){

  let name      = document.getElementById("name")     as HTMLInputElement
  let username  = document.getElementById("username") as HTMLInputElement
  let email     = document.getElementById("email")    as HTMLInputElement
  let password  = document.getElementById("password") as HTMLInputElement

  if(password.value.length < 8 ){
    ShowNotification("password should be more than 8 characters",Colors.Red);
    return;
  }

  let dto = new CreateAdminDTO(name.value,email.value,username.value,password.value);
  let response = await AdminApi.CreateAdmin(dto)

  if ("detail" in response) 
  {
    ShowNotification(response.detail,Colors.Red)
    return;
  }
  ShowNotification("Done",Colors.Green) 

  refetch()
}
async function GetAdmins(){
 let response= await AdminApi.GetAdmins(new GetAdminsDTO())
 if ("detail" in response)
 {         
      ShowNotification(response.detail,Colors.Red)
      return new Array<GetAdminsResponse>()
 }
 return response as Array<GetAdminsResponse>
}

async function DeleteAdmin(element:Element,id:string){
  let response =await AdminApi.DeleteAdmin(new DeleteAdminDTO(id))
  if ("detail" in response)
  {         
       ShowNotification(response.detail,Colors.Red)   
       return;
  }
  ShowNotification("Admin Removed",Colors.Green)    
  element.parentElement?.remove();
}
const Admin ={
  Delete: DeleteAdmin,
  Add: AddAdmin,
  Get:  refetch,
  List: AdminsResources
}
export default Admin
