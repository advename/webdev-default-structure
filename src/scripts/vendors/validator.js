/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.validator=e()}(this,function(){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){var e;if(!("string"==typeof t||t instanceof String))throw e=null===t?"null":"object"===(e=a(t))&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e),new TypeError("Expected string but received ".concat(e,"."))}function n(t){return g(t),t=Date.parse(t),isNaN(t)?null:new Date(t)}function r(t){return g(t),parseFloat(t)}function i(t){return"object"===a(t)&&null!==t?t="function"==typeof t.toString?t.toString():"[object Object]":(null==t||isNaN(t)&&!t.length)&&(t=""),String(t)}function h(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length?arguments[1]:void 0;for(var r in e)void 0===t[r]&&(t[r]=e[r]);return t}function A(t,e){var r,o;g(t),o="object"===a(e)?(r=e.min||0,e.max):(r=e,arguments[2]);var n=encodeURI(t).split(/%..|./).length-1;return r<=n&&(void 0===o||n<=o)}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};function m(t,e){g(t),(e=h(e,l)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));for(var r=t.split("."),o=0;o<r.length;o++)if(63<r[o].length)return!1;if(e.require_tld){var n=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(n))return!1}for(var i,a=0;a<r.length;a++){if(i=r[a],e.allow_underscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}var s=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,u=/^[0-9A-F]{1,4}$/i;function $(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(g(t),!(e=String(e)))return $(t,4)||$(t,6);if("4"===e)return!!s.test(t)&&t.split(".").sort(function(t,e){return t-e})[3]<=255;if("6"!==e)return!1;var r=t.split(":"),o=!1,n=$(r[r.length-1],4),i=n?7:8;if(r.length>i)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(r.shift(),r.shift(),o=!0):"::"===t.substr(t.length-2)&&(r.pop(),r.pop(),o=!0);for(var a=0;a<r.length;++a)if(""===r[a]&&0<a&&a<r.length-1){if(o)return!1;o=!0}else if(n&&a===r.length-1);else if(!u.test(r[a]))return!1;return o?1<=r.length:r.length===i}var v={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,F=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,S=/^[a-z\d]+$/,R=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,E=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;var d={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},f=/^\[([^\]]+)\](?::([0-9]+))?$/;function p(t,e){for(var r=0;r<e.length;r++){var o=e[r];if(t===o||(n=o,"[object RegExp]"===Object.prototype.toString.call(n)&&o.test(t)))return!0}var n;return!1}var o=/^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,c=/^([0-9a-fA-F]){12}$/;var N=/^\d{1,2}$/;for(var t,M={"en-US":/^[A-Z]+$/i,"bg-BG":/^[А-Я]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"el-GR":/^[Α-ω]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[A-ZÀÉÈÌÎÓÒÙ]+$/i,"nb-NO":/^[A-ZÆØÅ]+$/i,"nl-NL":/^[A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[A-ZÆØÅ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"sl-SI":/^[A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[A-ZÅÄÖ]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},w={"en-US":/^[0-9A-Z]+$/i,"bg-BG":/^[0-9А-Я]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"el-GR":/^[0-9Α-ω]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nb-NO":/^[0-9A-ZÆØÅ]+$/i,"nl-NL":/^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[0-9A-ZÆØÅ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"sl-SI":/^[0-9A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[0-9A-ZÅÄÖ]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},C={"en-US":".",ar:"٫"},e=["AU","GB","HK","IN","NZ","ZA","ZM"],L=0;L<e.length;L++)t="en-".concat(e[L]),M[t]=M["en-US"],w[t]=w["en-US"],C[t]=C["en-US"];for(var I,Z=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"],T=0;T<Z.length;T++)I="ar-".concat(Z[T]),M[I]=M.ar,w[I]=w.ar,C[I]=C.ar;for(var B=[],y=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","es-ES","fr-FR","it-IT","ku-IQ","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA"],b=0;b<B.length;b++)C[B[b]]=C["en-US"];for(var D=0;D<y.length;D++)C[y[D]]=",";M["pt-BR"]=M["pt-PT"],w["pt-BR"]=w["pt-PT"],C["pt-BR"]=C["pt-PT"],M["pl-Pl"]=M["pl-PL"],w["pl-Pl"]=w["pl-PL"],C["pl-Pl"]=C["pl-PL"];var O=Object.keys(M);var G=Object.keys(w),P=/^[+-]?([0-9]*[.])?[0-9]+$/,U=/^[0-9]+$/;var k=/^(?:[-+]?(?:0|[1-9][0-9]*))$/,K=/^[-+]?[0-9]+$/;function H(t,e){g(t);var r=(e=e||{}).hasOwnProperty("allow_leading_zeroes")&&!e.allow_leading_zeroes?k:K,o=!e.hasOwnProperty("min")||t>=e.min,n=!e.hasOwnProperty("max")||t<=e.max,i=!e.hasOwnProperty("lt")||t<e.lt,a=!e.hasOwnProperty("gt")||t>e.gt;return r.test(t)&&o&&n&&i&&a}var z=/^[\x00-\x7F]+$/;var W=/[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;var Y=/[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;var V=/[^\x00-\x7F]/;var j=/[\uD800-\uDBFF][\uDC00-\uDFFF]/;var J=Object.keys(C),q=function(t,e){return t.some(function(t){return e===t})};var Q={force_decimal:!1,decimal_digits:"1,",locale:"en-US"},X=["","-","+"];var tt=/^[0-9A-F]+$/i;function et(t){return g(t),tt.test(t)}var rt=/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;var ot=/^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;var nt=/^[a-f0-9]{32}$/;var it={md5:32,md4:32,sha1:40,sha256:64,sha384:96,sha512:128,ripemd128:32,ripemd160:40,tiger128:32,tiger160:40,tiger192:48,crc32:8,crc32b:8};var at=/^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;var lt={ignore_whitespace:!1};var st={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i};var ut=/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;var ct={ES:function(t){g(t);var e={X:0,Y:1,Z:2},r=t.trim().toUpperCase();if(!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(r))return!1;var o=r.slice(0,-1).replace(/[X,Y,Z]/g,function(t){return e[t]});return r.endsWith(["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"][o%23])}};var dt=/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;var ft=/^(?:[0-9]{9}X|[0-9]{10})$/,pt=/^(?:[0-9]{13})$/,gt=[1,3];var ht={"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-EG":/^((\+?20)|0)?1[012]\d{8}$/,"ar-IQ":/^(\+?964|0)?7[0-9]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-KW":/^(\+?965)[569]\d{7}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-TN":/^(\+?216)?[2459]\d{7}$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"bn-BD":/\+?(88)?0?1[356789][0-9]{8}\b/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+?49[ \.\-]?)?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)?[7]\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)[28]\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[89]\d{7}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^(\+?1?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"es-MX":/^(\+?52)?(1|01)?\d{10,11}$/,"es-UY":/^(\+598|0)9[1-9][\d]{6}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sl-SI":/^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"sv-SE":/^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"vi-VN":/^(\+?84|0)((3([2-9]))|(5([689]))|(7([0|6-9]))|(8([1-5]))|(9([0-9])))([0-9]{7})$/,"zh-CN":/^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};ht["en-CA"]=ht["en-US"],ht["fr-BE"]=ht["nl-BE"],ht["zh-HK"]=ht["en-HK"];var At=Object.keys(ht);var mt={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_decimal:!0,require_decimal:!1,digits_after_decimal:[2],allow_space_after_digits:!1};var $t=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;var vt=/([01][0-9]|2[0-3])/,_t=/[0-5][0-9]/,Ft=new RegExp("[-+]".concat(vt.source,":").concat(_t.source)),St=new RegExp("([zZ]|".concat(Ft.source,")")),Rt=new RegExp("".concat(vt.source,":").concat(_t.source,":").concat(/([0-5][0-9]|60)/.source).concat(/(\.[0-9]+)?/.source)),Et=new RegExp("".concat(/[0-9]{4}/.source,"-").concat(/(0[1-9]|1[0-2])/.source,"-").concat(/([12]\d|0[1-9]|3[01])/.source)),xt=new RegExp("".concat(Rt.source).concat(St.source)),Nt=new RegExp("".concat(Et.source,"[ tT]").concat(xt.source));var Mt=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];var wt=["AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG","ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ","BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR","BFA","BDI","KHM","CMR","CAN","CPV","CYM","CAF","TCD","CHL","CHN","CXR","CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CUW","CYP","CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH","FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU","GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY","HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL","IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR","KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC","MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT","MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU","NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN","PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI","QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT","WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN","SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE","CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN","TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB","VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"];var Ct=/[^A-Z0-9+\/=]/i;var Lt=/^[a-z]+\/[a-z0-9\-\+]+$/i,It=/^[a-z\-]+=[a-z0-9\-]+$/i,Zt=/^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;var Tt=/^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;var Bt=/^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i,yt=/^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,bt=/^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;var Dt=/^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,Ot=/^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,Gt=/^\d{4}$/,Pt=/^\d{5}$/,Ut=/^\d{6}$/,kt={AD:/^AD\d{3}$/,AT:Gt,AU:Gt,BE:Gt,BG:Gt,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:Gt,CZ:/^\d{3}\s?\d{2}$/,DE:Pt,DK:Gt,DZ:Pt,EE:Pt,ES:Pt,FI:Pt,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HU:Gt,IL:Pt,IN:Ut,IS:/^\d{3}$/,IT:Pt,JP:/^\d{3}\-\d{4}$/,KE:Pt,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:Gt,LV:/^LV\-\d{4}$/,MX:Pt,NL:/^\d{4}\s?[a-z]{2}$/i,NO:Gt,PL:/^\d{2}\-\d{3}$/,PT:/^\d{4}\-\d{3}?$/,RO:Ut,RU:Ut,SA:Pt,SE:/^\d{3}\s?\d{2}$/,SI:Gt,SK:/^\d{3}\s?\d{2}$/,TN:Gt,TW:/^\d{3}(\d{2})?$/,US:/^\d{5}(-\d{4})?$/,ZA:Gt,ZM:Pt},Kt=Object.keys(kt);function Ht(t,e){g(t);var r=e?new RegExp("^[".concat(e,"]+"),"g"):/^\s+/g;return t.replace(r,"")}function zt(t,e){g(t);for(var r=e?new RegExp("[".concat(e,"]")):/\s/,o=t.length-1;0<=o&&r.test(t[o]);o--);return o<t.length?t.substr(0,o+1):t}function Wt(t,e){return g(t),t.replace(new RegExp("[".concat(e,"]+"),"g"),"")}var Yt={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,yandex_lowercase:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},Vt=["icloud.com","me.com"],jt=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],Jt=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"],qt=["yandex.ru","yandex.ua","yandex.kz","yandex.com","yandex.by","ya.ru"];function Qt(t){return 1<t.length?t:""}return{version:"10.8.0",toDate:n,toFloat:r,toInt:function(t,e){return g(t),parseInt(t,e||10)},toBoolean:function(t,e){return g(t),e?"1"===t||"true"===t:"0"!==t&&"false"!==t&&""!==t},equals:function(t,e){return g(t),t===e},contains:function(t,e){return g(t),0<=t.indexOf(i(e))},matches:function(t,e,r){return g(t),"[object RegExp]"!==Object.prototype.toString.call(e)&&(e=new RegExp(e,r)),e.test(t)},isEmail:function(t,e){if(g(t),(e=h(e,v)).require_display_name||e.allow_display_name){var r=t.match(_);if(r)t=r[1];else if(e.require_display_name)return!1}var o=t.split("@"),n=o.pop(),i=o.join("@"),a=n.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===a||"googlemail.com"===a)){var l=(i=i.toLowerCase()).split("+")[0];if(!A(l.replace(".",""),{min:6,max:30}))return!1;for(var s=l.split("."),u=0;u<s.length;u++)if(!S.test(s[u]))return!1}if(!A(i,{max:64})||!A(n,{max:254}))return!1;if(!m(n,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!$(n)){if(!n.startsWith("[")||!n.endsWith("]"))return!1;var c=n.substr(1,n.length-2);if(0===c.length||!$(c))return!1}}if('"'===i[0])return i=i.slice(1,i.length-1),e.allow_utf8_local_part?x.test(i):R.test(i);for(var d=e.allow_utf8_local_part?E:F,f=i.split("."),p=0;p<f.length;p++)if(!d.test(f[p]))return!1;return!0},isURL:function(t,e){if(g(t),!t||2083<=t.length||/[\s<>]/.test(t))return!1;if(0===t.indexOf("mailto:"))return!1;var r,o,n,i,a,l,s,u;if(e=h(e,d),1<(s=(t=(s=(t=(s=t.split("#")).shift()).split("?")).shift()).split("://")).length){if(r=s.shift().toLowerCase(),e.require_valid_protocol&&-1===e.protocols.indexOf(r))return!1}else{if(e.require_protocol)return!1;if("//"===t.substr(0,2)){if(!e.allow_protocol_relative_urls)return!1;s[0]=t.substr(2)}}if(""===(t=s.join("://")))return!1;if(""===(t=(s=t.split("/")).shift())&&!e.require_host)return!0;if(1<(s=t.split("@")).length){if(e.disallow_auth)return!1;if(0<=(o=s.shift()).indexOf(":")&&2<o.split(":").length)return!1}u=l=null;var c=(i=s.join("@")).match(f);return c?(n="",u=c[1],l=c[2]||null):(n=(s=i.split(":")).shift(),s.length&&(l=s.join(":"))),!(null!==l&&(a=parseInt(l,10),!/^[0-9]+$/.test(l)||a<=0||65535<a)||!($(n)||m(n,e)||u&&$(u,6))||(n=n||u,e.host_whitelist&&!p(n,e.host_whitelist)||e.host_blacklist&&p(n,e.host_blacklist)))},isMACAddress:function(t,e){return g(t),e&&e.no_colons?c.test(t):o.test(t)},isIP:$,isIPRange:function(t){g(t);var e=t.split("/");return 2===e.length&&!!N.test(e[1])&&!(1<e[1].length&&e[1].startsWith("0"))&&$(e[0],4)&&e[1]<=32&&0<=e[1]},isFQDN:m,isBoolean:function(t){return g(t),0<=["true","false","1","0"].indexOf(t)},isAlpha:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"en-US";if(g(t),e in M)return M[e].test(t);throw new Error("Invalid locale '".concat(e,"'"))},isAlphaLocales:O,isAlphanumeric:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"en-US";if(g(t),e in w)return w[e].test(t);throw new Error("Invalid locale '".concat(e,"'"))},isAlphanumericLocales:G,isNumeric:function(t,e){return g(t),e&&e.no_symbols?U.test(t):P.test(t)},isPort:function(t){return H(t,{min:0,max:65535})},isLowercase:function(t){return g(t),t===t.toLowerCase()},isUppercase:function(t){return g(t),t===t.toUpperCase()},isAscii:function(t){return g(t),z.test(t)},isFullWidth:function(t){return g(t),W.test(t)},isHalfWidth:function(t){return g(t),Y.test(t)},isVariableWidth:function(t){return g(t),W.test(t)&&Y.test(t)},isMultibyte:function(t){return g(t),V.test(t)},isSurrogatePair:function(t){return g(t),j.test(t)},isInt:H,isFloat:function(t,e){g(t),e=e||{};var r=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale?C[e.locale]:".","[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));if(""===t||"."===t||"-"===t||"+"===t)return!1;var o=parseFloat(t.replace(",","."));return r.test(t)&&(!e.hasOwnProperty("min")||o>=e.min)&&(!e.hasOwnProperty("max")||o<=e.max)&&(!e.hasOwnProperty("lt")||o<e.lt)&&(!e.hasOwnProperty("gt")||o>e.gt)},isFloatLocales:J,isDecimal:function(t,e){if(g(t),(e=h(e,Q)).locale in C)return!q(X,t.replace(/ /g,""))&&(r=e,new RegExp("^[-+]?([0-9]+)?(\\".concat(C[r.locale],"[0-9]{").concat(r.decimal_digits,"})").concat(r.force_decimal?"":"?","$"))).test(t);var r;throw new Error("Invalid locale '".concat(e.locale,"'"))},isHexadecimal:et,isDivisibleBy:function(t,e){return g(t),r(t)%parseInt(e,10)==0},isHexColor:function(t){return g(t),rt.test(t)},isISRC:function(t){return g(t),ot.test(t)},isMD5:function(t){return g(t),nt.test(t)},isHash:function(t,e){return g(t),new RegExp("^[a-f0-9]{".concat(it[e],"}$")).test(t)},isJWT:function(t){return g(t),at.test(t)},isJSON:function(t){g(t);try{var e=JSON.parse(t);return!!e&&"object"===a(e)}catch(t){}return!1},isEmpty:function(t,e){return g(t),0===((e=h(e,lt)).ignore_whitespace?t.trim().length:t.length)},isLength:function(t,e){var r,o;g(t),o="object"===a(e)?(r=e.min||0,e.max):(r=e,arguments[2]);var n=t.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g)||[],i=t.length-n.length;return r<=i&&(void 0===o||i<=o)},isByteLength:A,isUUID:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"all";g(t);var r=st[e];return r&&r.test(t)},isMongoId:function(t){return g(t),et(t)&&24===t.length},isAfter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:String(new Date);g(t);var r=n(e),o=n(t);return!!(o&&r&&r<o)},isBefore:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:String(new Date);g(t);var r=n(e),o=n(t);return!!(o&&r&&o<r)},isIn:function(t,e){var r;if(g(t),"[object Array]"!==Object.prototype.toString.call(e))return"object"===a(e)?e.hasOwnProperty(t):!(!e||"function"!=typeof e.indexOf)&&0<=e.indexOf(t);var o=[];for(r in e)({}).hasOwnProperty.call(e,r)&&(o[r]=i(e[r]));return 0<=o.indexOf(t)},isCreditCard:function(t){g(t);var e=t.replace(/[- ]+/g,"");if(!ut.test(e))return!1;for(var r,o,n,i=0,a=e.length-1;0<=a;a--)r=e.substring(a,a+1),o=parseInt(r,10),i+=n&&10<=(o*=2)?o%10+1:o,n=!n;return!(i%10!=0||!e)},isIdentityCard:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"any";if(g(t),e in ct)return ct[e](t);if("any"!==e)throw new Error("Invalid locale '".concat(e,"'"));for(var r in ct)if(ct.hasOwnProperty(r)&&(0,ct[r])(t))return!0;return!1},isISIN:function(t){if(g(t),!dt.test(t))return!1;for(var e,r,o=t.replace(/[A-Z]/g,function(t){return parseInt(t,36)}),n=0,i=!0,a=o.length-2;0<=a;a--)e=o.substring(a,a+1),r=parseInt(e,10),n+=i&&10<=(r*=2)?r+1:r,i=!i;return parseInt(t.substr(t.length-1),10)===(1e4-n)%10},isISBN:function t(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(g(e),!(r=String(r)))return t(e,10)||t(e,13);var o,n=e.replace(/[\s-]+/g,""),i=0;if("10"===r){if(!ft.test(n))return!1;for(o=0;o<9;o++)i+=(o+1)*n.charAt(o);if("X"===n.charAt(9)?i+=100:i+=10*n.charAt(9),i%11==0)return!!n}else if("13"===r){if(!pt.test(n))return!1;for(o=0;o<12;o++)i+=gt[o%2]*n.charAt(o);if(n.charAt(12)-(10-i%10)%10==0)return!!n}return!1},isISSN:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};g(t);var r="^\\d{4}-?\\d{3}[\\dX]$";if(r=e.require_hyphen?r.replace("?",""):r,!(r=e.case_sensitive?new RegExp(r):new RegExp(r,"i")).test(t))return!1;for(var o=t.replace("-","").toUpperCase(),n=0,i=0;i<o.length;i++){var a=o[i];n+=("X"===a?10:+a)*(8-i)}return n%11==0},isMobilePhone:function(e,t,r){if(g(e),r&&r.strictMode&&!e.startsWith("+"))return!1;if(Array.isArray(t))return t.some(function(t){return!(!ht.hasOwnProperty(t)||!ht[t].test(e))});if(t in ht)return ht[t].test(e);if(t&&"any"!==t)throw new Error("Invalid locale '".concat(t,"'"));for(var o in ht)if(ht.hasOwnProperty(o)&&ht[o].test(e))return!0;return!1},isMobilePhoneLocales:At,isPostalCode:function(t,e){if(g(t),e in kt)return kt[e].test(t);if("any"!==e)throw new Error("Invalid locale '".concat(e,"'"));for(var r in kt)if(kt.hasOwnProperty(r)&&kt[r].test(t))return!0;return!1},isPostalCodeLocales:Kt,isCurrency:function(t,e){return g(t),function(t){var r="\\d{".concat(t.digits_after_decimal[0],"}");t.digits_after_decimal.forEach(function(t,e){0!==e&&(r="".concat(r,"|\\d{").concat(t,"}"))});var e="(\\".concat(t.symbol.replace(/\./g,"\\."),")").concat(t.require_symbol?"":"?"),o="[1-9]\\d{0,2}(\\".concat(t.thousands_separator,"\\d{3})*"),n="(".concat(["0","[1-9]\\d*",o].join("|"),")?"),i="(\\".concat(t.decimal_separator,"(").concat(r,"))").concat(t.require_decimal?"":"?"),a=n+(t.allow_decimal||t.require_decimal?i:"");return t.allow_negatives&&!t.parens_for_negatives&&(t.negative_sign_after_digits?a+="-?":t.negative_sign_before_digits&&(a="-?"+a)),t.allow_negative_sign_placeholder?a="( (?!\\-))?".concat(a):t.allow_space_after_symbol?a=" ?".concat(a):t.allow_space_after_digits&&(a+="( (?!$))?"),t.symbol_after_digits?a+=e:a=e+a,t.allow_negatives&&(t.parens_for_negatives?a="(\\(".concat(a,"\\)|").concat(a,")"):t.negative_sign_before_digits||t.negative_sign_after_digits||(a="-?"+a)),new RegExp("^(?!-? )(?=.*\\d)".concat(a,"$"))}(e=h(e,mt)).test(t)},isISO8601:function(t,e){g(t);var r=$t.test(t);return e&&r&&e.strict?function(t){var e=t.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);if(e){var r=Number(e[1]),o=Number(e[2]);return r%4==0&&r%100!=0?o<=366:o<=365}var n=t.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number),i=n[1],a=n[2],l=n[3],s=new Date("".concat(i,"-").concat(a||1,"-").concat(l||1));return!isNaN(s.getFullYear())&&(!a||!l||s.getFullYear()===i&&s.getMonth()+1===a&&s.getDate()===l)}(t):r},isRFC3339:function(t){return g(t),Nt.test(t)},isISO31661Alpha2:function(t){return g(t),q(Mt,t.toUpperCase())},isISO31661Alpha3:function(t){return g(t),q(wt,t.toUpperCase())},isBase64:function(t){g(t);var e=t.length;if(!e||e%4!=0||Ct.test(t))return!1;var r=t.indexOf("=");return-1===r||r===e-1||r===e-2&&"="===t[e-1]},isDataURI:function(t){g(t);var e=t.split(",");if(e.length<2)return!1;var r=e.shift().trim().split(";"),o=r.shift();if("data:"!==o.substr(0,5))return!1;var n=o.substr(5);if(""!==n&&!Lt.test(n))return!1;for(var i=0;i<r.length;i++)if(i===r.length-1&&"base64"===r[i].toLowerCase());else if(!It.test(r[i]))return!1;for(var a=0;a<e.length;a++)if(!Zt.test(e[a]))return!1;return!0},isMagnetURI:function(t){return g(t),Tt.test(t.trim())},isMimeType:function(t){return g(t),Bt.test(t)||yt.test(t)||bt.test(t)},isLatLong:function(t){if(g(t),!t.includes(","))return!1;var e=t.split(",");return Dt.test(e[0])&&Ot.test(e[1])},ltrim:Ht,rtrim:zt,trim:function(t,e){return zt(Ht(t,e),e)},escape:function(t){return g(t),t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2F;").replace(/\\/g,"&#x5C;").replace(/`/g,"&#96;")},unescape:function(t){return g(t),t.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#x2F;/g,"/").replace(/&#x5C;/g,"\\").replace(/&#96;/g,"`")},stripLow:function(t,e){return g(t),Wt(t,e?"\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F":"\\x00-\\x1F\\x7F")},whitelist:function(t,e){return g(t),t.replace(new RegExp("[^".concat(e,"]+"),"g"),"")},blacklist:Wt,isWhitelisted:function(t,e){g(t);for(var r=t.length-1;0<=r;r--)if(-1===e.indexOf(t[r]))return!1;return!0},normalizeEmail:function(t,e){e=h(e,Yt);var r=t.split("@"),o=r.pop(),n=[r.join("@"),o];if(n[1]=n[1].toLowerCase(),"gmail.com"===n[1]||"googlemail.com"===n[1]){if(e.gmail_remove_subaddress&&(n[0]=n[0].split("+")[0]),e.gmail_remove_dots&&(n[0]=n[0].replace(/\.+/g,Qt)),!n[0].length)return!1;(e.all_lowercase||e.gmail_lowercase)&&(n[0]=n[0].toLowerCase()),n[1]=e.gmail_convert_googlemaildotcom?"gmail.com":n[1]}else if(0<=Vt.indexOf(n[1])){if(e.icloud_remove_subaddress&&(n[0]=n[0].split("+")[0]),!n[0].length)return!1;(e.all_lowercase||e.icloud_lowercase)&&(n[0]=n[0].toLowerCase())}else if(0<=jt.indexOf(n[1])){if(e.outlookdotcom_remove_subaddress&&(n[0]=n[0].split("+")[0]),!n[0].length)return!1;(e.all_lowercase||e.outlookdotcom_lowercase)&&(n[0]=n[0].toLowerCase())}else if(0<=Jt.indexOf(n[1])){if(e.yahoo_remove_subaddress){var i=n[0].split("-");n[0]=1<i.length?i.slice(0,-1).join("-"):i[0]}if(!n[0].length)return!1;(e.all_lowercase||e.yahoo_lowercase)&&(n[0]=n[0].toLowerCase())}else 0<=qt.indexOf(n[1])?((e.all_lowercase||e.yandex_lowercase)&&(n[0]=n[0].toLowerCase()),n[1]="yandex.ru"):e.all_lowercase&&(n[0]=n[0].toLowerCase());return n.join("@")},toString:i}});