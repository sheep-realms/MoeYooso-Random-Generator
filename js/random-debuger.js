class RandomDebuger {
    constructor() {
        this.stat = [];
    }

    add(value) {
        let i = this.stat.findIndex(function(e) {return e.name == value});
        if (i == -1) {
            this.stat.push({
                name: value,
                count: 1
            });
        } else {
            this.stat[i].count++;
        }
    }

    clear() {
        this.stat = [];
    }

    print() {
        console.table(this.stat);
    }

    auto(randomFunction = function() {}, items = [], limit = 100) {
        this.clear();
        for (let i = 0; i < limit; i++) {
            this.add(randomFunction(items));
        }
        this.print();
    }
}