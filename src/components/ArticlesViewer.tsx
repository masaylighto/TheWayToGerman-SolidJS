import { ComponentProps, For } from "solid-js";
import FlexTable from "./FlexTable";
import GetArticlesResponse from "../Api/ResponseObject/GetArticlesResponse";
function ArticleCell(entity:GetArticlesResponse ){

    return <div class="flex flex-row h-32 w-96 gap-4 bg-white hover-brightness click-brightness rounded overflow-hidden shadow ">
         <img class="rounded"  width={250} height={250} src={entity.picture}></img>
        <div class="flex flex-col  p-2">
        <p>
         {entity.title}
        </p>
        <p class="text-gray-500">
            {entity.summary}</p>
        </div>       
    </div>
}
export default function ArticleViewer(props:ComponentProps<any>& {Articles: GetArticlesResponse[]}){
    return <FlexTable class="p-2 mx-auto">
          <For each={props.Articles}>{(x:GetArticlesResponse)=>ArticleCell(x)}</For>
    </FlexTable>
}