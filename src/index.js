
exports.min = function min (array) {
  let min;
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  else min=array[0];
  for (i=1;i<array.length;i++){
    if(array[i]<min)
    min=array[i];
  }
  return min
}

exports.max = function max (array) {
  let max;
  if (array === undefined) return 0;
  if (array.length === 0) return 0;
  else max=array[0];
  for (i=1;i<array.length;i++){
    if(array[i]>max)
    max=array[i];
  }
  return max
}

exports.avg = function avg (array) {
  return 0;
}
