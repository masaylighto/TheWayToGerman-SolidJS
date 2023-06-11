export default class TokenPayload
{
    /**
     *
     */
    constructor(role:string,userID:string) {
        this.Role=role;
        this.UserID=userID;

    }
    Role:string;
    UserID:string;
}