export default class ErrorResponse
{
    /**
     *
     */
    constructor(error?:string) {
        if (error)
        this.detail=error;
    }
    
    detail!:string;
    status!:number
      
}