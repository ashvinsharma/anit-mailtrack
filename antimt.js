function listenForClicks() {
    document.addEventListener("click", (e) => {
        var ele = document.querySelector(".mt-signature");
        if(ele !== undefined)
            ele.remove();
    })
} 

listenForClicks()