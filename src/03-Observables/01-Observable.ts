import {Observable, Observer, Subscriber} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log(value),
    error: console.error,
    complete: () => console.log("Finished")
}


const obs$: Observable<string> = new Observable((subscriber: Subscriber<string>) => {
    subscriber.next("Hello there");
    subscriber.next("General Kenobi");
    subscriber.complete();
});

/* Old version -> Used callbacks, new version uses a defined object
obs$.subscribe(
    value => console.log("next: ", value),
    err => console.log(err),
    () => console.log("Finished")
);
*/

/* New version
obs$.subscribe({
    next: console.warn,
    error: console.error,
    complete: () => console.info("Finished")
})
*/

obs$.subscribe(observer);