//ex. 8.8
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var text2 = 'Zielone słonie';
text2 = text2.toUpperCase();
text = text.replace('Papugi', text2);
console.log(text.substr(0, text.lenght / 2));
