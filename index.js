const names = ['teddy bear', 'drone', 'doll'];

function printBadges (items) {
  for (let i = 0; i < items.length; i++) {
    console.log('Welcome ${names[i]}! You are employee #${i}.');
  }

  return items;
}
