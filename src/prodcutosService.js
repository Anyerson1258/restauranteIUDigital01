import { collection, doc, setDoc, getDocs, serverTimestamp } from 'firebase/firestore/lite';
import { FirebaseFirestore } from './firebase';

const crearProdcuto = async (producto) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/productos'));
    await setDoc(nuevoDoc, producto);
    console.log('producto creado');
}

const listarProducto = async () => {
    const productosRef = collection(FirebaseFirestore, '/productos');
    const docs = await getDocs(productosRef);
    const products = [];
    docs.forEach(document => {
        console.log(document.id, document.data());
        products.push({ id: document.id, 
            nombre:document.data().nombre,
            descripcion: document.data().descripcion,
            direccion: document.data().direccion,
            imagen: document.data().imagen,
        });
    });
    console.log(products);
    return products;
}

export {
    crearProdcuto,
    listarProducto,
}