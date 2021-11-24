// ==UserScript==
// @name         150 - Planejador XPTO 
// @author       Vende se
// @version      0.2
// @include      https://*screen=place&try=confirm*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/PlanejadorComandos.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/PlanejadorComandos.user.js
// @run-at       document-start
// ==/UserScript==

CommandSender = {
    confirmButton: null,
    duration: null,
    dateNow: null,
    offset: null,
    init: function() {
        $($('#command-data-form')['find']('tbody')[0])['append']('<tr><td>Chegada:</td><td> <input type="datetime-local" id="CStime" step=".001"> </td></tr><tr> <td>Offset:</td><td> <input type="number" id="CSoffset"> <button type="button" id="CSbutton" class="btn">Confirmar</button> </td></tr>');
        this['confirmButton'] = $('#troop_confirm_submit');
        this['duration'] = $('#command-data-form')['find']('td:contains("Dura\xE7\xE3o:")')['next']()['text']()['split'](':')['map'](Number);
        this['offset'] = localStorage['getItem']('CS.offset') || -250;
        this['dateNow'] = this['convertToInput'](new Date());
        $('#CSoffset')['val'](this['offset']);
        $('#CStime')['val'](this['dateNow']);
        $('#CSbutton')['click'](function() {
            var _0xbbd0x1 = Number($('#CSoffset')['val']());
            var _0xbbd0x2 = CommandSender['getAttackTime']();
            localStorage['setItem']('CS.offset', _0xbbd0x1);
            CommandSender['confirmButton']['addClass']('btn-disabled');
            setTimeout(function() {
                CommandSender['confirmButton']['click']()
            }, _0xbbd0x2 - Timing['getCurrentServerTime']() + _0xbbd0x1);
            this['disabled'] = true
        })
    },
    getAttackTime: function() {
        var _0xbbd0x3 = new Date($('#CStime')['val']()['replace']('T', ' '));
        _0xbbd0x3['setHours'](_0xbbd0x3['getHours']() - this['duration'][0]);
        _0xbbd0x3['setMinutes'](_0xbbd0x3['getMinutes']() - this['duration'][1]);
        _0xbbd0x3['setSeconds'](_0xbbd0x3['getSeconds']() - this['duration'][2]);
        return _0xbbd0x3
    },
    convertToInput: function(_0xbbd0x4) {
        _0xbbd0x4['setHours'](_0xbbd0x4['getHours']() + this['duration'][0]);
        _0xbbd0x4['setMinutes'](_0xbbd0x4['getMinutes']() + this['duration'][1]);
        _0xbbd0x4['setSeconds'](_0xbbd0x4['getSeconds']() + this['duration'][2]);
        var a = {
            y: _0xbbd0x4['getFullYear'](),
            m: _0xbbd0x4['getMonth']() + 1,
            d: _0xbbd0x4['getDate'](),
            time: _0xbbd0x4['toTimeString']()['split'](' ')[0],
            ms: _0xbbd0x4['getMilliseconds']()
        };
        if (a['m'] < 10) {
            a['m'] = '0' + a['m']
        };
        if (a['d'] < 10) {
            a['d'] = '0' + a['d']
        };
        if (a['ms'] < 100) {
            a['ms'] = '0' + a['ms'];
            if (a['ms'] < 10) {
                a['ms'] = '0' + a['ms']
            }
        };
        return a['y'] + '-' + a['m'] + '-' + a['d'] + 'T' + a['time'] + '.' + a['ms']
    },
    addGlobalStyle: function(_0xbbd0x6) {
        var _0xbbd0x7, _0xbbd0x8;
        _0xbbd0x7 = document['getElementsByTagName']('head')[0];
        if (!_0xbbd0x7) {
            return
        };
        _0xbbd0x8 = document['createElement']('style');
        _0xbbd0x8['type'] = 'text/css';
        _0xbbd0x8['innerHTML'] = _0xbbd0x6;
        _0xbbd0x7['appendChild'](_0xbbd0x8)
    }
};
CommandSender['addGlobalStyle']('#CStime, #CSoffset {font-size: 9pt;font-family: Verdana,Arial;}#CSbutton {float:right;}');
var a = setInterval(function() {
    if (document['getElementById']('command-data-form') && jQuery) {
        CommandSender['init']();
        clearInterval(a)
    }
}, 1);
setTimeout(function() {
    $('#CSoffset')['eq'](0)['val']('-' + Timing['offset_to_server'])
}, 2000)