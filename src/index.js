const addBtn = document.getElementById('new-button')
const addForm = document.querySelector('.itemForm')
const cancelButton = document.getElementById('cancel')
let addItem = false;

// on load, renders items currently saved
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

    app.adapter.fetchItems().then(json => {
      json.forEach(item => {
        document.querySelector('.item-list').innerHTML += new Item(item).renderListItem();
      });
    });
  });

  addBtn.addEventListener('click', () => {
    addItem = !addItem
    if (addItem) {addForm.style.display = 'block'
      addForm.addEventListener('submit', createItem)
    } else {
      addForm.style.display = 'none'
    }
  });


  function createItem(e) {
  e.preventDefault();
  addForm.style.display = 'none'
  let inputs = document.querySelectorAll(".input-text");
  console.log(inputs)
  let title = inputs[0].value
  let category = inputs[1].value
  let link = inputs[2].value
  let image = inputs[3].value

  let info = {
    title: title,
    category: category,
    url: link,
    image: image
  }

  fetch("http://localhost:3000/api/v1/items", {
    method: "POST",
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(info)
  }).then(res => res.json()).then(renderListItem())

}
