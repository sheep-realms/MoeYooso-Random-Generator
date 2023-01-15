class MoeGirl {
    constructor() {
        this.moeyooso = {};
        this.moeyoosoList = [];
    }

    addYooso(Yooso = '', path = '', action = 'replace') {
        if (Yooso == '') return;

        if (Yooso != '_none_') {
            if (typeof Yooso == 'string') {
                this.moeyoosoList.push(Yooso);
            } else {
                this.moeyoosoList.push(...Yooso);
            }
        };
        let pathList = path.split('.');
        let obj = this.moeyooso;

        pathList.forEach(function (e, i) {
            if (obj[e] == undefined) {
                if (i + 1 >= pathList.length) {
                    if (action == 'replace') {
                        if (typeof Yooso == 'object') {
                            obj[e] = [...Yooso];
                        } else {
                            obj[e] = Yooso;
                        }
                    } else if (action == 'push') {
                        obj[e] = [Yooso];
                    }
                    return;
                } else {
                    obj[e] = {};
                }
            };

            obj = obj[e];
        });

        if (action == 'replace') {
            if (typeof Yooso == 'object') {
                obj = [...Yooso];
            } else {
                obj = Yooso;
            }
        } else if (action == 'push') {
            obj.push(Yooso);
        }
    }

    spawn(randomFunction = weightedRandom, randomLoopFunction = weightedRandomLoop) {
        this.moeyooso = {};
        this.moeyoosoList = [];

        let h = (Math.random() * 9).toFixed(0) - 4;
        let height = Number(randomFunction(moeyooso.physique.height));
        height += Number(h);
        this.addYooso(String(height) + 'cm', 'physique.height');
        this.addYooso(randomFunction(moeyooso.appearance.hairColor), 'appearance.hairColor');
        this.addYooso(randomFunction(moeyooso.appearance.eyeColor), 'appearance.eyeColor');
        this.addYooso(randomFunction(moeyooso.appearance.hairstyleBack), 'appearance.hairstyleBack');
        this.addYooso(randomFunction(moeyooso.appearance.hairstyleFront), 'appearance.hairstyleFront');
        this.addYooso(randomFunction(moeyooso.appearance.earsType), 'appearance.earsType');
        this.addYooso(randomFunction(moeyooso.appearance.brassiereCup), 'appearance.brassiereCup');
        this.addYooso(randomFunction(moeyooso.appearance.skinColor), 'appearance.skinColor');
        this.addYooso(randomFunction(moeyooso.costume.suit), 'costume.suit');
        this.addYooso(randomFunction(moeyooso.costume.underwear), 'costume.underwear');
        this.addYooso(randomFunction(moeyooso.costume.underpants), 'costume.underpants');
        this.addYooso(randomFunction(moeyooso.costume.swimsuit), 'costume.swimsuit');
        this.addYooso(randomFunction(moeyooso.costume.hat), 'costume.hat');
        this.addYooso(randomFunction(moeyooso.costume.eyeglass), 'costume.eyeglass');
        this.addYooso(randomFunction(moeyooso.costume.socks), 'costume.socks');
        this.addYooso(randomFunction(moeyooso.costume.shoes), 'costume.shoes');
        this.addYooso(randomFunction(moeyooso.costume.hairOrnaments), 'costume.hairOrnaments');
        this.addYooso(randomFunction(moeyooso.costume.faceOrnaments), 'costume.faceOrnaments');
        this.addYooso(randomFunction(moeyooso.costume.neckOrnaments), 'costume.neckOrnaments');
        this.addYooso(randomFunction(moeyooso.costume.shoulderOrnaments), 'costume.shoulderOrnaments');
        this.addYooso(randomFunction(moeyooso.costume.armOrnaments), 'costume.armOrnaments');
        this.addYooso(randomLoopFunction(moeyooso.personality.superficial), 'personality.superficial');
        this.addYooso(randomFunction(moeyooso.personality.deep), 'personality.deep');

        return this.moeyooso;
    }
}