/*
Author: BR.
Project: Beautiful expanding Cards Effect using html, css, and JavaScript.
Date: 12-10-2024.
*/

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    // console.log(panel);
    panel.addEventListener('click', () => {
        // console.log('you clicked');
        removeActiveClasses()
        panel.classList.add('active');
        
    })
    
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}