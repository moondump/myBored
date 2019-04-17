class App {

constructor() {
    this.adapter = new Adapter();
  }

  attachEventListeners() {
    document.querySelector('#item-list').addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const item = Item.findById(id);

      document.querySelector('#update').innerHTML = item.renderUpdateForm();
      });


       document.querySelector('#update').addEventListener('submit', e => {
       e.preventDefault();
       const id = parseInt(e.target.dataset.id);
       const item = Item.findById(id);
       console.log(item)
       const title = e.target.querySelector('#title').value;
       const category = e.target.querySelector('#category').value;
       const url = e.target.querySelector('#url').value;
       const image = e.target.querySelector('#image').value;
       const jsonBody = { title, category, url, image };
       this.adapter.updateItem(item.id, jsonBody).then(updatedItem => console.log(updatedItem));
  });
}
  addItems() {
    document.querySelector('#item-list').innerHTML = '';
    Item.all.forEach(
      item => (document.querySelector('#item-list').innerHTML += item.renderListItem())
    );
  }

  handleFormSubmit(e) {
    this.adapter.updateItem(item.id, bodyJSON).then(updatedItem => {
      const item = Item.findById(updatedItem.id);
      item.update(updatedItem);
      this.addItems();
    });
  }
}
