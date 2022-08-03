//Không code trên file js
//Code chính trên file ts -> tsc -w
var _a;
/*------------ Khai báo kiểu dữ liệu -----------*/
//Primitive value: number,string, boolean, undefined, null
let hoTen = 'Nguyễn Văn A';
let luongCB = 5000;
let valid = true;
let result = undefined; //Không dùng để khai báo thường dùng để nhận giá trị
let result1 = null; //Không dùng để khai báo thường dùng để nhận giá trị
let btn = { id: 'btn1', name: 'button1', innerHTML: 'showMessage', background: 'red' };
let btn1 = { id: 'btn1', name: 'button1', innerHTML: 'showMessage', background: 'red', borderRadius: '5px' };
let prod = { id: '1', name: 'product 1', price: 1000 };
let sinhVien = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', diaChi: '100 trần quang khải' };
// typeArray
let arrNumber = [1, 2, 3, 4, 5, 6];
let arrString = ['Nam', 'Nữ'];
let arrProduct = [
    { id: '1', name: 'Product 1', price: 1000 },
    { id: '2', name: 'Product 2', price: 2000 },
    { id: '3', name: 'Product 3', price: 3000 },
];
//function
function tinhTong(a, b) {
    // console.log(a+b);
    return a + b;
}
// tinhTong(1,2);
let showMessage = (mess) => {
    return 'Hello ' + mess;
};
let sayHello = () => {
    console.log('say hello');
};
// callback
function main(callback) {
    callback('Hello cybersoft');
}
function renderH1(title) {
    document.querySelector('#content').innerHTML = `
        <h1 class="bg-dark text-white p-5 display-4">${title}</h1>
    `;
}
function renderSection(title) {
    document.querySelector('#content').innerHTML = `
    <section class="bg-warning text-center text-white p-5 display-4">${title}</section>
    `;
}
main(renderSection);
//tuple: mảng hỗn hợp [number,string,()=>void]
let sv = {
    id: 1,
    name: 'Nguyễn Văn A',
    showInfo: () => {
        console.log('showinfo');
    }
};
let result5 = [1, 'Nguyễn Văn A', () => {
        console.log('showInfo');
    }];
let [state, setState] = [1, (newState) => {
        state = newState;
        return state;
    }];
setState(5);
console.log(state);
let userName = 1;
let sp = { maSP: 1, tenSanPham: 'sản phẩm 1', gia: 1000, moTa: { ram: 10, rom: 32 } };
console.log((_a = sp.moTa) === null || _a === void 0 ? void 0 : _a.ram);
// type: any, unkown
//any: Là kiểu dữ liệu nhận tất cả các giá trị
let resultApi = { maSP: 1, tenSanPham: 'sản phẩm 1', gia: 1000, moTa: { ram: 10, rom: 32 } };
resultApi.gia += 1000;
let number = 1;
number += 1;
console.log(number);
//unknown: nhận tất cả các giá trị giống any tuy nhiên operation thì cần phải kiểm tra trước 
let number1 = 1;
if (typeof number1 === 'number') {
    number1 += 1;
    console.log(number1);
}
class ProductModel {
    constructor() {
        this.id = '1';
        this.name = 'product 1';
        this.showInfo = () => {
            console.log('id', this.id);
            console.log('name', this.name);
        };
    }
}
let resultAPI = new ProductModel();
// let prod1: any = undefined;
// prod1.showInfo(); // rủi ro => code sẽ bị lỗi
let prod2 = resultAPI;
if (prod2 instanceof ProductModel) {
    prod2.showInfo(); // rủi ro => code sẽ bị lỗi
}
/*--------------- OOP: Object Oriented Programming -------------------- */
/*
    + Tính trừu tượng(Abstraction): Giúp mình loại bỏ những đặc tính phức tạp không cần thiết của thế giới thực, chọn lọc những đặc tính cốt lỏi quan trọng vào trong lập trình.
    + Tính đóng gói(Encapsulation): Các thuộc tính và phương thức của đối tượng sẽ không bị các đối tượng khác tác động đến được, mà phải thông qua đối tượng đó thì mới có thể thay đổi. Access modifier (Phạm vi truy xuất của các thuộc tính phương thức trong class) getter, setter.
        + private: Các thuộc tính trong class sẽ không được truy xuất bởi instance (Không được lấy thông tin hoặc thay đổi thông tin). Có thể dùng hàm get, set để giới hạn phạm vi truy xuất của thuộc tính private
        + public: Các thuộc tính trong class có thể truy xuất bởi instance. (Được lấy thông tin hoặc thay đổi thông tin)
        + protected: Các thuộc tính và phương thức protected thì instance không thay đổi được, tuy nhiên class con có thể truy xuất đến được (Giống như private mở rộng cho phép lớp con sử dụng)
    + Tính kế thừa(Inheritance): Cho phép class con sử dụng lại nhưng thuộc tính và phương thức của class cha đã định nghĩa trước đó. Class con có thể override lại phương thức của class cha (nếu cần sử dụng lại phương thức thì dùng super.tenPhuongThuc() ). Tuy nhiên để override thì khai báo dưới dạng phương thức(). (Còn các trường hợp còn lại không cần override kế thừa thì xài arrow để đảm bảo ngữ cảnh trỏ this)
    + Tính đa hình (Polymorphism): Các class thực thi chung 1 hành động (Chung format về mặt phương thức).
*/
class NhanVien {
    constructor() {
        this.maNhanVien = '';
        this.tenNhanVien = '';
        this.heSoLuong = 1;
        this.luongCB = 1000;
    }
    setLuongCB(luongCB) {
        this.luongCB = luongCB;
    }
    getHeSoLuong() {
        return this.heSoLuong;
    }
    hienThiThongTin() {
        console.log('Mã nhân viên', this.maNhanVien);
        console.log('Tên nhân viên', this.tenNhanVien);
        console.log('Hệ số lượng', this.heSoLuong);
        console.log('Lương căn bản', this.heSoLuong);
    }
    tinhLuong() {
        return this.luongCB * this.heSoLuong;
    }
}
class NhanVienKeToan extends NhanVien {
    constructor() {
        super(...arguments);
        this.duAn = '';
    }
    nghiepVuKeToan() {
        console.log('Nghiệp vụ kế toán!');
    }
    //Phải là phương thức mới được ghi đè
    tinhLuong() {
        return super.tinhLuong() + 1000;
    }
}
let nvKT = new NhanVienKeToan();
nvKT.tinhLuong();
class Customer {
    create(newItem) {
        throw new Error("Method not implemented.");
    }
    update(id, itemUpdate) {
        throw new Error("Method not implemented.");
    }
    search(keyword) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
}
class ProductInfo {
    open() {
        throw new Error("Method not implemented.");
    }
    close() {
        throw new Error("Method not implemented.");
    }
    create(newItem) {
        throw new Error("Method not implemented.");
    }
    update(id, itemUpdate) {
        throw new Error("Method not implemented.");
    }
    search(keyword) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
}
let nv = new NhanVien();
nv.maNhanVien = 1;
nv.tenNhanVien = 'Nguyễn Văn A';
nv.hienThiThongTin();
nv.setLuongCB(2000);
let heSoLuong = nv.getHeSoLuong();
console.log('heSoLuong', heSoLuong);
console.log(nv.tinhLuong());
