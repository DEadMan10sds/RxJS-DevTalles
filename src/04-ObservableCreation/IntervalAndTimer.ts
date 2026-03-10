import { interval, Observer, timer } from "rxjs";

//Both are asynchronous
export class IntervalAndTimer{
    excecute(){
        const observer: Observer<any> = {
            next: (value: any) => {
                console.info(value);
            },
            error: console.error,
            complete: () => {
                console.warn("Completed")
            }
        };

        const interval$ = interval(1000);
        const timer$ = timer(2000);

        console.log("Start");
        //interval$.subscribe(observer);
        timer$.subscribe(observer);
        console.log("End");
    }
}