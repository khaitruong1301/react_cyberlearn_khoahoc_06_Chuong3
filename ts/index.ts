//Không code trên file js
//Code chính trên file ts -> tsc -w

/*------------ Khai báo kiểu dữ liệu -----------*/
//Primitive value: number,string, boolean, undefined, null
let hoTen: string = 'Nguyễn Văn A';
let luongCB: number = 5000;
let valid: boolean = true;
let result: undefined = undefined; //Không dùng để khai báo thường dùng để nhận giá trị
let result1: null = null; //Không dùng để khai báo thường dùng để nhận giá trị
// reference value: object, array 
//interface là gì ? Interface là dùng để định format kiểu dữ liệu của object. Interface thì khi khai báo nhiều interface cùng tên thì khi biên dịch typescript sẽ gộp các interface cùng tên lại thành 1.
interface SinhVien {
    maSinhVien: string,
    tenSinhVien: string
}
interface SinhVien {
    diaChi: string
}
//interface có thể kế thừa từ interface khác
interface Button {
    id: string,
    name: string,
    innerHTML: string,
    background: string
}

let btn: Button = { id: 'btn1', name: 'button1', innerHTML: 'showMessage', background: 'red' }

interface ButtonRadius extends Button {
    borderRadius: string
}

let btn1: ButtonRadius = { id: 'btn1', name: 'button1', innerHTML: 'showMessage', background: 'red', borderRadius: '5px' }




//type là định dạng format của dữ liệu
type Product = {
    id: string,
    name: string,
    price: number
}
let prod: Product = { id: '1', name: 'product 1', price: 1000 };
let sinhVien: SinhVien = { maSinhVien: '1', tenSinhVien: 'Nguyễn Văn A', diaChi: '100 trần quang khải' };


// typeArray
let arrNumber: number[] = [1, 2, 3, 4, 5, 6];
let arrString: string[] = ['Nam', 'Nữ'];
let arrProduct: Product[] = [
    { id: '1', name: 'Product 1', price: 1000 },
    { id: '2', name: 'Product 2', price: 2000 },
    { id: '3', name: 'Product 3', price: 3000 },
]

//function
function tinhTong(a: number, b: number): number {
    // console.log(a+b);
    return a + b;
}

// tinhTong(1,2);

let showMessage = (mess: string): string => {

    return 'Hello ' + mess;
}

let sayHello = (): void => {
    console.log('say hello');
}
// callback

function main(callback: (title: string) => void) {
    callback('Hello cybersoft');
}


function renderH1(title: string): void {
    document.querySelector('#content').innerHTML = `
        <h1 class="bg-dark text-white p-5 display-4">${title}</h1>
    `;
}

function renderSection(title: string): void {
    document.querySelector('#content').innerHTML = `
    <section class="bg-warning text-center text-white p-5 display-4">${title}</section>
    `;
}
main(renderSection);

//tuple: mảng hỗn hợp [number,string,()=>void]

let sv = {
    id: 1,
    name: 'Nguyễn Văn A',
    showInfo: (): void => {
        console.log('showinfo')
    }
}
let result5: [number, string, () => void] = [1, 'Nguyễn Văn A', () => {
    console.log('showInfo');
}]
let [state, setState]: [number, (newState: number) => number] = [1, (newState: number): number => {
    state = newState;
    return state;
}]

setState(5);
console.log(state);

// type, union type: cho phép giá trị nhận được nhiều type
type IdUserName = string | number;
let userName: IdUserName = 1;
//optional properties: Dùng cho mô tả thuộc tính của type có thể có hoặc không
//optional chaining: Dùng cho thuộc khi sử dụng nếu không có sẽ không báo lỗi
type SanPham = {
    maSP: string | number,
    tenSanPham: string,
    gia: number,
    moTa?: {
        ram: number,
        rom: number
    }
}

interface SanPham1 {
    maSP: string | number,
    tenSanPham: string,
    gia: number,
    moTa?: {
        ram: number,
        rom: number
    }
}

let sp: SanPham = { maSP: 1, tenSanPham: 'sản phẩm 1', gia: 1000, moTa: { ram: 10, rom: 32 } };
console.log(sp.moTa?.ram);

// type: any, unkown
//any: Là kiểu dữ liệu nhận tất cả các giá trị
let resultApi: any = { maSP: 1, tenSanPham: 'sản phẩm 1', gia: 1000, moTa: { ram: 10, rom: 32 } };
resultApi.gia += 1000;

let number: any = 1;
number += 1;
console.log(number)
//unknown: nhận tất cả các giá trị giống any tuy nhiên operation thì cần phải kiểm tra trước 
let number1: unknown = 1;
if (typeof number1 === 'number') {
    number1 += 1;
    console.log(number1)
}


class ProductModel {
    id: number | string = '1';
    name: string = 'product 1';
    showInfo = () => {
        console.log('id', this.id);
        console.log('name', this.name);
    }
}

let resultAPI = new ProductModel();


// let prod1: any = undefined;

// prod1.showInfo(); // rủi ro => code sẽ bị lỗi

let prod2: unknown = resultAPI;
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
    public maNhanVien: string | number ='';
    public tenNhanVien:string = '';
    protected heSoLuong: number = 1;
    protected luongCB: number = 1000;
    constructor(){

    }
    setLuongCB(luongCB) {
        this.luongCB = luongCB;
    }
    getHeSoLuong() {
        return this.heSoLuong;
    }
    hienThiThongTin () {
        console.log('Mã nhân viên', this.maNhanVien);
        console.log('Tên nhân viên', this.tenNhanVien);
        console.log('Hệ số lượng', this.heSoLuong);
        console.log('Lương căn bản', this.heSoLuong);
    }
    
    tinhLuong(){
        return this.luongCB * this.heSoLuong;
    }
}
class NhanVienKeToan extends NhanVien {
    duAn: string = '';
    
    nghiepVuKeToan(){
        console.log('Nghiệp vụ kế toán!')
    }
    //Phải là phương thức mới được ghi đè
    tinhLuong(): number { //override
        return super.tinhLuong() + 1000;
    }
}

let nvKT = new NhanVienKeToan();
nvKT.tinhLuong();


interface CRUD {
    create(newItem);
    update(id,itemUpdate);
    search(keyword);
    delete(id);
    getAll();
}
interface Connect {
    open();
    close();
}

class Customer implements CRUD {
    create(newItem: any) {
        throw new Error("Method not implemented.");
    }
    update(id: any, itemUpdate: any) {
        throw new Error("Method not implemented.");
    }
    search(keyword: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        throw new Error("Method not implemented.");
    }

}

class ProductInfo implements CRUD, Connect {
    open() {
        throw new Error("Method not implemented.");
    }
    close() {
        throw new Error("Method not implemented.");
    }
    create(newItem: any) {
        throw new Error("Method not implemented.");
    }
    update(id: any, itemUpdate: any) {
        throw new Error("Method not implemented.");
    }
    search(keyword: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
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
console.log('heSoLuong',heSoLuong);
console.log(nv.tinhLuong())