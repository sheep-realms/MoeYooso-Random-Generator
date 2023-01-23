class MoeGirl {
    constructor() {
        this.moeyooso = {};
        this.moeyoosoList = [];
        this.dbMoeyooso = JSON.parse(JSON.stringify(moeyooso));
    }

    weightedRandom(options) {
        var i;
    
        var weights = [];
    
        for (i = 0; i < options.length; i++)
            weights[i] = options[i].weight + (weights[i - 1] || 0);
        
        var random = Math.random() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;

        options[i]['oldWeight'] = options[i].weight;
        options[i].weight = 0;
        
        return options[i];
    }

    weightedRandomLoop(options, min = 1, max = 3, outputMin = 1) {
        let r = ((Math.random() * (max - min)) + min).toFixed(0);
        if (r < outputMin) r = outputMin;
        let values = [];
        for (let i = 0; i < r; i++) {
            let wr = weightedRandom(options);
            if (values.indexOf(wr) == -1) {
                values.push(wr);
            } else {
                i--;
            }
        }
        return values;
    }

    /**
     * 添加要素
     * @param {String|Array<String>} Yooso 要素名称或要素列表
     * @param {String} [path] 地址
     * @param {String} [action=replace] 方法
     */
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

        // if (path == 'personality.superficial') debugger

        let pushed = false;

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
                        pushed = true;
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
        } else if (action == 'push' && !pushed) {
            obj.push(Yooso);
        }
    }

    /**
     * 随机要素
     * @param {Array<Object>} options 要素列表
     * @param {String} [path] 地址
     * @param {String} [action=replace] 方法
     */
    randomYooso(options, path, action = 'replace') {
        let rt = this.weightedRandom(options);
        this.addYooso(rt.name, path, action);
        if (rt?.wm) {
            if (rt.wm?.change) {
                rt.wm.change.forEach(emt => {
                    let pathList = emt.path.split('.');
                    let obj = this.dbMoeyooso;

                    pathList.forEach(function (e) {
                        obj = obj[e];
                    });

                    let dyi = obj.findIndex(function(obj2) {
                        return obj2.name == emt.name;
                    });

                    if (!obj[dyi]?.weight) return;
                    obj[dyi].weight += emt.value;
                    if (obj[dyi].weight <= 0) {
                        obj[dyi].weight = 0;
                    }
                });
            }
        }
    }

    /**
     * 多次随机要素
     * @param {Array<Object>} options 要素列表
     * @param {String} [path] 地址
     * @param {Number} [min=1] 随机次数决定下限
     * @param {Number} [max=3] 随机次数决定上限
     * @param {Number} [outputMin=1] 最小随机次数
     */
    randomYoosoLoop(options, path, min = 1, max = 3, outputMin = 1) {
        let r = ((Math.random() * (max - min)) + min).toFixed(0);
            if (r < outputMin) r = outputMin;
            for (let i = 0; i < r; i++) {
                this.randomYooso(options, path, 'push');
            }
    }

    /**
     * 生成
     * @return {Object} 萌要素数据
     */
    spawn() {
        this.moeyooso = {};
        this.moeyoosoList = [];
        this.dbMoeyooso = JSON.parse(JSON.stringify(moeyooso));

        let h = (Math.random() * 9).toFixed(0) - 4;
        let height = Number(this.weightedRandom(this.dbMoeyooso.physique.height).name);
        height += Number(h);
        this.addYooso(String(height) + 'cm', 'physique.height');
        this.randomYooso(this.dbMoeyooso.appearance.hairColor, 'appearance.hairColor');
        this.randomYooso(this.dbMoeyooso.appearance.eyeColor, 'appearance.eyeColor');
        this.randomYooso(this.dbMoeyooso.appearance.hairstyleBack, 'appearance.hairstyleBack');
        this.randomYooso(this.dbMoeyooso.appearance.hairstyleFront, 'appearance.hairstyleFront');
        this.randomYooso(this.dbMoeyooso.appearance.earsType, 'appearance.earsType');
        this.randomYooso(this.dbMoeyooso.appearance.brassiereCup, 'appearance.brassiereCup');
        this.randomYooso(this.dbMoeyooso.appearance.skinColor, 'appearance.skinColor');
        this.randomYooso(this.dbMoeyooso.costume.suit, 'costume.suit');
        this.randomYooso(this.dbMoeyooso.costume.underwear, 'costume.underwear');
        this.randomYooso(this.dbMoeyooso.costume.underpants, 'costume.underpants');
        this.randomYooso(this.dbMoeyooso.costume.swimsuit, 'costume.swimsuit');
        this.randomYooso(this.dbMoeyooso.costume.hat, 'costume.hat');
        this.randomYooso(this.dbMoeyooso.costume.eyeglass, 'costume.eyeglass');
        this.randomYooso(this.dbMoeyooso.costume.socks, 'costume.socks');
        this.randomYooso(this.dbMoeyooso.costume.shoes, 'costume.shoes');
        this.randomYooso(this.dbMoeyooso.costume.hairOrnaments, 'costume.hairOrnaments');
        this.randomYooso(this.dbMoeyooso.costume.faceOrnaments, 'costume.faceOrnaments');
        this.randomYooso(this.dbMoeyooso.costume.neckOrnaments, 'costume.neckOrnaments');
        this.randomYooso(this.dbMoeyooso.costume.shoulderOrnaments, 'costume.shoulderOrnaments');
        this.randomYooso(this.dbMoeyooso.costume.armOrnaments, 'costume.armOrnaments');
        this.randomYoosoLoop(this.dbMoeyooso.personality.superficial, 'personality.superficial');
        this.randomYoosoLoop(this.dbMoeyooso.personality.deep, 'personality.deep');

        return this.moeyooso;
    }
}