import {sayHello} from "../src/say-hello";

describe('sayHello', function(): void {
    it('should return hello pocky', function() : void {
        expect(sayHello('pocky')).toBe('Hello pocky');
    });
});