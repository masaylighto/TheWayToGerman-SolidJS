export default class ErrorResponse
{
    /**
     *
     */
    constructor(error?:string) {
        if (error)
        this.error=error;
    }
    
    error!: string;
      
}