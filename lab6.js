document.getElementById("load-btn").addEventListener("click", ()=>{
    fetch("https://brianobruno.github.io/cats.json")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("cat-image").src = data.catPhoto
    })
})