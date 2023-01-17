// // // # Exercice :
// // // >*En utilisant l'attribut style*

// // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let h1 = document.getElementsByTagName('h1')[0];
h1.addEventListener('dblclick', function() {
  h1.style.backgroundColor = 'red';
  h1.style.color = 'white';
});

// // // ### 2. Au hover du h3, son texte rétrécit de 10px.

let h3 = document.getElementsByTagName('h3');
for (var i = 0; i < h3.length; i++) {
  h3[i].addEventListener('mouseover', function() {
    this.style.fontSize = '10px';
  });
}


// // // ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
  p[i].addEventListener('click', function() {
    if (this.style.backgroundColor === 'blue' && this.style.color === 'gold') {
      this.style.backgroundColor = 'white';
      this.style.color = 'black';
    } else {
      this.style.backgroundColor = 'blue';
      this.style.color = 'gold';
    }
  });
}