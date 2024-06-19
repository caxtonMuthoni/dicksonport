'use strict'


const moreButton = document.querySelector('.more_button');
moreButton.addEventListener('click', function () {
    alert('Learn more about Dickson');
})


const languages = ['c++', 'javascript', 'c#', 'python'];
languages.forEach((lang) => {
    console.log(`you can choose to start with ${lang}`)
})
