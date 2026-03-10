import { fromEvent, map } from "rxjs";
import { pluck } from "rxjs/operators";

export class Pluck{
    excecute(){
        const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
        keyUp$.pipe(
            map(
                (value: KeyboardEvent): string => value.code
            )
        ).subscribe(console.log);
        const keyupPluck$ = keyUp$.pipe(pluck("key"));
        keyupPluck$.subscribe(console.log)
    }
}