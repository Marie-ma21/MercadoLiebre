const express = require ('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//servir archivos estaticos
app.use('/public', express.static(path.join(__dirname, 'public')));
//rutas
app.get('/',(req, res)=>{
    const hogar = [
        { imagen: 'Televisor,png.png', precio: "$1'600.000", descuento: '20% OFF', descripcion: 'Televisor Smart 55" 4K UHD', detalle: 'Televisor Smart 55 pulgadas, resolución 4K UHD, conectividad WiFi y Bluetooth, 3 puertos HDMI, sistema operativo Android TV' },
        { imagen: 'Cefetera.jpg', precio: '$90.000', descuento: '25% OFF', descripcion: 'Cafetera automatica', detalle: 'Cafetera automática 12 tazas, filtro permanente lavable, jarra de vidrio resistente al calor, potencia 900W' },
        { imagen: 'desk.webp', precio: '$400.000', descuento: '25% OFF', descripcion: 'Escritorio moderno para televisor', detalle: 'Escritorio moderno de madera, medidas 120x60cm, incluye cajones, ideal para oficina o estudio en casa' },
        { imagen: 'icua.png', precio: '$319.000', descuento: '10% OFF', descripcion: 'Licuadora profesional Oster', detalle: 'Licuadora Oster 600W, 6 velocidades con pulso, vaso de vidrio 1.5L, cuchillas de acero inoxidable desmontables' }
    ];
    const belleza = [
        { imagen: 'perfume.png', precio: '$80.000', descuento: '5% OFF', descripcion: 'Perfume Esmero', detalle: 'Fragancia floral amaderada, duración aproximada 8 horas, presentación rosa, apta para uso diario' },
        { imagen: 'Crema.webp', precio: '$40.000', descuento: '10% OFF', descripcion: 'Crema hidratante tododia', detalle: 'Crema hidratante para uso diario, fórmula enriquecida con vitamina E, textura ligera de rápida absorción, contenido 400ml' },
        { imagen: 'erfum.avif', precio: '$68.000', descuento: '5% OFF', descripcion: 'Perfume musk', detalle: 'Perfume de notas almizcleadas suaves y sensuales, larga duración' },
        { imagen: 'Shampoo.webp', precio: '$52.000', descuento: '10% OFF', descripcion: 'Shampo Agú', detalle: 'Shampoo no mas lagrimas para bebes' }
    ];
    const calzado = [
        { imagen: 'zapatos.jpg', precio: '$200.000', descuento: '25% OFF', descripcion: 'Tennis run rosados', detalle: 'Tennis para mujer, suela antideslizante, material transpirable, plantilla acolchada para mayor comodidad' },
        { imagen: 'eg.jpg', precio: '$300.000', descuento: '25% OFF', descripcion: 'Zapatos formales hombre', detalle: 'Zapatos formales para hombre, suela de goma antideslizante, costura reforzada' },
        { imagen: 'sand.png', precio: '$100.000', descuento: '25% OFF', descripcion: 'Sandalias mandala coffe', detalle: 'Sandalias cafe, comodas para cualquier ocacion' },
        { imagen: 'ls.webp', precio: '$156.000', descuento: '25% OFF', descripcion: 'Botas largas negras', detalle: 'Botas largas negras de tacon medio 5cm, alta calidad, cierre lateral' }
    ];
    res.render('home', { hogar, belleza, calzado });
});

app.get('/registrar',(req, res)=>{

    res.render('registro');
});

app.get('/login',(req, res)=>{

    res.render('login');
});

app.listen(PORT, ()=>{
    console.log('ejecutando en el puerto 3000');
});