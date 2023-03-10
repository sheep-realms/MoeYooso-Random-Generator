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
        let wr = weightedRandom(options);
        if (values.indexOf(wr) == -1) {
            values.push(wr);
        } else {
            i--;
        }
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
                    '??????',
                    [
                        ['??????', m.physique.height]
                    ]
                )
            }
            ${
                tableGroup(
                    '?????????????????????',
                    [
                        ['??????', m.appearance.hairColor],
                        ['??????', m.appearance.eyeColor],
                        ['??????', m.appearance.hairstyleBack],
                        ['??????', m.appearance.hairstyleFront],
                        ['??????', m.appearance.earsType],
                        ['????????????', m.appearance.brassiereCup],
                        ['??????', m.appearance.skinColor]
                    ]
                )
            }
            ${
                tableGroup(
                    '?????????????????????',
                    [
                        ['??????', m.costume.suit],
                        ['??????', m.costume.swimsuit],
                        ['??????', m.costume.underwear],
                        ['??????', m.costume.underpants],
                        ['??????', m.costume.hat],
                        ['??????', m.costume.eyeglass],
                        ['??????', m.costume.socks],
                        ['??????', m.costume.shoes],
                        ['??????', m.costume.hairOrnaments],
                        ['????????????', m.costume.faceOrnaments],
                        ['????????????', m.costume.neckOrnaments],
                        ['????????????', m.costume.shoulderOrnaments],
                        ['????????????', m.costume.armOrnaments]
                    ]
                )
            }
            ${
                tableGroup(
                    '??????',
                    [
                        ['????????????', m.personality.superficial],
                        ['????????????', m.personality.deep]
                    ]
                )
            }
        `);
    
        $('#moeyooso-tag-output').val(mg.moeyoosoList.join(', '));
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
                txt = '????????????/??????'
                break;
            case 'reload':
                txt = '?????????????????????'
                break;
            case 'output':
                txt = '??????????????????????????????????????????????????????'
                break;
            case 'textarea':
                txt = 'Ctrl + A ?????????Ctrl + C ??????'
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


    let keyState = {
        z: false,
        x: false
    }

    let timerIndex = 0;
    let timerState = false;
    let aicBurstLock = false;

    $(document).keydown(function(e){
        if (e.keyCode == 90) {
            keyState.z = true;
        } else if (e.keyCode == 88) {
            keyState.x = true;
        }

        if (keyState.z && keyState.x && !timerState && !aicBurstLock) {
            timerState = true;
            $('#aic-burst').attr('class', 'ready');
            timerIndex = setTimeout(function() {
                $('#aic-burst').addClass('play');
                timerIndex = setTimeout(function() {
                    $('#aic-burst').addClass('done');
                    $('#moeyooso').addClass('aic-burst');
                    keyState = {
                        z: false,
                        x: false
                    }
                    timerState = false;
                    aicBurstLock = true;

                    moeGirlSpawn();

                    setTimeout(function() {
                        $('#aic-burst').attr('class', '');
                        $('#moeyooso').removeClass('aic-burst');
                        setTimeout(function() {
                            aicBurstLock = false;
                        }, 2000);
                    }, 1000);
                }, 1500);
            }, 300);
        }
    });

    $(document).keyup(function(e){
        if (e.keyCode == 90) {
            keyState.z = false;
        } else if (e.keyCode == 88) {
            keyState.x = false;
        }

        if (!(keyState.z && keyState.x) && timerState && !aicBurstLock) {
            timerState = false;
            clearTimeout(timerIndex);
            $('#aic-burst').attr('class', 'close');
            aicBurstLock = true;
            setTimeout(function() {
                $('#aic-burst').attr('class', '');
                setTimeout(function() {
                    aicBurstLock = false;
                }, 1000);
            }, 500);
        }
    });

    moeGirlSpawn();
});