var aluno = {
    nome: prompt('digite o nome do aluno'),
    nota1: Number(prompt('digite a primeira nota do aluno')),
    nota2: Number(prompt('digite a segunda nota do aluno')),
    nota3: Number(prompt('digite a terceira nota do aluno')),
    nota4: Number(prompt('digite a quarta nota do aluno'))
};
console.log(aluno);
console.log(Object.entries(aluno));
if (Object.entries(aluno.nome) == undefined){
    var aluno = {
        nome: prompt('digite o nome do aluno'),
        nota1: Number(prompt('digite a primeira nota do aluno')),
        nota2: Number(prompt('digite a segunda nota do aluno')),
        nota3: Number(prompt('digite a terceira nota do aluno')),
        nota4: Number(prompt('digite a quarta nota do aluno'))
    };
} else {
function media1(){
  var media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4)/4
 if (media >= 6){
     alert(`O aluno foi aprovado com nota ${media}`);
 } else {
     alert(`O aluno foi reprovado. A nota final foi ${media}`);
    
 }}
 }
media1(aluno)
function repeat(){
    const repet = prompt('Deseja calcular outra média?\n 1-Sim \n 2-Não')
    if (repet == 1){
        media1();
    } else {
        alert('Até mais');
    }
}
delete aluno.nome 
delete aluno.nota1
delete aluno.nota2
delete aluno.nota3
delete aluno.nota4
console.log(Object.entries(aluno));
console.log(aluno);
repeat();