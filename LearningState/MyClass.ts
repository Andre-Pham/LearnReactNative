
class MyClass {

    private text: string;

    constructor(text: string) {
        this.text = text
    }

    public setText(text: string) {
        this.text = text
        console.log("this.text = " + this.text)
    }

    public getText(): string {
        return this.text
    }

}

export default MyClass