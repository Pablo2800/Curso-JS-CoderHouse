async function fetchProductos() {
  const resp = await fetch("/2da Pre Entrega/data.json");
  return await resp.json();
}

let catalogo=[]

let celulares = [];

fetchProductos().then((productos) => {
  celulares = productos.filter((productos)=>{
    return productos.producto=="celular"
  });

  const samsung = productos.filter((product) => {
    return product.marca == "Samsung";
  });
  
  const motorola = productos.filter((product) => {
    return product.marca == "Motorola";
  });
  
  let iPhone = productos.filter((product) => {
    return product.marca == "iPhone" || product.marca == "Apple";
  });
  
  let xiaomi = productos.filter((product) => {
    return product.marca == "Xiaomi";
  });
  
  let huawei = productos.filter((product) => {
    return product.marca == "Huawei";
  });
  
  sessionStorage.setItem("celSamsung", JSON.stringify(samsung));
  sessionStorage.setItem("celMotorola", JSON.stringify(motorola));
  sessionStorage.setItem("celiPhone", JSON.stringify(iPhone));
  sessionStorage.setItem("celXiaomi", JSON.stringify(xiaomi));
  sessionStorage.setItem("celHuawei", JSON.stringify(huawei));
  
});

auriculares=[]

fetchProductos().then((productos) => {
    auriculares = productos.filter((productos)=>{
      return productos.producto=="auricular"

    });
    sessionStorage.setItem("auriculares",JSON.stringify(auriculares));

});

tablets=[]
fetchProductos().then((productos) => {
  tablets = productos.filter((productos)=>{
    return productos.producto=="tablet"
  });
  sessionStorage.setItem("tablets",JSON.stringify(tablets))
})