import {Observable, of} from "rxjs";

export class Of {
    excecute()
    {
        const obs$: Observable<number> = of<number[]>(1,2,3,4,5,6);


        console.log("Observable start")
        obs$.subscribe({
            next: (value: number) => console.log("next", value),
            complete: () => console.log("Secuencia terminada")
        });
        console.log("Observable end")

    }
}