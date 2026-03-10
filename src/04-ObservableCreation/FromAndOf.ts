import { from, Observer, of } from "rxjs";

/**
 * of = uses the arguments to generate value secuence
 * from = creates observable from structures like arrays, promises, iterables, observables, etc.
 */
export class FromAndOf {
    excecute(){
        // const observer: Observer<any> = {
        //     next: async val => {
        //         console.log("next", val);
        //         const body = await val.json();
        //         console.log(body)
        //     },
        //     error: console.error,
        //     complete: () => console.warn("Completed")
        // };

        // //const source$ = from([1,2,3,4,5]);
        // //const source$ = of([1,2,3,4,5]);
        // //const source$ = from("Adan");
        // const source$ = from(fetch("http://api.github.com/users/DEadMan10sds"));
        // source$.subscribe(observer);
    
        const observer: Observer<any> = {
            next: val => console.log("next", val),
            error: console.error,
            complete: () => console.warn("Completed")
        };
    
        //Generative function -> Can work as Observable
        const myGenerator = function*(){
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
            yield 6;
        };
        
        const iterable = myGenerator();
        //for(let i  of iterable)
        //{
        //    console.log(i)
        //}

        from(iterable).subscribe(observer);

    }
}