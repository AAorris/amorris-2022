export default function sum(...n: number[]) {
  return n.reduce((a, b) => a + b, 0);
}
