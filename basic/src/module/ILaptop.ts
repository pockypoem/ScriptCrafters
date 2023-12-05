export default interface ILaptop <T> {
    name: string;
    type: T; // tergantung input use, kalau string ya string, kalau number ya number
    withNumeric : boolean;
    withTouchButton : boolean;
}