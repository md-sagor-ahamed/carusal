const image = document.querySelector(".image")
const text = document.querySelector(".text")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

const reviews = [
    {
        "photos" : "images/1.jpg",
        "text" : "Jasim Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/2.jpg",
        "text" : "kaisar Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/3.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/4.jpg",
        "text" : "sagor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/5.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/6.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/7.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/8.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
    {
        "photos" : "images/9.jpg",
        "text" : "sakib Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, ex."
    },
]
let count = 0

next.addEventListener("click", ()=>{
    if(count === reviews.length - 1){
        count = 0
    }else{
        count++
    }
    showItems(count)
})


prev.addEventListener("click", ()=>{
    if(count === 0){
        count = reviews.length - 1
    }else{
        count--
    }
    showItems(count)
})

function showItems(item){
    image.src = reviews[item].photos
    text.innerText = reviews[item].text
}