for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Outputs: 3, 3, 3 (Expected: 0, 1, 2)
