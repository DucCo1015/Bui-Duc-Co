// Method 1
var sum_to_n_a = function(n) {
 return n * (n + 1) / 2
};

console.log(sum_to_n_a(5))


// Method 2
var sum_to_n_b = function(n) {
 if(n === 1){
  return 1;
 }
 else{
  return n + sum_to_n_b(n-1)
 }
};

console.log(sum_to_n_b(5))


// Method 3
var sum_to_n_c = function(n) {
 let sum = 0;
 for (let i = 0; i <= n; i++) {
  sum += i;
 };
 return sum;
}
console.log(sum_to_n_c(5))