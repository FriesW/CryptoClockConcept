var BEGIN_TIMESTAMP = 1508656525;
var KEY = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];
var SECONDS = 15;


//Weird stuff to get the string slice on the css property to work
$.fn.delayCss=function(Time,Name,Value){
var This=this;
setTimeout(function(){
This.css(Name,Value);
},Time);
return this;
};


function rand(lb, ub)
{
    return Math.floor((Math.random() * (ub - lb)) + lb);
}

function getTime()
{
    return parseInt( new Date().getTime() / 1000);
}

function getStamp()
{
    return parseInt((getTime() - BEGIN_TIMESTAMP) / SECONDS);
}

function encrypt(data)
{
    data = ('0000000000000000'+String(data)).slice(-16); //Zero pad
    var bytes = aesjs.utils.utf8.toBytes(data);
    var aes = new aesjs.AES(KEY);
    var enc = aes.encrypt(bytes);
    return enc;
}

function pushToScreen(enc)
{
    var cellIndex = 0;
    for(var i = 0; i < enc.length; i++)
    {
        var chunk = enc[i];
        for(var bp = 0; bp < 4; bp++)
        {
            var slice = chunk & 3; //Which is 0b11
            chunk = chunk >> 2;
            var selector = ".cell:eq(" + cellIndex + ")";
            var init_delay = rand(600, 2500);
            $(selector).delayCss(init_delay, "background-image", "url(imgs/" + slice + ".png)");
            $(selector)
                .animate({'opacity':0}, rand(200,3000))
                .animate({'opacity':1}, rand(200,3000));
            cellIndex ++;
        }
    }
}

$(document).ready(function(){
    var pos = getStamp();
    
    console.log("Hello world");
    setInterval(function(){
        pushToScreen(encrypt(pos++));
    }, SECONDS*1000);
});