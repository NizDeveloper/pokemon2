const screen = document.querySelector("#screen");
document.addEventListener("load", Start());

/*
 * Redered game objects library
 */
import * as draw from "./draw.js";

/*
 * Game objects functions library
 */
import Player from "./player.js";

const fps = 30;
setInterval(() => {
  Update();
}, fps);

function Start() {
  if (screen.getContext) {
    const ctx = screen.getContext("2d");
    draw.display(ctx);

    Player.Start();
  }
}

function Update() {
  Player.Update();
}
