

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"; // Bring most popular movies on UI
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // bring searched movies

    const movieBox = document.querySelector("#movie-box")
    const getMovies = async(api)=>{
        const response = await fetch(api);
        const data =  await response.json(); 
       
     //  console.log(data.results[0]);
      showMovies(data.results);
    }


    getMovies(APIURL);

    const showMovies = (nextData)=>{
        movieBox.innerHTML = ""; // it will clean the UI page that shows popular movies beacuse initial function is as getMovies(APIURL)
      //  console.log(nextData[0].original_language);
      nextData.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
        <img src="${IMGPATH+item.poster_path }" alt="">
        <div class="overlay">
            <div class="title">
                <h2>${item.original_title}</h2>
                <span>${item.vote_average}</span> 
            </div>
            <h3>overview</h3> <br>
            <P>${item.overview}</P>
        </div>
        
        `;
   movieBox.appendChild(box);
      });
    }

    document.querySelector("#search").addEventListener("keyup", function(event){
//console.log(event.target.value)
if(event.target.value!==""){
    getMovies(SEARCHAPI+event.target.value)
}
else{
   
    getMovies(APIURL);
}

    })


  

    const search = document.querySelector("#search")
    document.querySelector(".btn").addEventListener("click",function(event){
  //   console.log(search.value)
  search.value="";
  getMovies(APIURL);
    })

   gsap.from(".btn",{
     x:610,
     duration:3,
     delay:1,
     opacity:0
   })
   gsap.to("#search",{
    x:590,
    duration:3,
    delay:1,
    
  })
  gsap.from(".row",{
    y:590,
    duration:3,
    delay:1,
    opacity:0
  })
  