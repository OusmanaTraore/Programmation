function generateSentence(desc,arr){
    let baseString = ` The ${arr.length} ${desc} are `
    const lastIndex= arr.length -1
    for (let i =0 ; i< arr.length ; i++) {
        if(i === lastIndex){
            baseString += arr[i]
        }else {
            baseString += arr[i] + ", "
        }
    }
}

/**
 *  RENDER IMAGES
 */

const images = [
    "Card Project/fleuve.jpg",
    "Card Project/fleuve2.jpg",
    "Card Project/flore.jpg"
]

const container = document.getElementById("container");

function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < images.length; i++) {
        imgsDOM += `<img class="team-img" src="${images[i]}">`
    }
    container.innerHTML = imgsDOM
}


renderImages()