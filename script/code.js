let zero = 0;
 let operator = "";
 let sum = "";
// let results = 



// function display (value){
//     results.value += value ;
// }

//clear ac
// this is clearing everything
// function clear(){
//     results.value = "";
// }

// document.querySelector('#clear')
// .addEventListener('click',()=>{
//     clear();
// }) 

// //de
// // this deletes one value at a time
// document.querySelector('#DE') .addEventListener('click',()=>{
//     let showup = results.value ;
//     results.value = output.slice(0 ,-1)

// })

// // div
// // this is to divide the values
// document.querySelector('#div') .addEventListener('click',()=>{
//     op= results.value ;
//     operator = "/";
//     clear()

// })


// function display(value) {result.value
//     +=value;
// }

// function remover() {result.value
//     ='';}

let displayElement= document.querySelector('#display');
function del()  {
sum = sum.slice(0, -1);
document.getElementById('disp').value = document.getElementById('disp').value.slice(0, -1);

}



let result= document.querySelector('#screen-out');
function display(value) {result.value +=value   }


let plus= document.querySelector('#add');

function add() {result.value +=value
       ='+'; }


             function minus() {result.value +=value
            ='-';
       }
        
//         function times() {result.value +=value
//             ='*'; }
//         function dev() {result.value +=value
//                 ='/'; }

//     

// function calculate(){
//      result.value = eval(result.value)
//  }

document.querySelector("#calculate").
addEventListener("click", ()=>{
    result.value = eval(result.value).toFixed(2);
})