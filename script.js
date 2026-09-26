const catalogo =[
  {
    id:1,
    titulo:"Adolecência",
    tipo:"Serie",
    ano:2025,
    genero:["Drama adolescente", "Drama psicologico"],
    nota:8.1,
    assistido:true
  },
  {
    id:2,
    titulo:"Toy Story 5",
    tipo:"Filme",
    ano:2026,
    genero:["Animação", "Aventura urbana", "comedia"],
    nota:7.3,
    assistido:true
  },
  {
    id:3,
    titulo:"Interestelar",
    tipo:"Filme",
    ano:2014,
    genero:["Ficção cientifica"],
    nota:8.7,
    assistido:true
  },
  {
    id:4,
    titulo:"Black Mirror",
    tipo:"Serie",
    ano:2011,
    genero:["Suspence - Misterio", "Thriller cibernético", "Crime"],
    nota:8.7,
    assistido:false
  },
  {
    id:5,
    titulo:"Chernobyl",
    tipo:"Serie",
    ano:2019,
    genero:["Documentario", "Drama psicológico", "Épico"],
    nota:9.3,
    assistido:true
  },
  {
    id:6,
    titulo:"A odisseia",
    tipo:"Filme",
    ano:2026,
    genero:["Ação", "Aventura marítima", "Missão"],
    nota:8.4,
    assistido:false
  }
];

//===============================
//B.2. Leitura dos dados
//===============================

console.log("---Catálogo completo---");
console.log(catalogo);

console.log("n---Leitura de itens especificos---");
console.log("Titulo do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.legth - 1].ano);

//Verificando o segundo gênero do terceiro item
if(catalogo[2].generos.legth >=2){
  console.log("Segundo gÊnero do terceiro item:", catalogologo[2].generos[1]);
} else{
  console.log("O terceiro item possui apenas um gênero cadastrado");
}
