function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list li');
  let arr = [...list];

  arr.forEach(function (element){
    element.innerHTML = parseInt(element.innerHTML)+n
    console.log(element.innerHTML)
  })
}



function deepestChild(){
  return document.querySelectorAll('div')[9]
}
