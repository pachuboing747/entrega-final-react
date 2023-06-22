const lista = [
    {
      id: 1,
      nombre: "Camiseta Titular",
      precio: 46999,
      img: "https://sporting.vtexassets.com/arquivos/ids/373968-800-800?v=637686031498800000",
      stock: 20,
      categoria: "Camisetas",
      descripcion:  "Una camiseta que le rinde homenaje a una temporada histórica, en la versión utilizada por los jugadores de 1981."
    },
    {
      id: 2,
      nombre: "Short Titular",
      precio: 16999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/168486-550-550/HE6334_1.jpg?v=637934176872970000",
      stock: 15,
      categoria: "Shorts",
      descripcion:  "Estos shorts de fútbol de Boca Juniors adidas son los que usan los jugadores cuando juegan en La Bombonera. Inspirados en la identidad del inolvidable equipo campeón 1992."
    },
    {
      id: 3,
      nombre: "Remera Escudo Boca Jrs",
      precio: 18999,
      img: "https://sporting.vtexassets.com/arquivos/ids/294917-800-800?v=637583213267370000",
      stock: 25,
      categoria: "Remeras",
      descripcion:  "Esta remera adidas Boca Juniors destaca tu amor por el club"
    },
    {
      id: 4,
      nombre: "Pantalón Entrenamiento",
      precio: 32999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169033-550-550/HC0995_4.jpg?v=638019159418600000",
      stock: 10,
      categoria: "Pantalones",
      descripcion:  "Estos pantalones de entrenamiento de fútbol de adidas tienen un ajuste ceñido e incorporan las clásicas piernas cónicas Tiro para estilizar a los jugadores de Boca Juniors a medida que mejoran sus habilidades."
    },
    {
      id: 5,
      nombre: "Buzo de Entrenamiento",
      precio: 29999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169157-550-550/HC0990_1.jpg?v=638090414717630000",
      stock: 10,
      categoria: "Buzos",
      descripcion:  "Llevá tu pasión Xeneize a donde vayas con este Buzo Confeccionado en algodón, tiene capucha y bolsillo canguro. Su estilo sobrio con las iniciales del club te hará visibilizar la sangre azul que corre por tus venas."
    },
    {
      id: 6,
      nombre: "Campera de Presentación",
      precio: 34999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169286-1000-1000/HC1009_1.jpg?v=638090670845130000",
      stock: 12,
      categoria: "Camperas",
      descripcion:  "Héroes dentro y fuera de la cancha. Los jugadores de Boca Juniors van y vienen de los partidos con camperas de fútbol adidas como esta."
    },
    {
      id: 7,
      nombre: "Camiseta Alternativa",
      precio: 24999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/168780-550-550/IB9458_1.jpg?v=637975642811000000",
      stock: 20,
      categoria: "Camisetas",
      descripcion:  "Un verdadero clásico. Un revestimiento tejido en el pecho y un escudo de los 80 se destacan sobre el fondo blanco de la camiseta alternativa de Boca Juniors."
    },
    {
      id: 8,
      nombre: "Short Alternativo",
      precio: 14999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/168797-550-550/HE6325_1.jpg?v=637975643036670000",
      stock: 15,
      categoria: "Shorts",
      descripcion:  "Fieles al azul y oro, estos shorts de fútbol adidas para jóvenes tienen un panel de malla para ventilación y cortes laterales para brindar comodidad dentro y fuera de la cancha."
    },
    {
      id: 9,
      nombre: "Remera Boca Juniors",
      precio: 22999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169627-360-360/IC5063_2.jpg?v=638155434481500000",
      stock: 25,
      categoria: "Remeras",
      descripcion:  "Camiseta de fútbol con un trifolio tejido junto al escudo del equipo en el pecho. El ajuste regular y la tela suave de esta camiseta se unen para brindar un soporte informal y cómodo."
    },
    {
      id: 10,
      nombre: "Pantalón de Entrenamiento Condivo",
      precio: 40999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169220-550-550/HC0994_1.jpg?v=638090496803070000",
      stock: 10,
      categoria: "Pantalones",
      descripcion:  "Entrená como si fueras una de las estrellas de Boca Juniors. Este pantalón de fútbol adidas es una versión del que usan los jugadores del club para entrenar."
    },
    {
      id: 11,
      nombre: "Buzo de Entrenamiento Alternativo",
      precio: 32999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169045-550-550/HC0987_1.jpg?v=638023975657100000",
      stock: 10,
      categoria: "Buzos",
      descripcion:  "Entrená como si fueras una de las figuras de Boca Juniors. Este top de entrenamiento de fútbol adidas es similar a la camiseta que los jugadores del club usan."
    },
    {
      id: 12,
      nombre: "Campera de Presentación Blanca",
      precio: 34999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169300-1000-1000/HC1010_1.jpg?v=638090689537530000",
      stock: 12,
      categoria: "Camperas",
      descripcion:  "Héroes dentro y fuera de la cancha. Los jugadores de Boca Juniors van y vienen de los partidos con camperas de fútbol adidas como esta."
    },
    {
      id: 13,
      nombre: "Tercera Camiseta",
      precio: 24999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169705-550-550/HT9911_1.jpg?v=638199335929870000",
      stock: 25,
      categoria: "Camisetas",
      descripcion:  "Una conexión con su hogar. Los estampados dinámicos en el frente de esta camiseta adidas de fútbol para jóvenes se inspira en las vigas de acero angulares del icónico puente transportador que se destaca en la vista de La Boca."
    },
    {
      id: 14,
      nombre: "Short Tercer Uniforme",
      precio: 16999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169699-550-550/HT9908_1.jpg?v=638198489483370000",
      stock: 10,
      categoria: "Shorts",
      descripcion:  "Parte del tercer uniforme de Boca Juniors que te conectará con el hogar del equipo."
    },
    {
      id: 15,
      nombre:"Medias Alternativas Boca",
      precio: 6999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/168777-550-550/HN6142_1.jpg?v=637975642769870000",
      stock: 10,
      categoria:  "Medias",
      descripcion: "Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."
    },
    {
      id: 16,
      nombre: "Medias Titular",
      precio: 6999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/168448-550-550/HN6141_1.jpg?v=637922174354200000",
      stock: 12,
      categoria: "Medias",
      descripcion: "Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."
    },
    {
      id: 17,
      nombre: "Medias Tercer Uniforme",
      precio: 6999,
      img: "https://bocashop.vteximg.com.br/arquivos/ids/169712-550-550/IB7799_1.jpg?v=638200185239970000",
      stock: 12,
      categoria: "Medias",
      descripcion: "Su tejido con tecnología de absorción AEROREADY mantiene tus pies secos y su diseño específico para el pie derecho y el izquierdo garantiza un ajuste perfecto. El acolchado en las zonas donde más lo necesitás se encarga de mantener tus pies cómodos del primer al último minuto del partido."
    }
  ]

  export default lista