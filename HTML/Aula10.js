var sayings = new Map();
console.log(sayings.set("dog", "woof"));
console.log(sayings.set("cat", "meow"));
console.log(sayings.set("elephant", "toot"));
console.log(sayings.size); // 3
console.log(sayings.get("fox")); // undefined
console.log(sayings.has("bird")); // false
console.log(sayings.delete("dog"));
console.log(sayings.has("dog")); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

console.log(sayings.clear());
console.log(sayings.size); // 0