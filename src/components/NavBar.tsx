import { ComponentProps, JSXElement } from "solid-js";
import "../css/tailwind.css"
import "../css/core.css"
export default function NavBar(props:ComponentProps<any>):JSXElement{

    return(<nav lang="ar"  class="flex flex-row w-full h-fit border-l shadow-/60 shadow">
        {props.children}
    </nav>)
}