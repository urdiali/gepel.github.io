const handleScroll = () => {
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
}

const buttonElement = document.getElementById("button-top");
buttonElement.onclick = handleScroll;

function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByName('ponto');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}