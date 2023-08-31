import Quill from "quill";
import { ComponentProps, createEffect, createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import "~/css/quill.snow.css"
export default function DocWriter(props:{cssClass?:string}): JSX.Element{
   
  createEffect(() => {
    const quill = new Quill("#editor", {
        modules: {
          toolbar: [
            [{
              header: [1, 2,3,4,5,6, false]
            }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }], 
            [{ 'direction': 'rtl' },{ 'direction': 'ltr' }], 
            [{ 'size': ['small',false, 'large', 'huge' ] }], 
            ['bold', 'italic', 'underline','strike'],
            [{ 'color': [] }, { 'background': [] }],        
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['image','link']
          ]
        },
        theme: 'snow' // or 'bubble'
      });
  });

  return (
      <div id="editor" dir="ltr" class={props.cssClass}></div>  
  );
}
