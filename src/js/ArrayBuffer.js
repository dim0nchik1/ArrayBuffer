export class ArrayBufferConverter {
    constructor() {
        this.buffer = null;
    }
    load(buffer){
        if (!(buffer instanceof ArrayBuffer)) {
            throw new TypeError('Expected an instance of ArrayBuffer');
        }
        this.buffer = buffer;
    }
    toString() {
        if (!this.buffer) {
            throw new Error('Buffer has not been loaded');
        }

        const uint16Array = new Uint16Array(this.buffer);
        let str = '';
        for (let i = 0; i < uint16Array.length; i++) {
            str += String.fromCharCode(uint16Array[i]);
        }
        return str;
    }
}


export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}