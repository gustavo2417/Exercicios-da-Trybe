//exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; 
  console.log('Bem-vinda, ' + info.personagem)
//exercicio 2
  info.recorrente = 'sim'

  console.log(info)

  //exercicio 3

  for (let key in info) {
  console.log(key)
}
 //exercicio 4

 for (let key in info) {
     console.log(info[key])
 }
 //exercicio 5 

