// //Không code trên file js
// //Code chính trên file ts -> tsc -w
let arrString = ['A', 'B', 'C', 'D', 'E'];
console.log(arrString.length);
console.log(arrString[0]);
class Product {
    constructor() {
        this.id = '';
        this.name = '';
        this.price = 0;
        this.showInfo = () => {
            console.log('showInfo', this);
        };
    }
}
let prod = new Product();
prod.id = 1;
prod.name = 'Product 1';
prod.price = 1000;
prod.showInfo();
class ProductList {
    constructor() {
        this.data = [];
    }
    insert(newProduct) {
        this.data.push(newProduct);
    }
    del(id) {
        this.data = this.data.filter(prod => prod.id !== id);
    }
}
let prodList = new ProductList();
prodList.insert(prod);
let prod2 = Object.assign(Object.assign({}, prod), { id: 2, name: 'product 2' });
prodList.insert(prod2);
console.log(prodList.data);
class User {
    constructor() {
        this.id = '';
        this.name = '';
        this.userName = '';
        this.passWord = '';
    }
}
class List {
    constructor() {
        this.data = [];
    }
    insert(item) {
        this.data.push(item);
    }
    del(id) {
        this.data = this.data.filter((prod) => prod.id !== id);
    }
}
let productList = new List();
productList.insert(prod);
productList.insert(prod2);
console.log('productList', productList);
let userList = new List();
userList.insert(new User());
userList.insert(new User());
console.log(userList);
let funcA = () => {
    let std = { id: '1' };
    return std.id;
};
let functionA = () => {
    let result = { type: 'a', payload: '123' };
    return result;
};
let bienA = {
    type: '',
    payload: {}
};
