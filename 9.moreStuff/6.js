let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex){
  return arr.filter(word=>regex.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']