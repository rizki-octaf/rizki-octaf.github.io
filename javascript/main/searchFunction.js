// auto focus search
let inputFocus = document.getElementById('header_search-input');
inputFocus.focus();
inputFocus.select();

// enter button
let input = document.getElementById('header_search-input');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("header_search-botton").click();
    }
});

// autocomplate search 
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector('#header_search-input');
  
    const results = document.querySelectorAll(".header_search-item");
  
    const parent = document.querySelector('#header_search-list');
  
    parent.style.display = 'none';
  
    const writeInput = (e) => {
      input.value = e.target.innerHTML;
      e.target.parentElement.style.display = 'none';
    }
  
    const options = {
      parent : parent,
      noresultsmsg : true,
      onclick : writeInput,
      displayontype : 2,
      displayparent: 'block',
      hideparent: 'none',
      msgtag : 'div',
      msgtext : 'Result not found !'
    }
  
    lightSearch(input, results, options);
  });
  
  
  const lightSearch = (input, elements, options = {}) => {
    input.addEventListener('input', () => {
      let result = 0;
  
      for (const element of elements) {
        if (element.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
            element.style.display = options.display ? options.display : 'block';
            result++;
  
            if(options.onclick) {
              element.addEventListener('click', options.onclick);
            }
  
        } else {
            element.style.display = options.hide ? options.hide : 'none';
        }
      }
  
      if(options.displayontype) {
        if(input.value.length >= options.displayontype) {
          options.parent.style.display = options.displayparent ? options.displayparent : 'block';
        } else {
          options.parent.style.display = options.hideparent ? options.hideparent : 'none';
        }
      }
    });
}
