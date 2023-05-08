import { Point } from "./point.js";

export class Wave {
  constructor() {
    this.totalPoints = 6;
    this.totalSegments = this.totalPoints - 1;
    this.color = "#ff0000";
    this.points = [];
    this.segmentWidth = 0;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.init();
  }

  init() {
    this.point = new Point(this.centerX, this.centerY);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";

    this.point.update();

    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    ctx.fill();
  }
}
