


// 1.  What is Function Statement ?
// A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//       For Ex  -  function xyz(){
//                             console.log("Function Statement");
//                        }

// 2.  What is Function Expression ?
// A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
//       For Ex - var a = function(){
//                             console.log("Function Expression");
//                     }

// 3.  What is Anonymous Function ?
// A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
//       For Ex - function(){
//                      }



// 4.  What is Named Function Expression ?
// A.  A function with a name is known as Named Function Expression.
//       For Ex - var a = function xyx(){
//                             console.log("Names Function Expression");
//                      }


// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );


// 6.  What is First Class Function Or First class citizens?
// A.   The Ability of use function as value,
// *     Can be passed as an Argument,
// *     Can be executed inside a closured function &
// *     Can be taken as return form.
//        For Ex - var b = function(param){
//                              return function xyz(){
//                                      console.log(" F C F ");
//                              }
//                      } 


/*--------Closure----------*/

function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    y();

}

x();


/*--------Closure close----------*/

/*--------Hoisting----------*/

 

/*--------Hoisting close----------*/


/*--------Map Function----------*/

// var arr=[2,4,6]

// var a =arr.map(double);

// function double(a){
//     return a*2;
// }
// console.log(a)

/*--------Map Function close----------*/


/*--------Filter Function----------*/

// var arr=[7,2,4,6,1,3,5]

// var a =arr.filter(odd);

// function odd(x){
//     return x%2;
// }
// console.log(a)

/*--------Filter Function close----------*/


/*--------Reduce Function----------*/

// const numbers = [175, 50, 25];

// var a = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

// console.log(a)

/*--------Reduce Function close----------*/

/*----------Event Deligation----------------*/

// var a = document.querySelector("#category").addEventListener('click',(e) =>{
//     console.log(e.target.id)

//     window.location.href="file:///D:/jstest/"+ e.target.id

// })

/*----------Event Deligation close----------------*/



/*-------------Lexical Env.--------------*/



/*-------------Lexical Env. close--------------*/



/*-----------------Async Function------------*/

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();

/*-----------------Async Function close------------*/


/*--------------Web Component----------------------*/

// class UserCard extends HTMLElement{
//     constructor(){
//         super();
//         document.getElementById("dd").innerHTML= `<select>
//                             <option>Test </option>
//                          </select>   `;
//     }
// }
// window.customElements.define('user-card', UserCard)

/*--------------Web Component close----------------------*/