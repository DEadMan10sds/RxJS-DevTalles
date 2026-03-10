import { fromEvent, Observable } from "rxjs";

export class FromEvent{
    excecute(){
        /**
         * DOM Events
         */
        const src1$: Observable<PointerEvent> = fromEvent<PointerEvent>(document, "click");
        const src2$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, "keyup");

        const observer = {
            next: (value: KeyboardEvent | PointerEvent) => {
                console.log("next", value instanceof KeyboardEvent ? value.key : {x: value.x, y: value.y})
            },
        };

        src1$.subscribe(observer);
        src2$.subscribe(observer);

    }
}