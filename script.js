'use script' ;
// Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает
//  число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, 
// пытаясь угадать, что же загадал компьютер.

// Если игрок ввел число, меньше загаданного,
//  компьютер должен написать 'введите число побольше', 
//  а если введено больше загаданного, то, соответственно, компьютер 
//  должен написать 'введите число поменьше'. 

let inp =document.querySelector('#inp1');
let btn = document.querySelector('#btn');
let p =  document.querySelector('#p');

let num = Math.round(Math.random()*100);
console.log(num);

function upRandom ()
{
    if (inp.value == num) {
        p.innerHTML = `You WIN !!!`
    }
    if( inp.value > num)
    {
        p.innerHTML = `введите число поменьше`
    }
    if( inp.value < num)
    {
        p.innerHTML = `введите число побольше`
    }
}
btn.addEventListener('click',function(){
    p.innerHTML = '' ;
    upRandom ();
}) ;