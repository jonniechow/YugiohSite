var price = 65;

//Finds position to insert tins
var position = document.getElementById('insert_tins');

var tin_names = new Array(['Dark Magician', 'Summoned Skull', 'Blue-Eyes White Dragon', 'Lord of D.', 'Red-Eyes B. Dragon', 'B. Skull Dragon'],
                          ['Dark Magician', 'Buster Blader', 'Blue-Eyes White Dragon', 'XYZ-Dragon Cannon', 'Jinzo', 'Gearfried the Iron Knight'],
                          ['Total Defense Shogun', 'Blade Knight', 'Command Knight', 'Swift Gaia the Fierce Knight', 'Insect Queen', 'Obnoxious Celtic Guard'],
                          ['Gilford the Lightning', 'Exarion Universe', 'Vorse Raider', 'Dark Magician Girl', 'Rocket Warrior', 'Panther Warrior']
                        );

var tin_images = new Array(['bpt001.jpg', 'bpt002.jpg', 'bpt003.jpg', 'bpt004.jpg', 'bpt005.jpg', 'bpt006.jpg'],
                           ['bpt007.jpg', 'bpt008.jpg', 'bpt009.jpg', 'bpt010.jpg', 'bpt011.jpg', 'bpt012.jpg'],
                           ['ct1en001.jpg', 'ct1en002.jpg', 'ct1en003.jpg', 'ct1en004.jpg', 'ct1en005.jpg', 'ct1en006.jpg'],
                           ['ct2en001.jpg', 'ct2en002.jpg', 'ct2en003.jpg', 'ct2en004.jpg', 'ct2en005.jpg', 'ct2en006.jpg']
                        );

var newTin = ''
for(var i = tin_names.length - 1; i >= 0; i--)
{
    newTin += '<div class=\"year\"><h2 id=\"' + (i + 2002) + '\">' + (i + 2002) + '</h2></div>';
    for(var j = 0; j < tin_names[0].length; j++)
    {
        newTin += '<article> <figure class=\"img\">';
        newTin += '<img src=\"tinImages/' + tin_images[i][j] + '\"/> </figure>';
        newTin += '<hgroup> <h2 class=\"name\">' + tin_names[i][j] + '</h2>';
        newTin += '<h3 class=\"cost\"></h3> </hgroup></article>';
    }
}
position.innerHTML = newTin;

//Finds all cost items in HTML
var costItems = document.querySelectorAll('h3.cost');
//Sets default cost to $65
for(var i = 0; i < costItems.length; i++)
{
    costItems[i].textContent = '$' + price;
}

/*
//Finds all name items in HTML
var nameItems = document.getElementsByClassName('name');
//Sets all tin names to array of names
for(var i = 0; i < nameItems.length; i++)
{
    nameItems[i].textContent = tin_names[i];
}
*/

/*
//Finds all name items in HTML
var imageItems = document.getElementsByClassName('img');
//Sets all tin names to array of names
for(var i = 0; i < imageItems.length; i++)
{
    var link = '<img src=\"tinImages/' + tin_images[i] + '\"/>';
    imageItems[i].innerHTML = link;
}
*/
