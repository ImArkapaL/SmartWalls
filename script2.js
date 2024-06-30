function parseUA() {
    var u = navigator.userAgent;
    var u2 = navigator.userAgent.toLowerCase();
    return { 
        trident: u.indexOf('Trident') > -1, 
        presto: u.indexOf('Presto') > -1, 
        webKit: u.indexOf('AppleWebKit') > -1, 
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
        iPhone: u.indexOf('iPhone') > -1, 
        iPad: u.indexOf('iPad') > -1, 
        webApp: u.indexOf('Safari') == -1, 
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
        ali: u.indexOf('AliApp') > -1,
    };
}
var ua = parseUA();

if (ua.mobile) {
    location.href = './pc.html';
}