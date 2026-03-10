import { fromEvent, map } from "rxjs";
import { mapTo, pluck } from "rxjs/operators";


//Transforms output in specific data
export class MapTo {
    excecute(){
        const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
        keyUp$.pipe(
            map(
                (value: KeyboardEvent): string => value.code
            )
        ).subscribe(console.log);
        const keyupMapTo$ = keyUp$.pipe(mapTo("key pressed"));
        keyupMapTo$.subscribe(console.log)
    }
}