export function read(file) {
    return new Promise(resolve => {
        const read = new FileReader();
        // const weak = new WeakMap();
        read.onload = e => {
            resolve(e.target.result)
        };
        read.readAsArrayBuffer(file[0]);
    });
}
