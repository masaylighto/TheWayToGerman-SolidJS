import { For } from "solid-js";
import GetCategoriesResponse from "../../../Api/ResponseObject/GetCategoriesResponse";
import { AuthenticatedPage } from "../../../components/AuthenticatedEnforcers";
import { NotificationBox } from "../../../components/Notification";
import { AccessRoles } from "../../../helper";
import Category from "../categories/Categories";
import DashboardNavbar from "../dashboards/DashboardNavbar";
import Articles from "./Article";
import Doc from "../../../components/DocWriter";
function ArticleCell(Article:any){
    return <></>
}
function CategoryOption(entry:GetCategoriesResponse)
{
  return <option value={entry.id}>{entry.name}</option>
}

export default function ArticleView() {    
  let Picture: HTMLInputElement | undefined;
    return (
      <AuthenticatedPage Role={AccessRoles.OwnerRole}>
        <main style={"background-color:#f5f5f5"} class="min-h-full h-fit">
          <NotificationBox/>               
          <DashboardNavbar/>
          <div class="flex flex-col">    
          <h1 class=" text-2xl mx-auto mt-10">اكتب مقالة جديدة</h1>    
          <div class="w-[1000px] mx-auto flex flex-col gap-y-1 bg-white rounded p-2  mt-10">
            <div class="flex gap-2 flex-row">
            <div  class="flex bg-white  w-72  flex-row  border  px-2 rounded items-center gap-2">
              <p>عنوان</p>
              <input class="h-10 w-full outline-none" id="TitleField"></input>
            </div>
        
            <div    class="flex bg-white flex-row border w-72 px-2 rounded items-center gap-2">
              <p>التصنيف</p>
              <select class="h-10 w-full outline-none" id="CategoryField">
              <For each={Category.List()}>{(x:GetCategoriesResponse)=>CategoryOption(x)}</For>
         

              </select>
            </div>
            <div   class="flex bg-white flex-row  border w-72 px-2 rounded items-center gap-2">
              <p>صورة</p>
              <label  class="h-10 w-full flex items-center justify-center"> 
              اختيار
                 <input accept="image/*" type="file" class="hidden" id="PictureField" ref={Picture}></input>
              </label>
            </div>
            <button  onClick={()=>Articles.Add(Doc.GetContent())} class=" text-flag-red text-lg  border rounded w-24 p-1 select-none self-center ">شارك</button>
            </div>
            <div  class="flex bg-white flex-row  border px-2 rounded items-center gap-2">
              <p>لمحة</p>
              <input class="h-20 w-full outline-none whitespace-break-spaces" id="OverviewField"></input>
            </div>
          </div>
          <div id="editor-container" dir="ltr"  class="bg-white shadow  w-[1000px]  mx-auto flex flex-col ">
            <Doc.Writer cssClass="min-h-[400px] w-full "/>
         
          </div>     
          </div>                  
        </main >  
      </AuthenticatedPage>
    );
  }