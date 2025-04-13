function brickWallPattern(H, W) {
    let pattern = "";

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < 2 * W; j++) {
            if ((i + j) % 2 == 0) {
                pattern += "[]";
            } else pattern += "  ";
        }
        pattern += "\n"; // Moving to new line after filling the row
    }
    console.log(pattern);
}

brickWallPattern(4, 5);