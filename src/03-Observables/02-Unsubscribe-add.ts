import { Observable, Observer, Subscriber, Subscription } from "rxjs";

const observer: Observer<any> = {
    next: value => {
        console.log("Next",value)
    },
    error: console.warn,
    complete: () => console.log("Finished")
}

const interval$ = new Observable<number>((subscriber: Subscriber<number>) => {
    let counter: number = 0;
    const interval = setInterval(() => {
        counter++;
        console.log(counter)
        subscriber.next(counter);
    }, 1000);

    setInterval(() => 
    {
        subscriber.complete();
    }, 2500)

    //Function executed on unsubscribe -> Cleaner function
    return () => {
        clearInterval(interval)
    }
});


const counterSubscription0: Subscription = interval$.subscribe(observer);
const counterSubscription1: Subscription = interval$.subscribe(observer);
const counterSubscription2: Subscription = interval$.subscribe(observer);

const generalSubscription = new Subscription()
generalSubscription.add(counterSubscription0)
generalSubscription.add(counterSubscription1)
generalSubscription.add(counterSubscription2)

//Supposed to be chained but seems to work equal
//counterSubscription0.add(counterSubscription1).add(counterSubscription2)
//counterSubscription0.add(counterSubscription1);
//counterSubscription1.add(counterSubscription2);

setTimeout(generalSubscription.unsubscribe, 5000)