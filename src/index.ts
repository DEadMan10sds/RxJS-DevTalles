import { Observable, Observer, Subject, Subscriber, Subscription } from "rxjs";

const observer: Observer<any> = {
    next: value => {
        console.log("Next",value)
    },
    error: console.warn,
    complete: () => console.log("Finished")
}


const interval$ = new Observable<number>((subscriber: Subscriber<number>) => {
    const randomNumber = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(randomNumber)
    }
});

//const sub1 = interval$.subscribe(console.log);
//const sub2 = interval$.subscribe(console.log);

/**
 * 1.- Multiple casting -> sends same value to all subscribers
 * 2.- Is an observer
 * 3.- Can handle: next, error, complete
 */
const subject$ = new Subject();
interval$.subscribe(subject$)

const sub1 = subject$.subscribe(console.log);
const sub2 = subject$.subscribe(console.log);


setTimeout(() => {
    
}, 3500)