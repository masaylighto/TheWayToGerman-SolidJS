
export default function QualifyPath(apiVersion:string,endpoint:string) : string
{
    return import.meta.env.VITE_Api+"/Api/"+apiVersion+"/"+endpoint
}