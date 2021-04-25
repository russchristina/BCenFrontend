import { User } from './User';

export class Event{
    public id:number;
    public creator:User[];
    public description:String;
    public category:String;
    public minimum_participants:String;

    constructor(id:number, creator:User[], category:String, minimum_participants:String){
        this.id = id;
        this.creator = creator;
        this.category = category;
        this.minimum_participants = minimum_participants;
    }
}
