function player(ctx) {
  ctx.fillStyle = "#000";
  ctx.fillRect(5, 5, 10, 10);
}

function wall(ctx) {}

export function display(ctx) {
  player(ctx);
}
