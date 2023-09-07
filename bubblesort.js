function bubbleSort(array) {
    let swap= false;
  
    do {
      swap = false;
      for (let i = 0;i<array.length-1;i++) {
        if (array[i] > array[i + 1]) {
          const x = array[i];
          array[i] = array[i + 1];
          array[i + 1] =x ; 
  
 
          swap = true;
        }
      }
    } while (swap=true);
  
    return array;
  }
  
  const array = [34,203,3,746,200,984,198,764,9];
  console.log(bubbleSort(array));  
  
  
  
  
  