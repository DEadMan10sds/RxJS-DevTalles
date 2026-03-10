import { asyncScheduler, of, range } from "rxjs";

//Emits number sequence -> range(1,5) -> range(start_number, #OfIterations)
//it's syncrhonous
export class Range{
    excecute(){
        //const src$ = range(1, 5, asyncScheduler); -----> DEPRECATED
        const src$ = range(1, 5);
        console.log("start");
        src$.subscribe(console.log);
        console.log("end");
    }
}