const moeyooso = {
    physique: {
        height: [
            {name: '50',                weight: 0.0001},
            {name: '60',                weight: 0.0002},
            {name: '70',                weight: 0.0015},
            {name: '80',                weight: 0.0125},
            {name: '90',                weight: 0.015},
            {name: '100',               weight: 0.05},
            {name: '110',               weight: 0.15},
            {name: '120',               weight: 0.25},
            {name: '130',               weight: 0.5},
            {name: '140',               weight: 0.75},
            {name: '150',               weight: 1},
            {name: '160',               weight: 1.25},
            {name: '170',               weight: 1.25},
            {name: '180',               weight: 0.5},
            {name: '190',               weight: 0.05},
            {name: '200',               weight: 0.0015},
            {name: '210',               weight: 0.0005},
            {name: '220',               weight: 0.0002},
            {name: '230',               weight: 0.0001}
        ]
    },
    appearance: {
        hairColor: [
            {
                name: '黑发',
                weight: 1.5,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '黑瞳',
                            value: 0.15
                        }, {
                            path: 'appearance.eyeColor',
                            name: '棕瞳/褐瞳',
                            value: 7.5
                        }
                    ]
                }
            },
            {
                name: '红发/赤发',
                weight: 1,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '红瞳/赤瞳',
                            value: 10
                        }
                    ]
                }
            },
            {
                name: '橙发',
                weight: 0.75,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '橙瞳',
                            value: 10
                        }
                    ]
                }
            },
            {
                name: '金发/黄发',
                weight: 2,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '金瞳/黄瞳',
                            value: 10
                        }, {
                            path: 'appearance.hairstyleBack',
                            name: '双马尾',
                            value: 3.5
                        }, {
                            path: 'personality.superficial',
                            name: '傲娇',
                            value: 5
                        }
                    ]
                }
            },
            {
                name: '绿发',
                weight: 1,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '绿瞳',
                            value: 10
                        }
                    ]
                }
            },
            {
                name: '蓝发/青发',
                weight: 1,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '蓝瞳/青瞳',
                            value: 10
                        }
                    ]
                }
            },
            {
                name: '紫发',
                weight: 0.75,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '紫瞳',
                            value: 15
                        }
                    ]
                }
            },
            {
                name: '粉发',
                weight: 2,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '粉瞳',
                            value: 12.5
                        }, {
                            path: 'personality.deep',
                            name: '腹黑',
                            value: 5
                        }
                    ]
                }
            },
            {
                name: '棕发/褐发',
                weight: 1.5,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '棕瞳/褐瞳',
                            value: 10
                        }, {
                            path: 'appearance.eyeColor',
                            name: '橙瞳',
                            value: 5
                        }, {
                            path: 'appearance.eyeColor',
                            name: '金瞳/黄瞳',
                            value: 5
                        }
                    ]
                }
            },
            {
                name: '银发/灰发/白发',
                weight: 2,
                wm: {
                    change: [
                        {
                            path: 'appearance.eyeColor',
                            name: '灰瞳/银瞳',
                            value: 7.5
                        }, {
                            path: 'personality.superficial',
                            name: '三无',
                            value: 3
                        }, {
                            path: 'personality.superficial',
                            name: '无口',
                            value: 5
                        }, {
                            path: 'personality.superficial',
                            name: '文静',
                            value: 3
                        }, {
                            path: 'personality.deep',
                            name: '闷骚',
                            value: 3
                        }, {
                            path: 'personality.deep',
                            name: '无节操',
                            value: 2
                        }, {
                            path: 'personality.deep',
                            name: '单纯',
                            value: 5
                        }
                    ]
                }
            },
            {name: '双色发',            weight: 0.25},
            {name: '多色发',            weight: 0.125}
        ],
        eyeColor: [
            {name: '黑瞳',              weight: 0.25},
            {name: '红瞳/赤瞳',         weight: 1.25},
            {name: '橙瞳',              weight: 1},
            {name: '金瞳/黄瞳',         weight: 2},
            {name: '绿瞳',              weight: 1.5},
            {name: '蓝瞳/青瞳',         weight: 1.5},
            {name: '紫瞳',              weight: 1},
            {name: '粉瞳',              weight: 2},
            {name: '棕瞳/褐瞳',         weight: 1.5},
            {name: '灰瞳/银瞳',         weight: 0.5},
            {name: '白瞳',              weight: 0.125},
            {name: '异色瞳',            weight: 0.125},
            {name: '多色瞳',            weight: 0.015}
        ],
        hairstyleBack: [
            {name: '散发',              weight: 2},
            {name: '马尾',              weight: 5},
            {name: '高马尾',            weight: 3},
            {name: '低马尾',            weight: 2},
            {name: '侧单马尾',          weight: 1},
            {name: '半马尾',            weight: 1},
            {name: '双马尾',            weight: 5},
            {name: '下双马尾',          weight: 0.5},
            {name: '双螺旋',            weight: 0.5},
            {name: '披肩双马尾',        weight: 0.5},
            {name: '多马尾',            weight: 0.125},
            {name: '麻花辫',            weight: 0.25},
            {name: '公主辫',            weight: 0.5},
            {name: '朝天辫',            weight: 1},
            {name: '脏辫',              weight: 0.125},
            {name: '丸子头',            weight: 1},
            {name: '盘发',              weight: 1},
            {name: '尾扎长发',          weight: 0.5},
            {name: 'Half-up',           weight: 0.5},
            {name: '王冠编发',          weight: 0.25},
            {name: '翻翘',              weight: 0.5},
            {name: '耳状发',            weight: 0.25}
        ],
        hairstyleFront: [
            {name: '遮眼发',            weight: 2},
            {name: '齐刘海',            weight: 3},
            {name: '短刘海',            weight: 5},
            {name: '长刘海',            weight: 3},
            {name: '刘海尾',            weight: 1},
            {name: '高额头',            weight: 2},
            {name: '进气口发型',        weight: 2},
            {name: '上梳刘海',          weight: 0.5},
            {name: '龙须刘海',          weight: 0.5},
            {name: 'M型刘海',           weight: 10},
            {name: '中分',              weight: 0.5},
            {name: '美人尖',            weight: 2},
            {name: '长鬓角',            weight: 1}
        ],
        earsType: [
            {name: '人耳',              weight: 10},
            {name: '猫耳',              weight: 5},
            {name: '狐耳',              weight: 3},
            {name: '犬耳',              weight: 2},
            {name: '兔耳',              weight: 2.5},
            {name: '兽耳',              weight: 2},
            {name: '熊耳',              weight: 1},
            {name: '尖耳朵',            weight: 1},
            {name: '机械耳',            weight: 0.25},
            {name: '翅膀型耳朵',        weight: 0.0005},
            {name: '鳍型耳朵',          weight: 0.0002},
            {name: '无耳',              weight: 0.0001}
        ],
        brassiereCup: [
            {name: '绝壁',              weight: 0.25},
            {name: 'AA Cup',            weight: 1},
            {name: 'A Cup',             weight: 1.5},
            {name: 'B Cup',             weight: 2},
            {name: 'C Cup',             weight: 1.25},
            {name: 'D Cup',             weight: 0.75},
            {name: 'E Cup',             weight: 0.25},
            {name: 'F Cup',             weight: 0.125},
            {name: 'G Cup',             weight: 0.0015},
            {name: 'H Cup',             weight: 0.0002},
            {name: 'I Cup',             weight: 0.00001}
        ],
        skinColor: [
            {name: '浅色皮肤',          weight: 1},
            {name: '褐色皮肤',          weight: 0.125},
            {name: '黑色皮肤',          weight: 0.0125},
            {name: '异色皮肤',          weight: 0.0005}
        ]
    },
    costume: {
        suit: [
            {name: '常服',              weight: 5},
            {name: '制服',              weight: 0.75},
            {name: '校服',              weight: 0.15},
            {name: '水手服',            weight: 1},
            {name: '短袖水手服',        weight: 2},
            {name: '长袖水手服',        weight: 2},
            {name: '无袖水手服',        weight: 0.15},
            {name: '运动服',            weight: 1},
            {name: '体操服',            weight: 0.15},
            {name: '巫女服',            weight: 1},
            {name: '和服',              weight: 1},
            {name: '汉服',              weight: 1},
            {name: '旗袍',              weight: 1},
            {name: '中山装',            weight: 0.0005},
            {name: '晚礼服',            weight: 0.125},
            {name: '圣诞服',            weight: 0.125},
            {name: '洛丽塔装',          weight: 1},
            {name: '花魁服',            weight: 0.0005},
            {name: '军服',              weight: 0.125},
            {name: '警服',              weight: 0.125},
            {name: '婚纱',              weight: 0.75},
            {name: '连衣裙',            weight: 1},
            {name: '无袖连衣裙',        weight: 1},
            {name: '背带裙',            weight: 1},
            {name: '背带裤',            weight: 1},
            {name: '睡衣',              weight: 0.75},
            {name: '女仆装',            weight: 1},
            {name: '护士服',            weight: 1},
            {name: '布偶装',            weight: 0.125},
            {name: '南瓜装',            weight: 0.125},
            {name: '青蛙装',            weight: 0.125},
            {name: '宇航服',            weight: 0.125},
            {name: '紧身衣',            weight: 0.15},
            {name: '实验服',            weight: 0.75},
            {name: '西装',              weight: 1},
            {name: '露脐装',            weight: 0.75},
            {name: '盔甲',              weight: 0.15}
        ],
        underwear: [
            {name: '不穿内衣',          weight: 2},
            {name: '胸罩',              weight: 10},
            {name: '创可贴',            weight: 0.25},
            {name: '缠胸布',            weight: 1},
            {name: '抹胸',              weight: 2},
            {name: '乳贴',              weight: 1}
        ],
        underpants: [
            {name: '三角裤',            weight: 1},
            {name: '四角裤',            weight: 1},
            {name: '灯笼裤',            weight: 0.5},
            {name: '打底裤',            weight: 0.25},
            {name: '兜裆布',            weight: 0.15},
            {name: '纸尿裤',            weight: 0.0005},
            {name: '丁字裤',            weight: 0.0005},
            {name: '条纹胖次',          weight: 1},
            {name: '点阵胖次',          weight: 0.5},
            {name: '草莓胖次',          weight: 0.0125},
            {name: '小熊胖次',          weight: 0.0125},
            {name: '蕾丝胖次',          weight: 0.15},
            {name: '系带胖次',          weight: 0.25},
            {name: '长系带胖次',        weight: 0.15},
            {name: '白色胖次',          weight: 1},
            {name: '蓝白胖次',          weight: 0.75},
            {name: '粉白胖次',          weight: 0.5},
            {name: 'C型胖次',           weight: 0.05},
            {name: '不穿胖次',          weight: 0.05}
        ],
        swimsuit: [
            {name: '连体泳装',          weight: 1},
            {name: '比基尼',            weight: 0.25},
            {name: '死库水',            weight: 1.25},
            {name: '吊带泳装',          weight: 0.15},
            {name: '短袖泳装',          weight: 0.5},
            {name: '分体泳装',          weight: 1}
        ],
        hat: [
            {name: '_none_',            weight: 50},
            {name: '鸭舌帽',            weight: 10},
            {name: '毛线帽',            weight: 5},
            {name: '礼帽',              weight: 1},
            {name: '遮阳帽',            weight: 5},
            {name: '斗笠',              weight: 2},
            {name: '王冠',              weight: 1},
            {name: '贝雷帽',            weight: 1},
            {name: '船形帽',            weight: 1},
            {name: '大檐帽',            weight: 1},
            {name: '草帽',              weight: 2},
            {name: '骑行头盔',          weight: 1},
            {name: '安全帽',            weight: 1},
            {name: '牛仔帽',            weight: 1},
            {name: '哥萨克帽',          weight: 1},
            {name: '解放帽',            weight: 1},
            {name: '魔法帽',            weight: 5},
            {name: '博耐特帽',          weight: 1},
            {name: '头套',              weight: 1},
            {name: '天冠',              weight: 1},
            {name: '内裤（帽子）',      weight: 0.0125}
        ],
        eyeglass: [
            {name: '_none_',           weight: 50},
            {name: '眼镜',              weight: 20},
            {name: '圈圈眼镜',          weight: 4},
            {name: '夹鼻眼镜',          weight: 1},
            {name: '单片眼镜',          weight: 2},
            {name: '墨镜',              weight: 4},
            {name: '护目镜',            weight: 1},
            {name: '泳镜',              weight: 0.15},
            {name: '平光眼镜',          weight: 1},
            {name: '无镜片眼镜',        weight: 1},
            {name: '平视显示器',        weight: 0.15}
        ],
        socks: [
            {name: '无袜',              weight: 0.15},
            {name: '船袜',              weight: 0.5},
            {name: '短袜',              weight: 1},
            {name: '蕾丝花边短袜',      weight: 0.5},
            {name: '三折袜',            weight: 0.75},
            {name: '四分之三袜',        weight: 1},
            {name: '及膝袜',            weight: 1},
            {name: '过膝袜',            weight: 1},
            {name: '长筒袜',            weight: 1},
            {name: '加长长筒袜',        weight: 0.0125},
            {name: '连裤袜',            weight: 1},
            {name: '吊带袜',            weight: 0.5},
            {name: '泡泡袜',            weight: 0.75},
            {name: '网袜',              weight: 0.15},
            {name: '连体袜',            weight: 0.0125},
            {name: '宽口袜',            weight: 0.15},
            {name: '踩脚袜',            weight: 0.15},
            {name: '鸳鸯袜',            weight: 0.15},
            {name: '长短袜',            weight: 0.15},
            {name: '假膝上袜',          weight: 0.5},
            {name: '日式短布袜',        weight: 0.15},
            {name: '日式过膝布袜',      weight: 0.15},
            {name: '单腿袜',            weight: 0.15}
        ],
        shoes: [
            {name: '无鞋',              weight: 0.0125},
            {name: '室内鞋',            weight: 0.25},
            {name: '玛丽珍鞋',          weight: 1},
            {name: '乐福鞋',            weight: 1.25},
            {name: '高跟鞋',            weight: 0.5},
            {name: '厚底鞋',            weight: 0.25},
            {name: '运动鞋',            weight: 1.25},
            {name: '帆布鞋',            weight: 0.5},
            {name: '舞蹈鞋',            weight: 0.0125},
            {name: '轮滑鞋',            weight: 0.0125},
            {name: '翘头鞋',            weight: 0.0125},
            {name: '露趾鞋',            weight: 0.0125},
            {name: '拖鞋',              weight: 0.5},
            {name: '凉鞋',              weight: 0.5},
            {name: '皮鞋',              weight: 0.5},
            {name: '木屐',              weight: 0.0125},
            {name: '草履',              weight: 0.0125},
            {name: '布鞋',              weight: 0.0125},
            {name: '短靴',              weight: 0.25},
            {name: '中靴',              weight: 0.25},
            {name: '长靴',              weight: 0.25},
            {name: '过膝靴',            weight: 0.25},
            {name: '雨靴',              weight: 0.25},
            {name: '雪地靴',            weight: 0.25},
            {name: '牛仔靴',            weight: 0.0125}
        ],
        hairOrnaments: [
            {name: '_none_',            weight: 50},
            {name: '发箍',              weight: 10},
            {name: '发卡',              weight: 10},
            {name: '头带',              weight: 1},
            {name: '发带',              weight: 10},
            {name: '头巾',              weight: 1},
            {name: '头纱',              weight: 1},
            {name: '抹额',              weight: 1},
            {name: '耳套',              weight: 2},
            {name: '头戴蝴蝶结',        weight: 5},
            {name: '头戴大蝴蝶结',      weight: 2},
            {name: '头戴金鱼结',        weight: 2},
            {name: '簪',                weight: 1},
            {name: '发珠',              weight: 1},
            {name: '植物发饰',          weight: 0.5},
            {name: '动物发饰',          weight: 0.25},
            {name: '月亮发饰',          weight: 0.5},
            {name: '星星发饰',          weight: 0.5},
            {name: '骷髅发饰',          weight: 0.25},
            {name: '爱心发饰',          weight: 0.5},
            {name: '礼帽发饰',          weight: 0.25}
        ],
        faceOrnaments: [
            {name: '_none_',            weight: 100},
            {name: '面具',              weight: 1},
            {name: '防毒面具',          weight: 1},
            {name: '面罩',              weight: 1},
            {name: '面纱',              weight: 1},
            {name: '花钿',              weight: 1},
            {name: '眼罩',              weight: 1},
            {name: '单眼罩',            weight: 1},
            {name: '口罩',              weight: 5},
            {name: '鼻环',              weight: 1},
            {name: '舌钉',              weight: 1},
            {name: '唇钉',              weight: 1},
            {name: '耳坠',              weight: 10},
            {name: '耳钉',              weight: 1},
            {name: '耳桥',              weight: 1}
        ],
        neckOrnaments: [
            {name: '_none_',            weight: 50},
            {name: '围巾',              weight: 2},
            {name: '项链',              weight: 5},
            {name: '吊坠',              weight: 5},
            {name: '项圈',              weight: 1},
            {name: '伊丽莎白圈',        weight: 0.0125}
        ],
        shoulderOrnaments: [
            {name: '_none_',            weight: 50},
            {name: '披风',              weight: 1},
            {name: '斗篷',              weight: 1},
            {name: '披肩',              weight: 1}
        ],
        armOrnaments: [
            {name: '_none_',            weight: 50},
            {name: '戒指',              weight: 0.5},
            {name: '手铐',              weight: 0.125},
            {name: '手绳',              weight: 2},
            {name: '手环',              weight: 5},
            {name: '手镯',              weight: 1},
            {name: '袖章',              weight: 1},
            {name: '手套',              weight: 1},
            {name: '长手套',            weight: 1},
            {name: '兽爪手套',          weight: 1},
            {name: '中指手套',          weight: 1},
            {name: '护腕',              weight: 1},
            {name: '臂环',              weight: 1},
            {name: '臂钏',              weight: 0.5},
            {name: '发圈（上肢饰品）',  weight: 1},
            {name: '发带（上肢饰品）',  weight: 0.5}
        ]
    },
    personality: {
        superficial: [
            {name: '傲娇',              weight: 1},
            {name: "傲沉",              weight: 0.25},
            {name: "病娇",              weight: 0.5},
            {name: "病切",              weight: 0.25},
            {name: "弱娇",              weight: 0.5},
            {name: "高冷",              weight: 1},
            {name: "凛娇",              weight: 0.5},
            {name: "暴娇",              weight: 0.25},
            {name: "郁娇",              weight: 0.5},
            {name: "慵懒",              weight: 0.5},
            {name: "三无",              weight: 0.25},
            {name: "无口",              weight: 0.5},
            {name: "文静",              weight: 1},
            {name: "率直",              weight: 1},
            {name: "刺头",              weight: 0.25},
            {name: "读空气",            weight: 0.25},
            {name: "无铁炮",            weight: 1},
            {name: "暴力",              weight: 0.25},
            {name: "高傲",              weight: 0.5},
            {name: "笨蛋",              weight: 0.5},
            {name: "天然呆",            weight: 1},
            {name: "天然黑",            weight: 1},
            {name: "天然疯",            weight: 1},
            {name: "天真无邪",          weight: 0.25},
            {name: "认真",              weight: 1},
            {name: "电波",              weight: 0.5},
            {name: "冒失",              weight: 0.5},
            {name: "调皮",              weight: 0.5},
            {name: "工口",              weight: 0.25},
            {name: "毒舌",              weight: 0.25},
            {name: "元气",              weight: 1},
            {name: "强气",              weight: 0.5},
            {name: "狂气",              weight: 0.25},
            {name: "弱气",              weight: 0.5},
            {name: "偏执",              weight: 0.25},
            {name: "怕羞",              weight: 0.5},
            {name: "爱哭",              weight: 0.25},
            {name: "醋缸",              weight: 1},
            {name: "娘炮",              weight: 0.25},
            {name: "好奇",              weight: 1},
            {name: "耿直",              weight: 1},
            {name: "八卦",              weight: 0.25},
            {name: "迟钝",              weight: 0.5},
            {name: "正义",              weight: 1},
            {name: "地雷系",            weight: 0.25},
            {name: "情绪化",            weight: 0.5},
            {name: "自来熟",            weight: 1},
            {name: "怕生",              weight: 0.5},
            {
                name: '阳角',
                weight: 1,
                wm: {
                    change: [
                        {
                            path: 'personality.superficial',
                            name: '阴角',
                            value: -10000
                        }
                    ]
                }
            },
            {
                name: '阴角',
                weight: 1,
                wm: {
                    change: [
                        {
                            path: 'personality.superficial',
                            name: '阳角',
                            value: -10000
                        }
                    ]
                }
            }
        ],
        deep: [
            {
                name: '腹黑',
                weight: 0.5,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '腹白',
                            value: -10000
                        }
                    ]
                }
            },
            {
                name: '腹白',
                weight: 0.25,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '腹黑',
                            value: -10000
                        }
                    ]
                }
            },
            {name: '可靠',              weight: 1},
            {name: '热血',              weight: 1},
            {name: '外柔内刚',          weight: 1},
            {name: '外热内冷',          weight: 1},
            {name: '女王（性格）',      weight: 0.5},
            {name: '戏精',              weight: 0.25},
            {name: '猥琐',              weight: 0.25},
            {name: '不懂爱',            weight: 0.25},
            {name: '多重人格',          weight: 0.25},
            {name: '无节操',            weight: 0.25},
            {name: '少女心',            weight: 1},
            {name: '温柔',              weight: 1},
            {name: '玻璃心',            weight: 0.25},
            {name: '老好人',            weight: 0.5},
            {name: '优柔寡断',          weight: 0.5},
            {
                name: '抖S',
                weight: 0.25,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '抖M',
                            value: -10000
                        }, {
                            path: 'personality.deep',
                            name: 'SM双属性',
                            value: -10000
                        }
                    ]
                }
            },
            {
                name: '抖M',
                weight: 0.25,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '抖S',
                            value: -10000
                        }, {
                            path: 'personality.deep',
                            name: 'SM双属性',
                            value: -10000
                        }
                    ]
                }
            },
            {
                name: 'SM双属性',
                weight: 0.25,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '抖M',
                            value: -10000
                        }, {
                            path: 'personality.deep',
                            name: '抖S',
                            value: -10000
                        }
                    ]
                }
            },
            {name: '小恶魔',            weight: 0.25},
            {name: '贱萌',              weight: 0.25},
            {name: '常识人',            weight: 0.25},
            {name: '别扭',              weight: 0.25},
            {name: '单纯',              weight: 1},
            {name: '孤僻',              weight: 0.5},
            {name: '护短',              weight: 0.5},
            {name: '记仇',              weight: 0.25},
            {name: '逆鳞',              weight: 0.25},
            {name: '黑化',              weight: 0.25},
            {
                name: '闷骚',
                weight: 0.25,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '单纯',
                            value: -10000
                        }
                    ]
                }
            },
            {name: '恋爱脑',            weight: 1},
            {name: '酒品差',            weight: 0.25},
            {name: '反社会人格',        weight: 0.125},
            {name: '恶徳',              weight: 0.25},
            {name: '脱线',              weight: 0.5},
            {name: '早熟',              weight: 0.5},
            {
                name: '自负',
                weight: 0.5,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '自卑',
                            value: -10000
                        }
                    ]
                }
            },
            {
                name: '自卑',
                weight: 0.5,
                wm: {
                    change: [
                        {
                            path: 'personality.deep',
                            name: '自负',
                            value: -10000
                        }
                    ]
                }
            },
            {name: '谨慎',              weight: 1},
            {name: '神经质',            weight: 0.25},
            {name: '刀子嘴豆腐心',      weight: 0.5},
            {name: '大智若愚',          weight: 0.25},
            {name: '雌小鬼',            weight: 0.25},
            {name: '自我意识过剩',      weight: 0.25},
            {name: '亦正亦邪',          weight: 0.5},
            {name: '欺软怕硬',          weight: 0.25},
            {name: '鬼畜',              weight: 0.25},
            {name: '沉重',              weight: 0.25},
            {name: '老实人',            weight: 1},
            {name: '高攻低防',          weight: 0.5}
        ]
    }
}