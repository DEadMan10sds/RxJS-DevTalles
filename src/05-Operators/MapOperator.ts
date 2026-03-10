import { fromEvent, Observable, range } from "rxjs";
import { map } from "rxjs/operators"

//map() => passes 2 arguments to the called function, the current value and it's index
export class MapOperator {
    //multiplyBy = (value: number): number => value * 10;
    multiplyBy(value: number): string
    {
        return (value * 10).toString();
    }


    excecute(){
        //range(0, 6).pipe(map<number, string>(this.multiplyBy)).subscribe(console.log);


        const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
        keyUp$.pipe(
            map(
                (value: KeyboardEvent): string => value.code
            )
        ).subscribe(console.log);

    }
}