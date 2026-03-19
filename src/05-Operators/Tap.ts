import { map, range, tap } from "rxjs";

export class Tap {
    excecute(){
        //Handes/excecutes a function without altering the return, it's used for triggering side effects
        const numbers$ = range(5,5);
        numbers$.pipe(
            tap(
                //value => console.log("Value: ", value)
                {
                    next: value => console.log("Tap Next", value),
                    finalize: () => console.log("Finished Tap"),
                    complete: () => console.log("Completed Tap"),
                }
            ),
            map(val => val * 10),
            tap(num => console.log("Tap post map: ", num))
        ).subscribe();
    }
}