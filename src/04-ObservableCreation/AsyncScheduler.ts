import { asyncScheduler } from "rxjs";

//generates the ".subscribe()" of a function
//asyncScheduler.schedule(functionToRun, timeout, initialParamsIfAreRequiredForTheFuncion)
//the state (3rd parameter) it's just 1 thing
export class AsyncSchedulerClass {
    excecute(){
        
        //FOR TIMEOUT BEHAVIOUR
        const sayHi = (value) => console.log("Hello there", value);
        asyncScheduler.schedule(sayHi, 1000, 10);


        //FOR INTERVAL BEHAVIOUR
        const subscription = asyncScheduler.schedule(function(state){
            console.log("state", state)
            //To ensure interval behaviour -> do recursive call
            this.schedule(++state, 1500)
        }, 1500, 0);

        /*
        setTimeout(() => {
            subscription.unsubscribe();
        }, 10000)
        */
       asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
    }
}