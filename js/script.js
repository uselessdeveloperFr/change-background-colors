'use strict'
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'black', 'yellow', 'pink', 'purple', 'blue']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length+1)
body.style.backgroundColor = colors[colorIndex]}

