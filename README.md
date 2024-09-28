A gente coloca o nome dos arquivos dos componentes como index.js pra evitar a repetição
no momento em que a gente vai importar algo.

Com o BoxSizing borderbox ele considera o 100% contando margin e padding, sem isso uma coisa é largura e outra é padding + margin

Tipo olha, a gente colocou uma função para ser chamada assim que o formulário for submetido, mas o botão por padrão já tem um com-
portamento o qual vai tentar realizar uma pesquisa via URL, por este motivo, envia-se o evento de click à função para que lá captu-
re o evento e previna este comportamento padrão do botão.
