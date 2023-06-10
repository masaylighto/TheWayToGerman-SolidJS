
export default function QualifyPath(endpoint:string,apiVersion:string="v1") : string
{
    return import.meta.env.VITE_Api+"/api/"+apiVersion+"/"+endpoint;
}