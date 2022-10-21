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

  const samsung = celulares.filter((product) => {
    return product.marca == "Samsung";
  });
  
  const motorola = celulares.filter((product) => {
    return product.marca == "Motorola";
  });
  
  let iPhone = celulares.filter((product) => {
    return product.marca == "iPhone";
  });
  
  let xiaomi = celulares.filter((product) => {
    return product.marca == "Xiaomi";
  });
  
  let huawei = celulares.filter((product) => {
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
    const auricular = auriculares.filter((product) => {
      return product.producto == "auricular";
    });

    sessionStorage.setItem("auriculares",JSON.stringify(auricular));

});
