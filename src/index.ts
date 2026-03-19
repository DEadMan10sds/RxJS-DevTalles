import { Of } from "./04-ObservableCreation/of";
import { Range } from "./04-ObservableCreation/range";
import { MapOperator } from "./05-Operators/MapOperator";
import { FromAndOf } from "./04-ObservableCreation/FromAndOf";
import { FromEvent } from "./04-ObservableCreation/fromEvent";
import { IntervalAndTimer } from "./04-ObservableCreation/IntervalAndTimer";
import { AsyncSchedulerClass } from "./04-ObservableCreation/AsyncScheduler";
import { Pluck } from "./05-Operators/Pluck";
import { MapTo } from "./05-Operators/MapTo";
import { FilterOperator } from "./05-Operators/Filter";
import { Tap } from "./05-Operators/Tap";

//Dummy class to handle multiple lessons
class MainProgram extends Tap{}
const mainProgram = new MainProgram();


mainProgram.excecute()