export class NumberValue {
    constructor(value: string|number);

    toJSON(): number;

    toNumber(): number;

    toString(): string;
}