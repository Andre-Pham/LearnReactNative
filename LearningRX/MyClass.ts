import { Observable } from 'rxjs';
import { observeObject } from "./ObserveObject";


class MyClass {

    public text: string;
    public observedObject: MyClass;
    public observedObjectChange$: Observable<MyClass>

    constructor(text: string) {
        this.text = text
        const [observedObject, observedObjectChange$] = observeObject(this);
        this.observedObject = observedObject
        this.observedObjectChange$ = observedObjectChange$
        //observedObjectChange$.subscribe(changes => console.log(changes.text));
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