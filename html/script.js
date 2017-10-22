var BEGIN_TIMESTAMP = 1508656525;

function getTime()
{
    return parseInt( new Date().getTime() / 1000);
}

function getStamp()
{
    return parseInt((getTime() - BEGIN_TIMESTAMP) / 5);
}

$(document).ready(function(){
    
    console.log("Hello world");
    console.log(getTime());
    var bytes = aesjs.utils.utf8.toBytes("ABlockIs16Bytes!");
    var key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];
    var aes = new aesjs.AES(key);
    
    var enc = aes.encrypt(bytes);
    
    //Compound
    var cellIndex = 0;
    for(var i = 0; i < enc.length; i++)
    {
        var chunk = enc[i];
        for(var bp = 0; bp < 4; bp++)
        {
            var slice = chunk & 3; //Which is 0b11
            chunk = chunk >> 2;
            $(".cell:eq(" + cellIndex + ")").css("background-image", "url(imgs/" + slice + ".png)");
            cellIndex ++;
        }
    }
});