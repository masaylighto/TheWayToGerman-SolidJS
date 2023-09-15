import { ComponentProps } from "solid-js";

  function GridTable(props:ComponentProps<any>)
{
return <div class={"grid grid-flow-col auto-cols-max "+ props.class}>
 {props.children}
</div>
}
  function FlexTable(props:ComponentProps<any>)
{
return <div class={"flex flex-wrap "+ props.class}>
 {props.children}
</div>
}
const Tables = {
    Flex:FlexTable,
    Grid: GridTable
}
export default Tables