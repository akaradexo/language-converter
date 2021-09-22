'use strict';
const input = document.getElementById('input');

const btnTranslate = document.getElementById('btn-translate');

const output = document.getElementById('output');

const language =  document.getElementById('language');

const translateText = async function(){
  const inputText = input.value;

if(inputText === '' || inputText === null){
  alert('Input Text is empty. What are you going to translate? blank space?')
}else{
  const languageFun = language.value;

  let url = `https://api.funtranslations.com/translate/${languageFun}.json?text=${inputText}`;
  console.log(url);
  const data = await fetch(url);
  console.log(data);

  const result = await data.json();
  console.log(result);

  output.innerHTML = result.contents.translated;

}
}

const checkKey = function(e) {
  if(e.key === 'Enter'){
    translateText();
  }
}

btnTranslate.addEventListener('click',translateText);

document.addEventListener('keydown',checkKey)
