import ErrorResponse from "../ResponseObject/ErrorResponse"

async function HandleApiExceptions(err:any) : Promise<ErrorResponse> {
   
    return new ErrorResponse(err.message) 
}
export {
    HandleApiExceptions

}