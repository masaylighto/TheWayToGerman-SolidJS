import { useParams } from "@solidjs/router";
import Article from "./article";
import { createEffect } from "solid-js";
import FrontNavbar from "../navbar/FrontNavbar";

export default function ArticleView()
{   let param= useParams();
    Article.Get(param.id)
 createEffect(()=>{    
    let articleContainer= document.getElementById("ArticleContainer") as HTMLDivElement
    let author= document.getElementById("Author") as HTMLParagraphElement
    let createdDate= document.getElementById("CreatedDate") as HTMLParagraphElement
    let category= document.getElementById("Category") as HTMLParagraphElement
    articleContainer.innerHTML =   Article.Content()?.content as string ??""
 
    author.innerText=" المؤلف "+Article.Content()?.author??"";
    category.innerText=" التصنيف "+Article.Content()?.category??"";
    if(Article.Content()?.createDate != undefined){
        createdDate.innerText+= new Date(Article.Content()?.createDate?.toString()!).toLocaleDateString('ar', { year:"numeric", month:"short", day:"numeric"});;
    }
 })
 return <div class="bg-gray-100">
    <div class="bg-flag-black"> 
        <FrontNavbar ></FrontNavbar>
    </div> 
    <div class="mt-10 mx-auto w-fit">
      
    <div class="shadow p-4 rounded bg-white" id="ArticleContainer">
    
    </div>
    <div class="flex flex-row">
     <p dir="ltr" class="w-fit my-2 mx-auto" id="Author" >المؤلف : </p>
     <p dir="ltr" class="w-fit my-2 mx-auto" id="CreatedDate" >تاريخ النشر :  </p>
     <p dir="ltr" class="w-fit my-2 mx-auto" id="Category">التصنيف :  </p>
    </div>
    </div>
 </div>
}