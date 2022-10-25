// let age=1;
// if (age==14) {
//     console.log('Нет, маленькая жирная жопа')
// } else if(age==16){
//     console.log('Захади')
// } else if(age<14){
//     console.log('Пиздюк')
// }else{
//     console.log('Захади опять')
// }

// let age1 = 15,
//     age2 = 18

// if(age1>=18 && age2>=18){
//     console.log('Вы прошли, красавы кенты')
// }else{
//     alert('Низя, кто-то пиздюк')
// }

// let block = document.querySelector('.aboutUs .aboutUsBlock .info-block .block');
// console.log(block)


let h2 = document.querySelector('.aboutUs .aboutUsBlock h2')
// h2.style.fontSize = '50px';
// h2.style.background='violet';
// h2.style.paddingTop='30px';
// h2.classList.add('error')

// let news = $('.news .newsBlock .info-block .block1').eq(1)
let news = $('.news .newsBlock .info-block .block1')
// news.css({
//     'background-color':'violet',
//     'padding':'50px'
// })
// news.addClass('error')

$('.news .newsBlock .info-block .block1 .btnEditColor').on('click', function(){
    // news.addClass('error')
    news.toggleClass('error')
    editText();
})

function editText(){
    let btnText=$('.news .newsBlock .info-block .block1 .btnEditColor');
    if(btnText.val()=='Замена текста'){
        btnText.val('Мяу мяу')
    }else{
        btnText.val('Замена текста')
    }
}