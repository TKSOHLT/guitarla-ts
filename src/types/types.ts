// !Interfaces y types
// Son dos de las caracteristicas mas utilizadas, puede ser utilizadas
// de manera intercambianle a gusto de cada quien.

// interface Guitar {
//   id: number;
//   name: string;
//   image: string;
//   description: string;
//   price: number;
// }

export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

//Se puede heredar Guitar y con & (amperson) se agregan parametros
export type CartItem = Guitar &  {
  quantity: number;
}

// export type GuitarID = { id: number }//!Podemos crear un tipo de dato nuevo, pero si lo hacemos de este modo, al cambiar el number tendremos que cambiar todo
// es por ello que se hace lo sigueinte:

// export type GuitarID = Pick<Guitar, 'id'>

//**Tambien se puede usar lookup:
export type GuitarID = Guitar['id']; //**(el lookup es Guitar['id']) */

//!Tambien se puede heredar con interface con "extends"
// export interface CartItem extends Guitar &  {
//   quantity: number;
// }

//!Pick
//Se puede usar Pick para tomar solo unos cuantos parametros de la clase Guitar
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & { // Se pueden agregar atributos extras con &
//     quantity: number;
// }

//!Omit
//Con Omit es lo contrario a Pick, se declaran los atributos que se quieren quitar