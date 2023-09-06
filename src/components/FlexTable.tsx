import { ComponentProps } from "solid-js";

export default function FlexTable(props:ComponentProps<any>)
{
return <div class={"flex flex-wrap flex-row gap-4 "+ props.class}>
 {props.children}
</div>
}