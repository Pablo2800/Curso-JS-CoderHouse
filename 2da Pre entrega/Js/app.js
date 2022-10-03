let celulares = [];
celulares.push(new Producto(1,"Samsung","A52","https://storage.comprasmartphone.com/smartphones/samsung-galaxy-a52.png",120000,3)),
celulares.push(new Producto(2,"Samsung","A21 S","https://images.samsung.com/is/image/samsung/mx-galaxy-a21s-a217-sm-a217mzketce-front-thumb-252472525?$480_480_PNG$",86000,10));
celulares.push(new Producto(3,"Motorola","G71","https://cuyodigital.com/cuyo/wp-content/uploads/2021/11/161713-800-auto.png",68000,9 )),
celulares.push(new Producto(4,"iPhone","13 Pro Max","https://storage.comprasmartphone.com/smartphones/apple-iphone-13-pro-max.png",430000,12 )),
celulares.push(new Producto(5,"iPhone","12","https://www.pngplay.com/wp-content/uploads/6/Apple-IPhone-PNG-Photos-Download-Free-PNG.png",300000,8)),
celulares.push(new Producto(6,"Xiaomi","Redmi Note 11","https://cdn-xiaomi.waugi.com.ar/1428-thickbox_default/redmi-note-11-pro-6gb-ram-128gb-rom-graphite-gray.jpg",120000,11)),
celulares.push(new Producto(7,"Huawei","P40 Pro","https://img01.huaweifile.com/eu/es/huawei/pms/product/6901443378951/428_428_59A45A930B1C9F4B26F7D437DA5B8B994F8CC108CD3A4EC0mp.png",500000,12)),
celulares.push(new Producto(8,"Motorola","G52","https://fixechelectronica.com.ar/wp-content/uploads/2022/06/G52-BLANCO.png",60000,10)),
celulares.push(new Producto(9,"Huawei","Mate X2","https://ae01.alicdn.com/kf/Hb295d0d6e3bc492485b32069fc82f438N/HUAWEI-tel-fono-inteligente-Mate-X2-celular-con-pantalla-OLED-de-8-pulgadas-12GB-512GB-5G.png",320000,12)),
celulares.push(new Producto(10,"Xiaomi","Mi 11 Ultra","https://worldtechnologyecu.com/wp-content/uploads/2021/04/XIAOMIMI11ULTRA.png",230000,10))
celulares.push(new Producto(11,"Motorola","G9 Plus","https://bitwares.net/wp-content/uploads/2020/12/motog9plus-rosachampagne-dual-e1621205795776.png",70000,15)),
celulares.push(new Producto(12,"Samsung","A 71","https://storage.comprasmartphone.com/smartphones/samsung-galaxy-a72.png",80000,7));

cardProduct(celulares, card)


let samsung = celulares.filter((product)=>{
  return product.marca == "Samsung"
})

let motorola = celulares.filter((product)=>{
  return product.marca == "Motorola"
})

let iPhone = celulares.filter((product)=>{
  return product.marca == "iPhone"
})

let xiaomi = celulares.filter((product)=>{
  return product.marca == "Xiaomi"
})

let huawei = celulares.filter((product)=>{
  return product.marca == "Huawei"
})


sessionStorage.setItem("celSamsung",JSON.stringify(samsung))
sessionStorage.setItem("celMotorola",JSON.stringify(motorola))
sessionStorage.setItem("celiPhone",JSON.stringify(iPhone))
sessionStorage.setItem("celXiaomi",JSON.stringify(xiaomi))
sessionStorage.setItem("celHuawei",JSON.stringify(huawei))


