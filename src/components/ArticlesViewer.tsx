import { ComponentProps, For } from "solid-js";

import GetArticlesResponse from "../Api/ResponseObject/GetArticlesResponse";
import Tables from "./Tables";
function ArticleCell(entity:GetArticlesResponse ){
   var createdDate= new Date(entity.createDate).toLocaleDateString('ar', { year:"numeric", month:"short", day:"numeric"});

    return <div onClick={()=>{location.href="/Article/"+entity.id}} class="flex flex-col  w-56 gap-2 bg-white hover-brightness click-brightness  overflow-hidden  ">
         <img class=" h-40 w-56 bg-contain"  src={entity.picture}></img>
        <div class="flex flex-col gap-1  p-2">
            <b>
              {entity.title}
            </b>
            <p class="text-gray-400">
              {entity.category}
            </p>
            <p class="text-gray-400">
              {createdDate}
            </p>
            <p class="text-gray-500">
                {entity.summary}
            </p>
            
        </div>       
    </div>
}
export default function ArticleViewer(props:ComponentProps<any>& {Articles: GetArticlesResponse[]}){
    return <Tables.Flex class=" p-2 mx-auto gap-5 justify-evenly">
          <For each={props.Articles}>{(x:GetArticlesResponse)=>ArticleCell(x)}</For>
    </Tables.Flex>
}