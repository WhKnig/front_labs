interface Point {
    x: number;
    y: number;
}

function distance(x1: number, y1: number, x2: number, y2: number): number;
function distance(p1: Point, p2: Point): number;

function distance(arg1: number | Point, arg2: number | Point, arg3?: number, arg4?: number): number {
    if (typeof arg1 === 'number' && typeof arg2 === 'number' && typeof arg3 === 'number' && typeof arg4 === 'number') {
        // distance(x1, y1, x2, y2)
        const dx = arg1 - arg3;
        const dy = arg2 - arg4;
        return Math.sqrt(dx * dx + dy * dy);
    } else if (typeof arg1 === 'object' && typeof arg2 === 'object') {
        // distance(p1, p2)
        const dx = arg1.x - arg2.x;
        const dy = arg1.y - arg2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    throw new Error('Invalid arguments');
}

export { distance, Point };
