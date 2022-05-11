const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
liste = document.querySelector(".list-group") ;
console.log(liste.style.backgroundColor)
console.log(liste.firstElementChild.style.backgroundColor )


for ( let i = 0  ; i<= liste.children.length ; i++ ){
    console.log("Hello")
    liste.children[i].addEventListener("click", function(){
        liste.children[i].style.backgroundColor = random_hex_color_code() ;
    })

}


