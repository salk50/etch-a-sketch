const container = document.querySelector('#container');
const chosen = document.querySelector('#chosen');
let pagesize = 400;
container.style.height = `${pagesize}px`;
container.style.width = `${pagesize}px`;
let x;

//the following listens to the input field value, which will set the size of the painting area




const size = document.querySelector("input");
const szbtn = document.querySelector("div > button");
    szbtn.addEventListener('click', () =>{
        const unit = document.querySelectorAll("#container > #sub");
        unit.forEach((removal) => {
            container.removeChild(removal);
        });
        if(size.value >= 1000){
            pagesize = 1000;
            console.log(pagesize);
            container.style.height = `${pagesize}px`;
            container.style.width = `${pagesize}px`;
            grid(pagesize/4);
        }
        else if(size.value < 200){
            pagesize = size.value;
            console.log(pagesize);
            grid(pagesize/4);
            container.style.height = `${pagesize}px`;
            container.style.width = `${pagesize}px`;
        }
        else{
            pagesize = size.value;
            console.log(pagesize);
            container.style.height = `${pagesize}px`;
            container.style.width = `${pagesize}px`;
            grid(pagesize/4);
        }
    });


function grid(a){
    for(i=0;i<a;i++){
        sub = document.createElement(`div`);
        sub.style.cssText = `display:flex; justify-content: center; align-items: center; flex-direction: column; height:auto`;
        sub.setAttribute("id", "sub");
        container.appendChild(sub);
        for(j=0;j<a;j++){
            subsub = document.createElement('div');
            subsub.style.cssText = `display:flex; flex-wrap: nowrap; height: auto;padding:2px; width: auto`;
            subsub.setAttribute("id", "subsub");
            sub.appendChild(subsub);
        };
    };

    const box = document.querySelectorAll("#container > div > div");
    box.forEach((div) => {
        div.addEventListener('mousedown', () => {
            x = 1;
            console.log('mouse down');
        });
        div.addEventListener('mouseover', () => {
            console.log('mouse over');
            if(x==1){
            div.style.backgroundColor = choice;}
        });
        div.addEventListener('mouseup', () => {
            x = 0;
            div.style.backgroundColor = 'none';
        });
    });
};

// pixel intialliser
grid(pagesize/4);




//the following is for choosing the color/eraser
const box = document.querySelectorAll("#container > div > div");
let choice = 'black';
chosen.style.backgroundColor = choice;
chosen.style.border = 'solid 1px black';
const colr = document.querySelectorAll("#tools > button");
colr.forEach((selection) => {
    selection.addEventListener('click', () =>{
        if(selection.id == 'clear'){
            clear();
        }
        else {
            console.log(selection.id);
            choice = `${selection.id}`;
            chosen.style.backgroundColor = `${selection.id}`; 
        };
    });
    selection.style.backgroundColor = `${selection.id}`;
});

//the following function clears the canvas

function clear() {
    const subunit = document.querySelectorAll("#subsub");
    subunit.forEach((uncolor) => {
        uncolor.style.backgroundColor = 'white';
    });
}


// the following will start the painting app
box.forEach((div) => {
    div.addEventListener('mousedown', () => {
        x = 1;
        console.log('mouse down');
    });
    div.addEventListener('mouseover', () => {
        console.log('mouse over');
        if(x == 1){ 
        div.style.backgroundColor = choice;};
    });
    div.addEventListener('mouseup', () => {
        x = 0;
        div.style.backgroundColor = 'none';
    });
});
