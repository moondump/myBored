class Item {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.category = data.category;
    this.image = data.image;
    this.url = data.url;
    Item.all.push(this);
  }

  renderListItem() {
    return `
    <div class="card" data-id=${this.id}>
      <img src="${this.image}" alt="image" width="100" height="100" id="img">
    </div>`;
  }

  // <h3>${this.title}
  //   <button data-id=${this.id}>edit</button>
  // </h3>
  // <p>
  // ${this.category}
  // </p>

  static findById(id) {
    return this.all.find(item => item.id === id);
  }

  renderUpdateForm() {
    return `
    <form data-id=${this.id}>
      <label>Title</label>
      <p>
        <input type="text" id="title" value="${this.title}"/>
      </p>
      <label>Category</label>
      <p>
        <input type="text" id="category" value="${this.category}" />
      </p>
      <label>Link</label>
      <p>
        <input type="text" id="url" value="${this.url}" />
      </p>
      <label>Image URL</label>
      <p>
        <input id="image" type="text" value="${this.image}" />
      </p>
      <button type='submit'>Save Item</button>
      <button type='button' id='delete'>Delete Item</button>
      <button type='button' id="cancel">Cancel</button>
    </form>
  `;
  }

  update({title, category, url, image}) {
   this.title = title;
   this.category = category;
   this.url = url;
   this.image = image;
 }

 delete(){
 deleteButton.addEventListener('click', () => {
 function removeElement(id) {
     var item = document.getElementById(id);
     return item.parentNode.removeChild(item);
 }
 })
}

}

Item.all = [];
