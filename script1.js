const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');
const boxes = document.querySelectorAll('.box');

searchBtn.addEventListener('click', function(){
  if(search.classList.contains('active')){
    searchBox.value = ''
  }
  else {
    search.classList.add('active');
    searchBox.focus();
  }
})

closeBtn.addEventListener('click', function(){
  search.classList.remove('active');
  searchBox.value = '';
})

searchBox.addEventListener('input', function(){
  const searchTerm = searchBox.value.toLowerCase();
  boxes.forEach(function(box){
    const heading = box.querySelector('h2').innerText.toLowerCase();
    const paragraph = box.querySelector('p').innerText.toLowerCase();
    if(heading.includes(searchTerm) || paragraph.includes(searchTerm)){
      box.style.display = 'block';
    }
    else {
      box.style.display = 'none';
    }
  })
})