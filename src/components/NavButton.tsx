import { ComponentProps, JSXElement } from "solid-js";
import "../css/tailwind.css"
import "../css/core.css"
export default function NavButton(props:ComponentProps<any> & {class:string,onClick:() => {}}):JSXElement{

    return(<button onclick={()=>props.onClick()} class={"my-2  p-4 bg-transparent btn-active "+props.class}>
      {props.children}
    </button>)
}