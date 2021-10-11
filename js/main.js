let retingManzil = document.querySelector(`.list`);

// ! Boburbek's Code;
const elList = document.querySelector("#list");
const elForm = document.querySelector("#searchForm");
const elInput = elForm.querySelector("#input");
// ? Render Starter Function Start
function renderFunction(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        let newli = document.createElement(`li`);
        let newimg = document.createElement(`img`);
        let h1 = document.createElement(`h1`);
        let newDiv = document.createElement(`div`);
        let newDiv1 = document.createElement(`div`);
        // !Kamron codes==================;
        let newBox = document.createElement('div');
        newBox.classList.add('films-item-box');
        newli.classList.add('films-item');
        newimg.classList.add('films-img');
        h1.classList.add('films-title');
        newDiv.classList.add('buttons');
        newDiv.classList.add('effect');
        newDiv.classList.add('films-btn');
        newDiv1.classList.add('button');
        newDiv1.setAttribute('id', 'seven');
        //! =============================
        newimg.setAttribute(`src`, arr[i].posterurl);
        h1.textContent = arr[i].title;
        newDiv1.textContent = "More";
        newli.appendChild(newimg);
        newBox.appendChild(h1);
        newBox.appendChild(newDiv);
        newli.appendChild(newBox);
        newDiv.appendChild(newDiv1);
        newDiv1.dataset.uuid = arr[i].posterurl;
        element.appendChild(newli);
        newimg.addEventListener(`error`, (e) => {
            let zay = e.path[2]
            zay.style.display = `none`
        })
        newDiv1.addEventListener(`click`, modalRender)
    }
}
// ? Render Starter Function End

// * Using Render Starter Function start
renderFunction(movies, elList)
// * Using Render Starter Function start
let Search_manzil = document.querySelector(`.item-search`)
elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const KEY = "162f1067"
    async function filmsFunction(element) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${elInput.value}`);
        let date = await response.json()
        console.log(date.Search);
        for(let i = 0; i < date.Search.length; i++){
            let Snewli = document.createElement(`li`);
            let Snewtitle = document.createElement(`h2`);
            let Snewp = document.createElement(`p`);
            let Snewimg = document.createElement(`img`);
            let Snewdiv = document.createElement(`div`);
            Snewtitle.textContent = date.Search[i].Title;
            Snewp.textContent = date.Search[i].Year;
            Snewimg.setAttribute(`src`, date.Search[i].Poster);
            Snewdiv.appendChild(Snewtitle);
            Snewdiv.appendChild(Snewp);
            Snewli.appendChild(Snewimg);
            Snewli.appendChild(Snewdiv)
            Search_manzil.appendChild(Snewli);
            Snewimg.addEventListener(`error`, (e) => {
                let zay9 = e.path[1];
                zay9.style.display = `none`;
                console.log(zay9);
            })
        };
        
    };
    filmsFunction();
})

function renderGenres(arr,element) {
    arr.forEach(genreFilm => {
        let genreLi = document.createElement("li")
        let genreTitle = document.createElement("h4")
        let genreImg = document.createElement("img")
        let genreBtn = document.createElement("button");
        let spans =document.createElement('span');
        // ! Kamron codes =======
        let genresBox = document.createElement('div');
        genresBox.classList.add('genre-info-box');
        genreLi.classList.add('genre-item');
        genreTitle.classList.add('genre-titles');
        genreImg.classList.add('genre-img');
        genreBtn.classList.add('genre-btn');
        // !=====================
        genreTitle.textContent = genreFilm.title
        genreImg.setAttribute("src", genreFilm.posterurl)
        spans.textContent = "More"

        genresBox.appendChild(genreTitle)
        genreLi.appendChild(genreImg)
        genresBox.appendChild(genreBtn);
        genreBtn.appendChild(spans);
        genreLi.appendChild(genresBox);

        element.appendChild(genreLi)

        
        genreImg.addEventListener(`error`, (e) => {
            let zay1 = e.path[1]
            console.log(zay1)
            zay1.style.display = `none`
            
        })
    });
    
}
let generesAdres = document.querySelector(`.genres-render`);
let newH2 = document.querySelector('#new-title');

let Jdramma = document.querySelector(`.dramma`)
let Jtriller = document.querySelector(`.triller`)
let Jromentic = document.querySelector(`.romentic`)
let Jaction = document.querySelector(`.action`)
let Jdocumentary = document.querySelector(`.documentary`)
let Jhoror = document.querySelector(`.horor`)
let Janimation = document.querySelector(`.animation`)
let Jcomedy = document.querySelector(`.comedy`)
let Jadvature = document.querySelector(`.advature`)

Jdramma.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Drama';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(drama, generesAdres)
})
Jtriller.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Triller';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(triller, generesAdres)
})
Jromentic.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Romantic';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(romantic, generesAdres)
})
Jaction.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Action';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(action, generesAdres)
})
Jdocumentary.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Documentary';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(documentR, generesAdres)
})
Jhoror.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Horror';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(Horror, generesAdres)
})
Janimation.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Animation';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(Animation, generesAdres)
})
Jcomedy.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = 'Comedy';
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(comedy, generesAdres)
})
Jadvature.addEventListener(`click`, () => {
    generesAdres.innerHTML = null
    newH2.textContent = "Adventure";
    generesAdres.style.display = 'flex'
    generesAdres.classList.add('opacity');
    renderGenres(advanture, generesAdres)
});

// ! Modal for Log In
const loginModal = document.querySelector(".logIn-modal")
const logBtn = document.querySelector("#loginBtn")
const logInBtn = document.querySelector("#login-btn")
const loginCloseBtn = document.querySelector("#login__close-btn")

logBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    
    loginModal.classList.add("logIn-modal--active")
})
loginCloseBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    loginModal.classList.remove("logIn-modal--active")
})

logInBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    const userInput = document.querySelector("#userName")
    
    let userName = userInput.value.trim()
    userInput.value = null
    console.log(userName);
    if(userName.length >= 5){
        window.localStorage.setItem("userName", userName)
    }else if(userName.length < 5 && userName.length > 0){
        alert("Invalid user name")
    }else{
        alert("Write something to send!")
    } 
});
// Modal 
let modalTitle = document.querySelector(`.modal-title`)
let modalReting = document.querySelector(`.modal-spanp`)
let modalJanr = document.querySelector(`.modal-spn`)
let modalText = document.querySelector(`.modal-text`)
let ModalImg = document.querySelector(`.modalImg`)
let vidModal = document.querySelector(`.manzil-vid`)
console.log(ModalImg)
let num = 1
function modalRender (e){
    vidModal.innerHTML = null
    
    let newmodalmg = document.createElement(`img`)
    let x = e.target.dataset.uuid
    let y = movies.find((e) => x == e.posterurl)
    modalTitle.textContent = y.title
    modalJanr.textContent = y.genres
    modalText.textContent = y.storyline
    newmodalmg.src = y.posterurl
    vidModal.appendChild(newmodalmg)
    // modal video 
    let setout = setTimeout(modalVideo,10000 )
    function modalVideo (){
        fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${y.title}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287"
	}
    
    }).then(res => res.json()).then(data => {
        vidModal.innerHTML = data.value[0].embedHtml
        let youtubee = document.querySelector(`.manzil-vid iframe`)
        youtubee.src += `&mute=1&controls=0`
        youtubee.width = `100%`
        youtubee.height = `100%`
    })
    }
}
// qoshimcha janr

function rederJanr8 (nomi, qayerga){
    for (let i = 0; i < nomi.length; i++) {
        let newli2 = document.createElement(`li`);
        let newimg2 = document.createElement(`img`);
        let h12 = document.createElement(`h1`);
        let newDiv2 = document.createElement(`div`);
        let newDiv12 = document.createElement(`div`);
        // !Kamron codes==================
        let newBox2 = document.createElement('div');
        newBox2.classList.add('films-item-box');
        newli2.classList.add('films-item');
        newimg2.classList.add('films-img');
        h12.classList.add('films-title');
        newDiv2.classList.add('buttons');
        newDiv2.classList.add('effect');
        newDiv2.classList.add('films-btn');
        newDiv12.classList.add('button');
        newDiv12.setAttribute('id', 'seven');
        //! =============================
        newimg2.setAttribute(`src`, nomi[i].poster_path);
        h12.textContent = nomi[i].title;
        newDiv12.textContent = "More";
        newli2.appendChild(newimg2);
        newBox2.appendChild(h12);
        newBox2.appendChild(newDiv2);
        newli2.appendChild(newBox2)
        newDiv2.appendChild(newDiv12);
        newimg2.addEventListener(`error`, (e) => {
            let zay5 = e.path[2];
            zay5.style.display = `none`;
            
        })
        newDiv12.dataset.uuid = nomi[i].poster_path;
        qayerga.appendChild(newli2);
        newDiv12.addEventListener(`click`, modalRender2);
    }
}
let masa25689 = document.querySelector(`#marvelMovies`);
rederJanr8(marvelMovies, masa25689);
function modalRender2 (e){
    let x = e.target.dataset.uuid;
    vidModal.innerHTML = null
    
    let newmodalmg = document.createElement(`img`)
    let y = marvelMovies.find((e) => x == e.poster_path);
    console.log(y);
    modalTitle.textContent = y.title;
    modalJanr.textContent = y.genres;
    modalText.textContent = y.overview;
    newmodalmg.src = y.poster_path
    vidModal.appendChild(newmodalmg)
    // ModalImg.src = y.posterurl
   
   
    // modal video 
    let setout = setTimeout(modalVideo,10000 );
    function modalVideo (){
        fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${y.title}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287"
	}
    
    }).then(res => res.json()).then(data => {
        vidModal.innerHTML = null
        vidModal.innerHTML = data.value[0].embedHtml
        let youtubee = document.querySelector(`.manzil-vid iframe`)
        youtubee.src += `&mute=1&controls=0`
        youtubee.width = `100%`
        youtubee.height = `100%`
    })
    }
};



function rederJanr9 (nomi, qayerga){
    for (let i = 0; i < nomi.length; i++) {
        let newli2 = document.createElement(`li`);
        let newimg2 = document.createElement(`img`);
        let h12 = document.createElement(`h1`);
        let newDiv2 = document.createElement(`div`);
        let newDiv12 = document.createElement(`div`);
        // !Kamron codes==================
        let newBox2 = document.createElement('div');
        newBox2.classList.add('films-item-box');
        newli2.classList.add('films-item');
        newimg2.classList.add('films-img');
        h12.classList.add('films-title');
        newDiv2.classList.add('buttons');
        newDiv2.classList.add('effect');
        newDiv2.classList.add('films-btn');
        newDiv12.classList.add('button');
        newDiv12.setAttribute('id', 'seven');
        //! =============================
        newimg2.setAttribute(`src`, nomi[i].poster_path);
        h12.textContent = nomi[i].title;
        newDiv12.textContent = "More";
        newli2.appendChild(newimg2);
        newBox2.appendChild(h12);
        newBox2.appendChild(newDiv2);
        newli2.appendChild(newBox2)
        newDiv2.appendChild(newDiv12);
        newimg2.addEventListener(`error`, (e) => {
            let zay6 = e.path[2];
            zay6.style.display = `none`;
           
        })
        newDiv12.dataset.uuid = nomi[i].poster_path;
        qayerga.appendChild(newli2);
        newDiv12.addEventListener(`click`, modalRender3);
    }
}

let DCdsfsd = document.querySelector(`#DC`);
rederJanr9(DC, DCdsfsd);

function modalRender3 (e){
    let x = e.target.dataset.uuid;
    vidModal.innerHTML = null
    
    let newmodalmg = document.createElement(`img`)
    let y = DC.find((e) => x == e.poster_path);
    console.log(y);
    modalTitle.textContent = y.title;
    modalJanr.textContent = y.genres;
    modalText.textContent = y.overview;
    // ModalImg.src = y.posterurl
    newmodalmg.src = y.poster_path
    vidModal.appendChild(newmodalmg)
   
   
    // modal video 
    let setout = setTimeout(modalVideo,10000 );
    function modalVideo (){
        fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${y.title}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287"
	}
    
    }).then(res => res.json()).then(data => {
        vidModal.innerHTML = null
        vidModal.innerHTML = data.value[0].embedHtml
        let youtubee = document.querySelector(`.manzil-vid iframe`)
        youtubee.src += `&mute=1&controls=0`
        youtubee.width = `100%`
        youtubee.height = `100%`
    })
    }
};



function rederJanr10 (nomi, qayerga){
    for (let i = 0; i < nomi.length; i++) {
        let newli2 = document.createElement(`li`);
        let newimg2 = document.createElement(`img`);
        let h12 = document.createElement(`h1`);
        let newDiv2 = document.createElement(`div`);
        let newDiv12 = document.createElement(`div`);
        // !Kamron codes==================
        let newBox2 = document.createElement('div');
        newBox2.classList.add('films-item-box');
        newli2.classList.add('films-item');
        newimg2.classList.add('films-img');
        h12.classList.add('films-title');
        newDiv2.classList.add('buttons');
        newDiv2.classList.add('effect');
        newDiv2.classList.add('films-btn');
        newDiv12.classList.add('button');
        newDiv12.setAttribute('id', 'seven');
        //! =============================
        newimg2.setAttribute(`src`, nomi[i].poster_path);
        h12.textContent = nomi[i].title;
        newDiv12.textContent = "More";
        newli2.appendChild(newimg2);
        newBox2.appendChild(h12);
        newBox2.appendChild(newDiv2);
        newli2.appendChild(newBox2)
        newDiv2.appendChild(newDiv12);
        newimg2.addEventListener(`error`, (e) => {
            let zay7 = e.path[2];
            zay7.style.display = `none`;
        })
        newDiv12.dataset.uuid = nomi[i].poster_path;
        qayerga.appendChild(newli2);
        newDiv12.addEventListener(`click`, modalRender4);
    }
}
let android_robot2 = document.querySelector(`#android_robot`)
rederJanr10(android_robot, android_robot2);

function modalRender4 (e){
    let x = e.target.dataset.uuid;
    vidModal.innerHTML = null
    
    let newmodalmg = document.createElement(`img`)
    let y = android_robot.find((e) => x == e.poster_path);
    console.log(y);
    modalTitle.textContent = y.title;
    modalJanr.textContent = y.genres;
    modalText.textContent = y.overview;
    // ModalImg.src = y.posterurl
    newmodalmg.src = y.poster_path
    vidModal.appendChild(newmodalmg)
   
    // modal video 
    let setout = setTimeout(modalVideo,10000 );
    function modalVideo (){
        fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${y.title}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287"
	}
    
    }).then(res => res.json()).then(data => {
        vidModal.innerHTML = null
        vidModal.innerHTML = data.value[0].embedHtml
        let youtubee = document.querySelector(`.manzil-vid iframe`)
        youtubee.src += `&mute=1&controls=0`
        youtubee.width = `100%`
        youtubee.height = `100%`
    })
    }
};




function rederJanr11 (nomi, qayerga){
    for (let i = 0; i < nomi.length; i++) {
        let newli2 = document.createElement(`li`);
        let newimg2 = document.createElement(`img`);
        let h12 = document.createElement(`h1`);
        let newDiv2 = document.createElement(`div`);
        let newDiv12 = document.createElement(`div`);
        // !Kamron codes==================
        let newBox2 = document.createElement('div');
        newBox2.classList.add('films-item-box');
        newli2.classList.add('films-item');
        newimg2.classList.add('films-img');
        h12.classList.add('films-title');
        newDiv2.classList.add('buttons');
        newDiv2.classList.add('effect');
        newDiv2.classList.add('films-btn');
        newDiv12.classList.add('button');
        newDiv12.setAttribute('id', 'seven');
        //! =============================
        newimg2.setAttribute(`src`, nomi[i].poster_path);
        h12.textContent = nomi[i].title;
        newDiv12.textContent = "Ma'lumot";
        newli2.appendChild(newimg2);
        newBox2.appendChild(h12);
        newBox2.appendChild(newDiv2);
        newli2.appendChild(newBox2)
        newDiv2.appendChild(newDiv12);
        newimg2.addEventListener(`error`, (e) => {
            let zay8 = e.path[2];
            zay8.style.display = `none`;
            
        })
        newDiv12.dataset.uuid = nomi[i].poster_path;
        qayerga.appendChild(newli2);
        newDiv12.addEventListener(`click`, modalRender5);
    }
}
let Fantastic2 = document.querySelector(`#Fantastic`)
rederJanr11(Fantastic, Fantastic2);

function modalRender5 (e){
    let x = e.target.dataset.uuid;
    vidModal.innerHTML = null
    
    let newmodalmg = document.createElement(`img`)
    let y = Fantastic.find((e) => x == e.poster_path);
    console.log(y);
    modalTitle.textContent = y.title;
    modalJanr.textContent = y.genres;
    modalText.textContent = y.overview;
    // ModalImg.src = y.posterurl
    newmodalmg.src = y.poster_path
    vidModal.appendChild(newmodalmg)
   
    // modal video 
    let setout = setTimeout(modalVideo,10000 );
    function modalVideo (){
        fetch(`https://bing-video-search1.p.rapidapi.com/videos/search?q=${y.title}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "bing-video-search1.p.rapidapi.com",
		"x-rapidapi-key": "7cc114bb66mshed1b12c7c757e11p1ce9d5jsn862685503287"
	}
    
    }).then(res => res.json()).then(data => {
        vidModal.innerHTML = null
        vidModal.innerHTML = data.value[0].embedHtml
        let youtubee = document.querySelector(`.manzil-vid iframe`)
        youtubee.src += `&mute=1`
        youtubee.width = `100%`
        youtubee.height = `100%`
    })
    }
};

/* Typed js coding */
var typed = new Typed(".anime", {
  // Waits 1000ms after typing "First"
  strings: [
    "axravshan@gmail.com",
    "telegram: @axravshan",
    "telegram : komronbey_1718",
    "komronbeksunnatov1@gmail.com",
    "telegram: @Mominjon",
    "telegram: @Boburbek",
  ],

  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
  /* Typed js coding and */

