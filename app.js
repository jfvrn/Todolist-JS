"use strict";

const container = document.querySelector("main");
const textInput = document.querySelector("#input-todo");
const category = document.querySelectorAll(".category");
const homeCategory = document.querySelector('div[data-category="home"]');
const workCategory = document.querySelector('div[data-category="work"]');
const funCategory = document.querySelector('div[data-category="fun"]');
const todolistElement = document.querySelectorAll("li");
const deleteBtn = document.querySelector(".button-done");

//insertion d'un nouveau todo
textInput.addEventListener("keyup", logKey);

function logKey(e) {
  if (e.key === "Enter" && textInput.value) {
    
    //catégorie "home"
    if (document.querySelector('div[data-category="home"]').getAttribute('data-selected') === 'true') {
        const html = `
        <li data-category="home" data-done="false">
              ${textInput.value}
              <div class="button-done">❌</div>
            </li>
        `;
        list.insertAdjacentHTML("afterbegin", html);
        textInput.value = ""; 
    }

    //catégorie "work"
    if (document.querySelector('div[data-category="work"]').getAttribute('data-selected') === 'true') {
        const html = `
        <li data-category="work" data-done="false">
              ${textInput.value}
              <div class="button-done">❌</div>
            </li>
        `;
        list.insertAdjacentHTML("afterbegin", html);
        textInput.value = ""; 
    }

    //catégorie "fun"
    if (document.querySelector('div[data-category="fun"]').getAttribute('data-selected') === 'true') {
        const html = `
        <li data-category="fun" data-done="false">
              ${textInput.value}
              <div class="button-done">❌</div>
            </li>
        `;
        list.insertAdjacentHTML("afterbegin", html);
        textInput.value = ""; 
    }
  }
}

//effacer un todo
document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("button-done")) {
        const todoElement = e.target.closest("li");
        todoElement.remove();
    }
  });

//élément de la todolist fait ou pas
document.body.addEventListener("click", (e) => {
    switch (e.target.dataset.done) {
        case "false":
            e.target.dataset.done = "true";
            break;
        case "true":
            e.target.dataset.done = "false";
            break;
      }
  });

//catégories
workCategory.addEventListener("click", function(){
    if (workCategory.dataset.selected = "false") {
        homeCategory.dataset.selected = "false";
        workCategory.dataset.selected = "true";
        funCategory.dataset.selected = "false";
    }  
})

funCategory.addEventListener("click", function(){
    if (funCategory.dataset.selected = "false") {
        homeCategory.dataset.selected = "false";
        workCategory.dataset.selected = "false";
        funCategory.dataset.selected = "true";
    }  
})

homeCategory.addEventListener("click", function(){
    if (homeCategory.dataset.selected = "false") {
        homeCategory.dataset.selected = "true";
        workCategory.dataset.selected = "false";
        funCategory.dataset.selected = "false";
    }  
})



  
  

