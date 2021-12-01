import "../css/style.scss";
import { nanoid } from "@reduxjs/toolkit";
import store from "./data";
import { addItem, deleteItem } from "./data/form";

const numberInput = document.querySelector("#number");
const productInput = document.querySelector("#products");
const form = document.querySelector("form");
const list = document.querySelector(".list");

form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(
    addItem({
      id: nanoid(),
      count: +numberInput.value,
      productName: productInput.value,
    })
  );

  console.log(store.getState().basketState);
  numberInput.value = "";
  productInput.value = "";
};

list.onclick = function (e) {
  e.preventDefault();
  store.dispatch(deleteItem(e.target.dataset.id));
};
console.log(store.getState().basketState);
const render = () => {
  list.innerHTML = store
    .getState()
    .basketState.map(
      (obj) =>
        `<div>
          <li class="list__item">
            <span>${obj.count}</span>
             X 
            <span>${obj.productName}</span>
            
          </li>
          <button class="delete" data-id="${obj.id}">DEL</button>
         </div>`
    )
    .join("");
};

render();
store.subscribe(render);
