export default class TokenPayload
{
    /**
     *
     */
    constructor(role:string,userID:string,UserName:string) {
        this.Role=role;
        this.UserID=userID;
        this.UserName=userID;
    }
    Role:string;
    UserID:string;
    UserName:string;
}