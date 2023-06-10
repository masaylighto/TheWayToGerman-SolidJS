
export default function QualifyPath(endpoint:string,apiVersion:string="v1") : string
{
    console.log(import.meta.env.VITE_Api);
    return import.meta.env.VITE_Api+"/api/"+apiVersion+"/"+endpoint;
}