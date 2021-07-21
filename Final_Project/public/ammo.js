//
function callnineMM(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("test").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "/getWebScrape", true);
xhttp.send();
}

// create the basic layout of the page

//title
const mainTitle = document.createElement('h1');
mainTitle.innerText = "Ammo pricing"
document.body.appendChild(mainTitle);

// handgun part
const hgtitle = document.createElement('h2')
hgtitle.innerText = 'Search popular handgun ammo:'

const nineMM = document.createElement('button');
nineMM.innerText = '9mm';
nineMM.id = "search";
nineMM.addEventListener('onClick', callnineMM());

const fortyfive = document.createElement('button');
fortyfive.innerText = '45';
fortyfive.id = "search";

const handGun = document.createElement('div');
document.body.appendChild(handGun);
handGun.append(hgtitle, nineMM, fortyfive);

// rifle part
const rtitle = document.createElement('h2')
rtitle.innerText = 'Search popular rifle ammo:'

const twotwothree = document.createElement('button');
twotwothree.innerText = '.223';
twotwothree.id = "search";
document.body.appendChild(twotwothree);

const sevensixtwo = document.createElement('button');
sevensixtwo.innerText = '7.62';
sevensixtwo.id = "search";
document.body.appendChild(sevensixtwo);

const rifle = document.createElement('div');
document.body.appendChild(rifle);
rifle.append(rtitle, twotwothree, sevensixtwo);
