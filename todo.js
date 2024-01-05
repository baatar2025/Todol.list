//savlah object
const sav1=document.getElementById('sav1');
const sav2=document.getElementById('sav2');
const sav3=document.getElementById('sav3');
const sav4=document.getElementById('sav4');
//hrgggui
const boxs=document.querySelectorAll('.box88');
const boxes=document.querySelectorAll('.textcenter');
const h2=document.querySelectorAll('.h2');
const span=document.querySelectorAll('span');
const sav=document.querySelectorAll('.box');
//garaas utga avj bui heseg
const input1=document.getElementById('input1')
const input2=document.getElementById('input2')
//selecttuud
const select1=document.getElementById('select1');
const select2=document.getElementById('select2');
//ustagdag sav
const deletesav=document.querySelector('.deletesav');
//hashaa gedgee
const utga1=boxes[0].children[0].textContent;
const utga2=boxes[1].children[0].textContent;
const utga3=boxes[2].children[0].textContent;
const utga4=boxes[3].children[0].textContent;

var state={
    task:[]
};
//tooloh
const k1=0,k2=0,k3=0,k4=0;
function button(){
    sav1.innerHTML=""; sav2.innerHTML=""; sav3.innerHTML="";  sav4.innerHTML="";  
   
    state.task.forEach((task) =>{
        const divf=document.createElement('div');
        const H1=document.createElement('h4');
        const p=document.createElement('p');
        const div1=document.createElement('button');
        const div2=document.createElement('div');
        const div3=document.createElement('button');
        const deleets=document.createElement('button');
        const deletebox=document.createElement('div');
        const tuvshin=document.createElement('button');

        //utga onooj ogj bga hsg
        tuvshin.textContent=task.selectt;
        H1.textContent=task.Text1;
        p.textContent=task.Text2;   
        //icon hiih hesg
        div1.setAttribute('onclick','Done(e)')
        div1.setAttribute('class',"fa-solid fa-check");
        divf.setAttribute('draggable', 'true');
        div3.setAttribute('class',"fa-regular fa-file-lines");
        deleets.setAttribute('class',"fa-solid fa-trash");
        deleets.setAttribute('onclick','deletethis(event)');
        deleets.setAttribute('id','thisdelete');
        div1.classList.add('borderr');
        div3.classList.add('borderr');
        deleets.classList.add('borderr');
        divf.classList.add('contentborder');
        tuvshin.classList.add('btnborder');
        //savlj bga hesg
        deletebox.append(div3,deleets);
        deletebox.classList.add('grid');
        div2.append(H1,p,tuvshin);
        divf.append(div1,div2,deletebox);
        //class css oroh hesg
        divf.classList.add('content');
        //eventuud
            if(task.selected===utga1){
                sav1.classList.add('text');
                sav1.appendChild(divf);
            }
            else if(task.selected===utga2){
                sav2.classList.add('text');
                sav2.appendChild(divf);
            }
            else if(task.selected===utga3){
                sav3.classList.add('text');
                sav3.appendChild(divf);
            }
            else{
                    sav4.classList.add('text');
                    sav4.appendChild(divf);
                }  
                console.log(divf)
            deleets.addEventListener('click',((e)=>{
              console.log('zaza');
            }))
    })
        console.log(deletesav);
        
} 
//delete div
function Done(e){
console.log(e.target)
}
function deletethis(event){
   let idss=event.target.id.parent;
   console.log(idss)
};

function add(){
    if(!input1.value && !input2.value){alert('taska oruul uu')}
    else{
    state.task.push({Text1:input1.value, Text2:input2.value, selected:select1.value, selectt:select2.value});
    input1.value="";
    input2.value="";
    const ai=document.getElementById('inputanket');
    ai.style.display='none';
    button();
    }
}
function dar(){
    const ai=document.getElementById('inputanket');
    ai.style.display='block';
    ai.classList.add('block');
}
// drag and drop
// const start=(e)=>{
//     console.log('start',e.target.id)
//     e.datatransfer.setdata("text/plain",e.target.id)
// };
// const over=(e)=>{
//     console.log('dragover',)
// }
// const drop= (e)=>{
//     console.log('drop');
// }
// boxs[0].addEventListener('dragstart',start);
// boxs[1].addEventListener('dragover',over);
// boxs[1].addEventListener('drop',drop);
