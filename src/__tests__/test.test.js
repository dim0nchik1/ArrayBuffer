import {Magician} from "../js/app";
import {Daemon} from "../js/app";
import {ArrayBufferConverter} from "../js/ArrayBuffer";
import {getBuffer} from "../js/ArrayBuffer";

test("Magician basic attack on distance 1",() => {
    const magician = new Magician(100);
    expect(magician.getAttack(1)).toBe(100);

})

test("Magician with stoned effect on distance 2",() => {
    const magician = new Magician(100);
    magician.setStoned(true)
    expect(magician.getAttack(2)).toBe(85);

})

test("Magician with stoned effect on distance 3",() => {
    const magician = new Magician(100);
    expect(magician.getAttack(3)).toBe(80);
})

test("Daemon basic attack on distance 4",() => {
    const daemon = new Daemon(100);
    expect(daemon.getAttack(4)).toBe(70);
})

test("Daemon with stoned effect on distance 5",() => {
    const daemon = new Daemon(100);
    daemon.setStoned(true)
    expect(daemon.getAttack(5)).toBe(48);
})
test("Daemon with stoned effect on distance 6",() => {
    const daemon = new Daemon(100);
    expect(daemon.getAttack(6)).toBe(0);
})

//Тесты ArrayBuffer
test("should load a valid ArrayBuffer", () => {
    const converter = new ArrayBufferConverter();
    const buffer = new getBuffer()
    converter.load(buffer);

    expect(converter.buffer).toBe(buffer)
})

test('should convert loaded ArrayBuffer to string', () => {
    const converter = new ArrayBufferConverter();
    const buffer = new getBuffer()
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('should throw TypeError when loading invalid buffer', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.load('invalid')).toThrow(TypeError);
})

test('should throw Error when toString called without loading buffer', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow(Error);
});