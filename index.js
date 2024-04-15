const index=window.location;
console.log(index)=document.querySelectorAll('nav a').
forEach(link => {
    if(link.href.includes(`&{index}`)){
        link.classList.add('active');
    }
})