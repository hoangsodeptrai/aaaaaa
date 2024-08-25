let store = new Store("Cửa hàng của hoàng");
console.log(store);

// let p1 = new Product(1, "Vé bay", 10000);
// let p2 = new Product(2, "Vé bay", 100000);
// store.add(p1);
// store.add(p2);

function add(){
    let diemdi = document.getElementById("diemdi").value;
    let diemden = document.getElementById("diemden").value;
    let ngaydi= document.getElementById("ngaydi").value;
    let gia= document.getElementById("gia").value;
    let newProduct = new Product(diemdi,diemden,ngaydi,gia);
    store.add(newProduct);
    getAll()
}

function getAll() {
  let from = document.getElementById("mot").value;
  let to = document.getElementById("hai").value;

  let list = store.getlist(mot,hai);
  let html = "";
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    html = html +`
      
      
        <tr>
        <td>${list[i].diemdi}</td>
        <td>${list[i].diemden}</td>
        <td>${list[i].ngaydi}</td>
        <td>${list[i].gia}</td>
        <td><button>Thanh Toán</button></td>
        <td><button onclick="remove()" >Huỷ Chuyến</button></td>

        
    </tr>`
  }
  document.getElementById("list-product").innerHTML = html;
}

function remove(index){
    store.remove(index);
    alert("xoá thành công");
    getAll()
}

getAll()