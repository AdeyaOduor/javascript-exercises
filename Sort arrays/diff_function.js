// implement a difference function which subtracts one list from another and returns the result
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
