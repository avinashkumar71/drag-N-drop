const lists = document.getElementsByClassName('list');
const leftbox = document.getElementById('left');
const rightbox = document.getElementById('right');

for(let list of lists){
    list.addEventListener('dragstart',(event)=>{
        let selected = event.target;

        rightbox.addEventListener('dragover',(event)=>{
            event.preventDefault();
        });
        rightbox.addEventListener('drop',()=>{
            rightbox.appendChild(selected);
            selected = null;
        })

        leftbox.addEventListener('dragover',(event)=>{
            event.preventDefault();
        });
        leftbox.addEventListener('drop',()=>{
            leftbox.appendChild(selected);
            selected = null;
        })
    })
}