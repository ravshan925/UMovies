
let advanture = []
let action = []
let triller = []
let drama = []
let romantic = []
let documentR = []
let Animation = []
let comedy = []
let Horror = []

for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Adventure`)){
        advanture.push(movies[i])
       }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Comedy`)){
        comedy.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Animation`)){
        Animation.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Biography`)){
        documentR.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Romance`)){
        romantic.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if (movies[i].genres.includes(`Drama`)){
        drama.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Thriller`)){
        triller.push(movies[i])
    }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Horror`)){
        Horror.push(movies[i])
        }
}
for(let i = 0; i < movies.length; i++){
    if(movies[i].genres.includes(`Action`)){
        action.push(movies[i])
    }
}
