import {Service} from '../service';
import {Presigner} from '../polly/presigner';
export class PollyCustomizations extends Service {
    static Presigner: typeof Presigner;
}