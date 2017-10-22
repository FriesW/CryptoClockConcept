var BEGIN_TIMESTAMP = 1508656525;
var KEY = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];
var SECONDS = 15;


//Weird stuff to get the string slice on the css property to work
function callback(slice){
    return function()
    {
       $(this).css("background-image", "url(imgs/" + slice + ".png)");
    };
}

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
            $(".cell:eq(" + cellIndex + ")")
                .animate({'opacity':0}, rand(600,2500), callback(slice))
                .animate({'opacity':1}, rand(200,3000));
            cellIndex ++;
        }
    }
}

$(document).ready(function(){
    var pos = getStamp();
    
    $(".cell").each(function(){
        $(this).css({'backgroundPosition': '' + rand(0,800) + 'px ' + rand(0, 800) + 'px'});
    });
    
    pushToScreen(encrypt(pos++));
    setInterval(function(){
        pushToScreen(encrypt(pos++));
    }, SECONDS*1000);
});