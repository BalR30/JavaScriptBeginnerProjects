let index = 0;

// Function to change color

function changeColors() {
    let colors = ["Orange", "Azure", "Yellow", "Seagreen", "Brown", "Burlywood", "Lavender", "purple", "Green"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length -1)
        index = 0;
    
}

