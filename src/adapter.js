class Adapter {

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1';
  }

  fetchItems() {
    return fetch(`${this.baseUrl}/items`).then(res => res.json());
  }

  updateItem(id, body) {
    return fetch(`${this.baseUrl}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json());
  }

  // deleteItem(){
  //
  //
  // }


}
