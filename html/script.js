$(document).ready(function(){
    
    console.log("Hello world");
    var bytes = aesjs.utils.utf8.toBytes("ABlockIs16Bytes!");
    console.log(bytes);
    var key = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3];
    var aes = new aesjs.AES(key);
    
    var enc = aes.encrypt(bytes);
    console.log(enc);
});