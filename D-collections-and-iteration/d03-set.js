/**

*/

  const mySet = new Set();

  mySet.add( 'value' );
  mySet.add( 'value' );
  mySet.add( 'value' );

  console.log( mySet );

  const mySetFromArray = new Set( [ 1, 1, 2, 3, 3, 4, 6, 8, 10, 190, 190 ] );
  const mySetFromArray2 = new Set( [ {}, {} ] );

  console.log(mySetFromArray);
  console.log(mySetFromArray2);
 










  let iterator = mySetFromArray.values();
  console.log( iterator.next() );
  iterator = mySetFromArray.values();
  console.log( iterator.next() );

  // fixed with set:
  for (const item of mySetFromArray) {
    console.log( item );
  }

  // more:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

  // Tasks:

// #1 Add and remove elements to Set

// #2 Check iteration using a for...of loop
