function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

function go()
{
    let text;

    switch(getRandomInt(3))
    {
        case 0:
            text = 'Paf';
            break;
        case 1:
            text = 'Babebibobu';
            break;
        case 2:
            text = "Ca alors";
            break;
    }

    document.getElementById('title').innerHTML = text;

}