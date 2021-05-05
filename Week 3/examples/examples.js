
/*
function doSomething(){
    console.log('Something Happened!');
}



function doSomething(event){
    console.log(event.target);
}

function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

addEventListener('click', doSomething);
*/
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

addEventListener('keydown',highlight);
/*
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
*/

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
            console.log('Action canceled!');
        }
    });

addEventListener('click', (event) => {
        if (event.shiftKey) {
            console.log('A Shifty Click!');
        }
});


/* used for touch */
addEventListener('touchend', () => console.log('Touch stopped'));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

/*
// bubbling 
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

// capturing 
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
*/

// capturing  -- both at the same time
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
// bubbling -- both at the same time
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

// stop the bubbling
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);

ulElement.addEventListener('click',highlight);