'use-strict'

let HS = document.querySelector('.HS')
let GS = document.querySelector('.GS')
let HB1 = document.querySelector('.HB1')
let HB2 = document.querySelector('.HB2')
let HB3 = document.querySelector('.HB3')
let GB1 = document.querySelector('.GB1')
let GB2 = document.querySelector('.GB2')
let GB3 = document.querySelector('.GB3')
let NG = document.querySelector('.NG')

HB1.addEventListener('click', function(){
    HS.innerText = Number(HS.innerText) + 1
})
HB2.addEventListener('click', function(){
    HS.innerText = Number(HS.innerText) + 2
})
HB3.addEventListener('click', function(){
    HS.innerText = Number(HS.innerText) + 3
})
GB1.addEventListener('click', function(){
    GS.innerText = Number(GS.innerText) + 1
})
GB2.addEventListener('click', function(){
    GS.innerText = Number(GS.innerText) + 2
})
GB3.addEventListener('click', function(){
    GS.innerText = Number(GS.innerText) + 3
})
NG.addEventListener('click', function(){
    document.location.reload() })

