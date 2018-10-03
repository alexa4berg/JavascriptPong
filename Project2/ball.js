// ball object


class Ball {
    // constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.deltaX = random(3, 7);
        this.deltaY = random(5, 20);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
        this.size = 50;
    }

    //move function allowing movement of the Ball object
    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size)
    }

    wrap() {
        if (this.x > width + this.size / 2) { //check right edge
            this.x = -this.size / 2;
        }
        if (this.y > height + this.size / 2) { //check bottom edge
            this.y = -this.size / 2 + random(-15, 15);
        }

        if (this.x < -this.size / 2) { //check left edge
            this.x = width + this.size / 2;
        }

        if (this.y < -this.size / 2) { //check top edge
            this.y = height + this.size / 2;
        }
    }

    bounce() {
        if (this.x > width - this.size / 2) { //check right edge
            this.deltaX = this.deltaX * -1;
            this.x = width - this.size / 2; //to stop jiggling
        }
        //        if (this.y > height - this.size / 2) { //check bottom edge
        //            this.deltaY = this.deltaY * -1;
        //            this.y = height - this.size / 2;
        //        }

        if (this.x < this.size / 2) { //check left edge
            this.deltaX = this.deltaX * -1;
            this.x = this.size / 2;
        }

        if (this.y < this.size / 2) { //check top edge
            this.deltaY = this.deltaY * -1;
            this.y = this.size / 2;
        }
    }




}
