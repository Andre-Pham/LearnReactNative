
class MyClass {

    private text: string;
    private static readonly prefix: string = "PREFIX";

    constructor(text: string) {
        this.text = text
    }

    public setText(text: string) {
        this.text = text
        console.log("this.text = " + this.text)
    }

    public getText(): string {
        return MyClass.prefix + " " + this.text
    }

}

export default MyClass