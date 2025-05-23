export class TodosObject {
    id: number;
    constructor(
        public title:string,
        public completed:boolean = false,
        public description:string,
    ){
        this.id = Math.floor(Math.random() * 1000) + 1
    }
}