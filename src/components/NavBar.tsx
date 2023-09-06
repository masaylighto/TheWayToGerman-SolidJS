import { ComponentProps, JSXElement } from "solid-js";
import "../css/tailwind.css"
import "../css/core.css"
export default function NavBar(props:ComponentProps<any> & {FlexDirection:string, Class:string}):JSXElement{

    return(<nav lang="ar"  class={"flex shadow-/60 shadow "+props.FlexDirection+" "+props.Class }>
        {props.children}
    </nav>)
}