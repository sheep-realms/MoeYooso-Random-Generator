let rd = new RandomDebuger();
let mg;

function weightedRandom(options) {
    var i;

    var weights = [];

    for (i = 0; i < options.length; i++)
        weights[i] = options[i].weight + (weights[i - 1] || 0);
    
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return options[i].name;
}

function weightedRandomLoop(options, min = 1, max = 3, outputMin = 1) {
    let r = ((Math.random() * (max - min)) + min).toFixed(0);
    if (r < outputMin) r = outputMin;
    let values = [];
    for (let i = 0; i < r; i++) {
        values.push(weightedRandom(options));
    }
    return values;
}

function tableTag(value) {
    if (typeof value == 'string') {
        return `<span class="moeyooso-tag" data-tagname="${value}" data-tip="moetag">${value}</span>`;
    } else {
        let txt = '';
        value.forEach(e => {
            txt += `<span class="moeyooso-tag" data-tagname="${e}" data-tip="moetag">${e}</span>`;
        });
        return txt;
    }
}

function tableItem(title, value) {
    if (value == '_none_') {
        return `
            <div class="moeyooso-item">
                <div class="moeyooso-item-title">${title}</div>
                <div class="moeyooso-item-content"></div>
            </div>
        `;
    };
    return `
        <div class="moeyooso-item">
            <div class="moeyooso-item-title">${title}</div>
            <div class="moeyooso-item-content">${tableTag(value)}</div>
        </div>
    `;
}

function tableGroup(title = '', data) {
    let isRight = false;
    let text = '';
    data.forEach(e => {
        if (!isRight) {
            text += `<div class="moeyooso-line">${tableItem(e[0], e[1])}`;
        } else {
            text += `${tableItem(e[0], e[1])}</div>`;
        }
        isRight = !isRight;
    });
    if (isRight) {
        text += `</div>`;
    }
    return `
        <div class="moeyooso-group">
            <div class="moeyooso-group-title">${title}</div>
            <div class="moeyooso-group-content">
                ${text}
            </div>
        </div>
    `;
}

$(document).ready(function () {
    mg = new MoeGirl();

    function moeGirlSpawn() {
        let m = mg.spawn();
    
        $('#moeyooso-table').html(`
            ${
                tableGroup(
                    '体格',
                    [
                        ['身高', m.physique.height]
                    ]
                )
            }
            ${
                tableGroup(
                    '相貌与体型特征',
                    [
                        ['发色', m.appearance.hairColor],
                        ['瞳色', m.appearance.eyeColor],
                        ['后发', m.appearance.hairstyleBack],
                        ['前发', m.appearance.hairstyleFront],
                        ['耳朵', m.appearance.earsType],
                        ['胸部尺寸', m.appearance.brassiereCup],
                        ['肤色', m.appearance.skinColor]
                    ]
                )
            }
            ${
                tableGroup(
                    '服装与着装状态',
                    [
                        ['套装', m.costume.suit],
                        ['泳装', m.costume.swimsuit],
                        ['内衣', m.costume.underwear],
                        ['内裤', m.costume.underpants],
                        ['帽子', m.costume.hat],
                        ['眼镜', m.costume.eyeglass],
                        ['袜子', m.costume.socks],
                        ['鞋子', m.costume.shoes],
                        ['发饰', m.costume.hairOrnaments],
                        ['面部饰品', m.costume.faceOrnaments],
                        ['颈部饰品', m.costume.neckOrnaments],
                        ['肩部饰品', m.costume.shoulderOrnaments],
                        ['上肢饰品', m.costume.armOrnaments]
                    ]
                )
            }
            ${
                tableGroup(
                    '性格',
                    [
                        ['浅层性格', m.personality.superficial],
                        ['深层性格', m.personality.deep]
                    ]
                )
            }
        `);
    
        $('#moeyooso-tag-output').text(mg.moeyoosoList.join(', '));
    }

    $(document).on('click', '.moeyooso-tag', function () {
        if (!$(this).hasClass('disable')) {
            $(this).addClass('disable');
        } else {
            $(this).removeClass('disable');
        }
    });
    
    $(document).on('click', '#moeyooso-reload', moeGirlSpawn);
    
    $(document).on('click', '#moeyooso-output', function() {
        // $("#moeyooso").scrollTop($("#moeyooso").height());
        let tags = [];
        for (let i = 0; i < $('.moeyooso-tag:not(.disable)').length; i++) {
            tags.push($('.moeyooso-tag:not(.disable)').eq(i).data('tagname'));
        }
        $('#moeyooso-tag-output').val(tags.join(', '));
        $('#moeyooso-tag-output').focus();
        $('#moeyooso-tag-output').select();
    });

    $(document).on('mouseover', '[data-tip]', function() {
        let txt = '';
        switch ($(this).data('tip')) {
            case 'moetag':
                txt = '点击禁用/启用'
                break;
            case 'reload':
                txt = '重新生成萌要素'
                break;
            case 'output':
                txt = '将所有选中的萌要素格式化为字符串列表'
                break;
            case 'textarea':
                txt = 'Ctrl + A 全选，Ctrl + C 复制'
                break;

            default:
                txt = $(this).data('tip');
        }
        $('#moeyooso-popup').text(txt);
        $('#moeyooso-popup').removeClass('hide');
    });

    $(document).on('mouseout', '[data-tip]', function() {
        $('#moeyooso-popup').addClass('hide');
    });

    moeGirlSpawn();
});