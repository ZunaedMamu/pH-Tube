console.log("Video.js added");

/***
 * Fetch, Load, Show Category
 */
const loadCategory =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data =>displayCategory(data.categories))
    .catch(err => console.log(err))

}

const loadCategoryVideos = (id)=>{
//   alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(res => res.json())
  .then(data =>displayVideos(data.category))
  .catch(err => console.log(err))
}

const displayCategory = (categories)=>{
    const categoryContainer = document.getElementById('category')
    categories.forEach((item) => {
        console.log(item);
        // create button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML=`
        <button onclick="loadCategoryVideos(${item.category_id})" class="btn">${item.category}</button>
        `
        // button.innerText = item.category;
        categoryContainer.append(buttonContainer)
    })
    // console.log(data);
}


const loadVideo =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(err => console.log(err))
}
// const cardDemo ={
//     category_id: "1001",
//     video_id: "aaab",
//     thumbnail: "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     title: "Midnight Serenade",
//     authors: [
//         {
//             profile_picture: "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             profile_name: "Noah Walker",
//             verified: false
//         }
//     ],
//     others: {
//         views: "543K",
//         posted_date: ""
//     },
//     description: "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }
function getTime(time){
    const hour = parseInt(time /3600);
    const remainingSec = parseInt(time % 3600);
    const min = parseInt(remainingSec / 60);
    const sec = parseInt(remainingSec % 60)

    return `${hour}:${min}:${sec}`;
}

const displayVideos =(videos) =>{
    const videoContainer = document.getElementById("video")
    videoContainer.innerHTML ="";
    if(videos.length === 0){
        videoContainer.classList.remove("grid")
        videoContainer.innerHTML =`
        <div class="min-h-[300px] w-full flex flex-col justify-center items-center gap-5">
        <img src="design/icon.png">
        <h2 class="text-center text-2xl font-extrabold">No Content here</h2>
        </div>
        `;
        return;
    }
    else{
        videoContainer.classList.add("grid")
    }
    
    videos.forEach((video) => {
        console.log(video);
        // display part
        const card = document.createElement("div");
        card.classList= "card card-compact";
        card.innerHTML =` 
         <figure class="h-[200px] mb-2 relative">
                <img class="w-full h-full object-cover"
                src=${video.thumbnail}
                alt="Video" />
                ${video.others.posted_date?.length == 0? "": `<span class="absolute bg-[#000000a8] text-gray-300 rounded-sm text-xs right-2 bottom-2 p-1">${getTime(video.others.posted_date)}</span>`}
            </figure>
            
           
            <div class="px-0,py-2 gap-2 flex">  
               <div class=""><img class="w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}>
               </div> 
               <div> 
               <h2 class="card-title font-bold">${video.title}</h2>        
                <div class="flex items-center gap-2">
                    <p>${video.authors[0].profile_name}</p> 
                    ${video.authors[0].verified === true ?`<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">`:" "}
                </div>
                <p>${video.others.views}</p>
                </div>
                
            </div>`;
   
        videoContainer.append(card);
    })
    // console.log(videos)
}


loadCategory();
loadVideo();
