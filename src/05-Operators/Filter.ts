import { filter, from, fromEvent, map, range } from "rxjs";

interface Character {
    tipo: string,
    nombre: string
}

export class FilterOperator {
    excecute(){
        range(1, 10).pipe(
            filter(
                (value: number): boolean => 
                    (value % 2 === 1)
            )
        ).subscribe(console.log);

        const personajes: Character[] = [
            {
                tipo: "Heroe",
                nombre: "Batman"
            },
            {
                tipo: "Heroe",
                nombre: "Robin"
            },
            {
                tipo: "Villano",
                nombre: "Joker"
            },
        ];

        from<Character[]>(personajes).pipe(filter((personaje: Character): boolean => personaje.tipo === "Villano")).subscribe(console.log);


        fromEvent<KeyboardEvent>(document, "keyup")
        .pipe(
            map((event: KeyboardEvent): string => event.code),
            filter((keyCode: string): boolean => keyCode === "Enter")
        ).subscribe(console.log);

    }
}