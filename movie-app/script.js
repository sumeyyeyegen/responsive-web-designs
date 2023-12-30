const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i) => {
  let counter=0;
  const itemLength = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click",() => {
    if(itemLength - (counter +3)>=0){
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-280}px)`;
      counter++;
    }
    else{
      movieLists[i].style.transform = `translateX(0)`
      counter = 0;
    }
    
  })
})


// dark mode 

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.header i,.header,.sidebar i,.toggle,.menu-list li a,.movie-list-title,.movie-list-filter select,.toggle-ball")
console.log('items',items);
ball.addEventListener("click", () =>{
 ball.classList.forEach(item => {
  if (item =="left-3") {
    ball.classList.remove("left-3");
    ball.classList.add("right-3");
    items.forEach(classs => {
      console.log('class',classs);
      return classs.classList.add("active");
    })
  }else if(item =="right-3"){
    ball.classList.remove("right-3")
    ball.classList.add("left-3");
    items.forEach(classs => {
      console.log('class',classs);
     return classs.classList.remove("active");
    })
    
  }else{
    return ball.classList+=" left-3";
  }
})
})