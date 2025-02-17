let meme = document.getElementById("meme")
let title = document.getElementById("title")
let change = document.getElementById("change")

let url= `https://meme-api.com/gimme/`

let subreddits = ["dankmemes","wholesomememes","catmemes","dogmemes","me_irl"]

getmemes()
function getmemes(){

    let randomMeme = subreddits[Math.floor(Math.random() * subreddits.length)]
    // console.log(randomMeme)


    fetch(url+randomMeme).then(res => res.json()).then((data) => {
        console.log(data)
    })

    
}




change.addEventListener("click",function(){
    getmemes()
})

window.addEventListener("load",function(){
    getmemes()
})