const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Da foco no textarea assim que a página carrega
textarea.focus()

// Adiciona um ouvidor de eventos que é acionado quando o usuário solta uma tecla
textarea.addEventListener('keyup', event => {
  // Chama a função passando o valor dentro do elemento que teve o evento acionado
  createTags(event.target.value)
  
  // Se o botão pressionado for "Enter"
  if(event.key === 'Enter') {
    // Executa uma função após 10 milisegundos
    setTimeout(() => {
      // Limpa o conteúdo de onde o evento ocorreu
     event.target.value = ''
    }, 10)
    
    // Chama a função "randomSelect"
    randomSelect()
  }
})


function createTags(input) {
  // Divide a string em um array de substrings, as separando pelas vírgulas. 
  // Filtra os itens no array com uma condição: remove os espaços e se o array for diferente de "''" (não for vazio), retorna true e passa. Se for igual (vazio), retorna false e não passa.
  // Em map ele remove os espaços em branco do início e do fim de cada item no array.
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
  // Limpa o conteúdo da div "tags"
  tagsEl.innerHTML = ''
  
  // Para cada item no array "tags"
  tags.forEach(tag => {
    // Cria um elemento span
    const tagEl = document.createElement('span')
    
    // Adiciona a classe "tag" ao elemento
    tagEl.classList.add('tag')
    
    // Adiciona a string ao elemento
    tagEl.innerText = tag
    
    // Adiciona o elemento criado na div "tags"
    tagsEl.appendChild(tagEl)
  })
}


function randomSelect() {
  const times = 30
  
  // Executa a função em intervalos de 100ms
  const interval = setInterval(() => {
    // Chama a função e pega alguma tag aleatória com a classe "tag"
    const randomTag = pickRandomTag()
    
    // Chama a função "highlightTag" com a tag em "randomTag"
    highlightTag(randomTag)
    
    // Executa a função após 100ms
    setTimeout(() => {
      // Chama a função "unHighlightTag" com a tag em "randomTag"
      unHighlightTag(randomTag)
    }, 100)
  }, 100)
  
 
 // Executa uma função após 3000ms (30 * 100)
  setTimeout(() => {
    // Interrompe o intervalo "interval" definido
    clearInterval(interval)
    
    // Executa a função após 100ms
    setTimeout(() => {
      // Chama a função e pega alguma tag aleatória com a classe "tag"
      const randomTag = pickRandomTag()
      
      // Chama a função "highlightTag" com a tag em "randomTag"
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}


function pickRandomTag() {
  // Seleciona todos os elementos no documento com a classe "tag"
  const tags = document.querySelectorAll('.tag')
  // Retorna alguma tag aleatória
  return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
  // Adiciona a classe "highlight" na tag aleatória
  tag.classList.add('highlight')
}


function unHighlightTag(tag) {
  // Remove a classe "highlight" da tag aleatória
  tag.classList.remove('highlight')
}


// "keyup": Ocorre quando o usuário solta uma tecla após pressiona-la
// https://www.w3schools.com/jsref/event_onkeyup.asp


// ".target": Divide uma string em um array de substrings
// https://www.w3schools.com/jsref/event_target.asp


// "setTimeout": Chama uma função ou avalia uma expressão após um número especificado de milisegundos
// https://www.w3schools.com/jsref/met_win_settimeout.asp


// "split": Divide a string em um array de substrings
// https://www.w3schools.com/jsref/jsref_split.asp


// "filter": Cria um array com itens que passem em um teste fornecido por uma função
// https://www.w3schools.com/jsref/jsref_filter.asp


// "trim": Remove o espaço em branco dos lados de uma string
// https://www.w3schools.com/jsref/jsref_trim_string.asp


// "map": Cria um novo array para os resultados de um função chamada para cada item do array
// "map": https://www.w3schools.com/jsref/jsref_map.asp


// "setInterval": Chama uma função ou avalia uma expressão em intervalos especificados (em milisegundos)
// https://www.w3schools.com/jsref/met_win_setinterval.asp


// "clearInterval": Limpa um cronômetro definido por "setInterval"
// https://www.w3schools.com/jsref/met_win_clearinterval.asp