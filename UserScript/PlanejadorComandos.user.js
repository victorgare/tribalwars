// ==UserScript==
// @name         150 - Planejador XPTO 
// @author       Vende se
// @version      0.1
// @include      https://*screen=place&try=confirm*
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @downloadURL https://raw.githubusercontent.com/victorgare/tribalwars/master/UserScript/PlanejadorComandos.user.js
// @updateURL   https://github.com/victorgare/tribalwars/raw/master/UserScript/PlanejadorComandos.user.js
// @run-at       document-start
// ==/UserScript==

var _0x9780 = ["\x3C\x74\x72\x3E\x3C\x74\x64\x3E\x43\x68\x65\x67\x61\x64\x61\x3A\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x64\x61\x74\x65\x74\x69\x6D\x65\x2D\x6C\x6F\x63\x61\x6C\x22\x20\x69\x64\x3D\x22\x43\x53\x74\x69\x6D\x65\x22\x20\x73\x74\x65\x70\x3D\x22\x2E\x30\x30\x31\x22\x3E\x20\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E\x3C\x74\x72\x3E\x20\x3C\x74\x64\x3E\x4F\x66\x66\x73\x65\x74\x3A\x3C\x2F\x74\x64\x3E\x3C\x74\x64\x3E\x20\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x6E\x75\x6D\x62\x65\x72\x22\x20\x69\x64\x3D\x22\x43\x53\x6F\x66\x66\x73\x65\x74\x22\x3E\x20\x3C\x62\x75\x74\x74\x6F\x6E\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x69\x64\x3D\x22\x43\x53\x62\x75\x74\x74\x6F\x6E\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x74\x6E\x22\x3E\x43\x6F\x6E\x66\x69\x72\x6D\x61\x72\x3C\x2F\x62\x75\x74\x74\x6F\x6E\x3E\x20\x3C\x2F\x74\x64\x3E\x3C\x2F\x74\x72\x3E", "\x61\x70\x70\x65\x6E\x64", "\x74\x62\x6F\x64\x79", "\x66\x69\x6E\x64", "\x23\x63\x6F\x6D\x6D\x61\x6E\x64\x2D\x64\x61\x74\x61\x2D\x66\x6F\x72\x6D", "\x63\x6F\x6E\x66\x69\x72\x6D\x42\x75\x74\x74\x6F\x6E", "\x23\x74\x72\x6F\x6F\x70\x5F\x63\x6F\x6E\x66\x69\x72\x6D\x5F\x67\x6F", "\x64\x75\x72\x61\x74\x69\x6F\x6E", "\x6D\x61\x70", "\x3A", "\x73\x70\x6C\x69\x74", "\x74\x65\x78\x74", "\x6E\x65\x78\x74", "\x74\x64\x3A\x63\x6F\x6E\x74\x61\x69\x6E\x73\x28\x22\x44\x75\x72\x61\xE7\xE3\x6F\x3A\x22\x29", "\x6F\x66\x66\x73\x65\x74", "\x43\x53\x2E\x6F\x66\x66\x73\x65\x74", "\x67\x65\x74\x49\x74\x65\x6D", "\x64\x61\x74\x65\x4E\x6F\x77", "\x63\x6F\x6E\x76\x65\x72\x74\x54\x6F\x49\x6E\x70\x75\x74", "\x76\x61\x6C", "\x23\x43\x53\x6F\x66\x66\x73\x65\x74", "\x23\x43\x53\x74\x69\x6D\x65", "\x67\x65\x74\x41\x74\x74\x61\x63\x6B\x54\x69\x6D\x65", "\x73\x65\x74\x49\x74\x65\x6D", "\x62\x74\x6E\x2D\x64\x69\x73\x61\x62\x6C\x65\x64", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x63\x6C\x69\x63\x6B", "\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74\x53\x65\x72\x76\x65\x72\x54\x69\x6D\x65", "\x64\x69\x73\x61\x62\x6C\x65\x64", "\x23\x43\x53\x62\x75\x74\x74\x6F\x6E", "\x54", "\x20", "\x72\x65\x70\x6C\x61\x63\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x73\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x73\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x73\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x74\x6F\x54\x69\x6D\x65\x53\x74\x72\x69\x6E\x67", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x6D", "\x30", "\x64", "\x6D\x73", "\x79", "\x2D", "\x74\x69\x6D\x65", "\x2E", "\x68\x65\x61\x64", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65", "\x73\x74\x79\x6C\x65", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x74\x79\x70\x65", "\x74\x65\x78\x74\x2F\x63\x73\x73", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x23\x43\x53\x74\x69\x6D\x65\x2C\x20\x23\x43\x53\x6F\x66\x66\x73\x65\x74\x20\x7B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x20\x39\x70\x74\x3B\x66\x6F\x6E\x74\x2D\x66\x61\x6D\x69\x6C\x79\x3A\x20\x56\x65\x72\x64\x61\x6E\x61\x2C\x41\x72\x69\x61\x6C\x3B\x7D\x23\x43\x53\x62\x75\x74\x74\x6F\x6E\x20\x7B\x66\x6C\x6F\x61\x74\x3A\x72\x69\x67\x68\x74\x3B\x7D", "\x61\x64\x64\x47\x6C\x6F\x62\x61\x6C\x53\x74\x79\x6C\x65", "\x63\x6F\x6D\x6D\x61\x6E\x64\x2D\x64\x61\x74\x61\x2D\x66\x6F\x72\x6D", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x69\x6E\x69\x74", "\x6F\x66\x66\x73\x65\x74\x5F\x74\x6F\x5F\x73\x65\x72\x76\x65\x72", "\x65\x71"];
CommandSender = {
    confirmButton: null,
    duration: null,
    dateNow: null,
    offset: null,
    init: function () {
        $($(_0x9780[4])[_0x9780[3]](_0x9780[2])[0])[_0x9780[1]](_0x9780[0]);
        this[_0x9780[5]] = $(_0x9780[6]);
        this[_0x9780[7]] = $(_0x9780[4])[_0x9780[3]](_0x9780[13])[_0x9780[12]]()[_0x9780[11]]()[_0x9780[10]](_0x9780[9])[_0x9780[8]](Number);
        this[_0x9780[14]] = localStorage[_0x9780[16]](_0x9780[15]) || -250;
        this[_0x9780[17]] = this[_0x9780[18]](new Date());
        $(_0x9780[20])[_0x9780[19]](this[_0x9780[14]]);
        $(_0x9780[21])[_0x9780[19]](this[_0x9780[17]]);
        $(_0x9780[29])[_0x9780[26]](function () {
            var _0xbbd0x1 = Number($(_0x9780[20])[_0x9780[19]]());
            var _0xbbd0x2 = CommandSender[_0x9780[22]]();
            localStorage[_0x9780[23]](_0x9780[15], _0xbbd0x1);
            CommandSender[_0x9780[5]][_0x9780[25]](_0x9780[24]);
            setTimeout(function () {
                CommandSender[_0x9780[5]][_0x9780[26]]()
            }, _0xbbd0x2 - Timing[_0x9780[27]]() + _0xbbd0x1);
            this[_0x9780[28]] = true
        })
    },
    getAttackTime: function () {
        var _0xbbd0x3 = new Date($(_0x9780[21])[_0x9780[19]]()[_0x9780[32]](_0x9780[30], _0x9780[31]));
        _0xbbd0x3[_0x9780[34]](_0xbbd0x3[_0x9780[33]]() - this[_0x9780[7]][0]);
        _0xbbd0x3[_0x9780[36]](_0xbbd0x3[_0x9780[35]]() - this[_0x9780[7]][1]);
        _0xbbd0x3[_0x9780[38]](_0xbbd0x3[_0x9780[37]]() - this[_0x9780[7]][2]);
        return _0xbbd0x3
    },
    convertToInput: function (_0xbbd0x4) {
        _0xbbd0x4[_0x9780[34]](_0xbbd0x4[_0x9780[33]]() + this[_0x9780[7]][0]);
        _0xbbd0x4[_0x9780[36]](_0xbbd0x4[_0x9780[35]]() + this[_0x9780[7]][1]);
        _0xbbd0x4[_0x9780[38]](_0xbbd0x4[_0x9780[37]]() + this[_0x9780[7]][2]);
        var a = {
            y: _0xbbd0x4[_0x9780[39]](),
            m: _0xbbd0x4[_0x9780[40]]() + 1,
            d: _0xbbd0x4[_0x9780[41]](),
            time: _0xbbd0x4[_0x9780[42]]()[_0x9780[10]](_0x9780[31])[0],
            ms: _0xbbd0x4[_0x9780[43]]()
        };
        if (a[_0x9780[44]] < 10) {
            a[_0x9780[44]] = _0x9780[45] + a[_0x9780[44]]
        };
        if (a[_0x9780[46]] < 10) {
            a[_0x9780[46]] = _0x9780[45] + a[_0x9780[46]]
        };
        if (a[_0x9780[47]] < 100) {
            a[_0x9780[47]] = _0x9780[45] + a[_0x9780[47]];
            if (a[_0x9780[47]] < 10) {
                a[_0x9780[47]] = _0x9780[45] + a[_0x9780[47]]
            }
        };
        return a[_0x9780[48]] + _0x9780[49] + a[_0x9780[44]] + _0x9780[49] + a[_0x9780[46]] + _0x9780[30] + a[_0x9780[50]] + _0x9780[51] + a[_0x9780[47]]
    },
    addGlobalStyle: function (_0xbbd0x6) {
        var _0xbbd0x7, _0xbbd0x8;
        _0xbbd0x7 = document[_0x9780[53]](_0x9780[52])[0];
        if (!_0xbbd0x7) {
            return
        };
        _0xbbd0x8 = document[_0x9780[55]](_0x9780[54]);
        _0xbbd0x8[_0x9780[56]] = _0x9780[57];
        _0xbbd0x8[_0x9780[58]] = _0xbbd0x6;
        _0xbbd0x7[_0x9780[59]](_0xbbd0x8)
    }
};
CommandSender[_0x9780[61]](_0x9780[60]);
var a = setInterval(function () {
    if (document[_0x9780[63]](_0x9780[62]) && jQuery) {
        CommandSender[_0x9780[64]]();
        clearInterval(a)
    }
}, 1);
setTimeout(function () {
    $(_0x9780[20])[_0x9780[66]](0)[_0x9780[19]](_0x9780[49] + Timing[_0x9780[65]])
}, 2000)