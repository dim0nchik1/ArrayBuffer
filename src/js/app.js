class Character {
    constructor(baseAttack) {
        this.baseAttack = baseAttack;
        this.stoned = false;
    }

    setStoned(stoned) {
        this.stoned = stoned;
    }

    getAttack(distance) {
        let damage = this.baseAttack;
        if (distance === 1) {
            damage *= 1;
        } else if (distance === 2) {
            damage *= 0.9;
        } else if (distance === 3) {
            damage *= 0.8;
        } else if (distance === 4) {
            damage *= 0.7;
        } else if (distance === 5) {
            damage *= 0.6;
        } else {
            damage = 0;
        }
        if (this.stoned) {
            damage -= Math.log2(distance) * 5;
        }
        return Math.max(0,Math.round(damage));
    }
}




export class Magician extends Character {
    constructor(baseAttack) {
        super(baseAttack);
    }
}

export  class Daemon extends Character {
    constructor(baseAttack) {
        super(baseAttack);
    }
}