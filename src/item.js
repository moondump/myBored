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
    let item = document.createElement('div')
    item.classList.add('item-list')
    item.classList.add('moveable')
    item.classList.add('draggable')

    let img = document.createElement('img')
    img.src = this.image
    img.alt = 'image'

    item.appendChild(img)
    return item;
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

  static findByPic(url){
    return this.all.find(item => item.image === url);
  }


  renderUpdateForm() {
    return `
    <form data-id=${this.id} id="uform">
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
    </form>
  `;
  }

  update({title, category, url, image}) {
   this.title = title;
   this.category = category;
   this.url = url;
   this.image = image;
 }
}

Item.all = [];

let items = Item.all

console.log(items)
