export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    let ceiling = jump;

    do {
        if (breaks[ceiling]) {
            break;
        }
        ceiling += jump;
    } while (ceiling < breaks.length);

    if (ceiling > breaks.length) return -1;

    for (let i = 0; i < ceiling; i++) {
        if (breaks[i]) return i;
    }

    return ceiling;
}
