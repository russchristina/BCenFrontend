import { User } from './User';

export class Responsibility{
    public id:number;
    public name:String;
    public description:String;
    public upper_limit:number;
    public users:User[];

    constructor(id:number, name:String, description:String, upper_limit:number, users:User[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.upper_limit;
        this.users = users;
    }
}