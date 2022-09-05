import { Heart } from "../classes/heart";
import { Location } from "../classes/location";

export class HeartCoordinator {
    private hearts: Heart[] = []

    public addHeart(x: number, y: number): void {
        const location = new Location(x, y);
        this.hearts.push(new Heart(location));
    }

    public beat(): void {
        this.hearts = this.hearts.filter(heart => heart.beat());
    }

    public draw(drawingFunction: Function): void {
        this.hearts.forEach(duck => drawingFunction(duck));
    }
}