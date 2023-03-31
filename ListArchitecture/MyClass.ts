
class ToDoList {

    private toDoList: string[] = ["Item1", "Item2"]

    constructor() { }

    public addItem(text: string) {
        this.toDoList.push(text);
        console.log("The list now has " + this.toDoList.length + " items")
    }

    public getList(): string[] {
        return this.toDoList;
    }

}

export default ToDoList