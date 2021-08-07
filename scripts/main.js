window.onload = function()
{
    init();
}

var timer = 0;
var textInterval;

function init()
{
    console.log('Hello world');
    textInterval = setInterval(tickText, 1000);
}

function tickText()
{
    timer++;

    var text = document.getElementById('text').innerHTML;

    switch(timer)
    {
        case getCurrentTime(0):
            text = 'to my first site'
            break;
        case getCurrentTime(1):
            text = 'My name is En0ri4n'
            break;
        case getCurrentTime(2):
            text = 'I\'m a french developper';
            break;
        case getCurrentTime(3):
            text = 'That\'s all...';
            break;
        case getCurrentTime(4):
            text = 'Goodbye ! :)';
            break;
    }
    
    document.getElementById('text').innerHTML = text;
}

var start = 7;
var duration = 3;

function getCurrentTime(order)
{
    return start + (duration * order);
}