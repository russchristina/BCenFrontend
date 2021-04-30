import { User } from './User';

export class Event{
    public id:number;
    public title:String;
    public creator:User;
    public description:String;
    public category:String;
    public minimumparticipants:String;

    constructor(id:number, title:String, creator:User, category:String, minimum_participants:String){
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.category = category;
        this.minimumparticipants = minimum_participants;
    }
}
