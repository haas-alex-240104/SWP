export function is_it_prime(n: number): [boolean, string] {
  const sqrt_n = Math.sqrt(n);
  for(let i = 2; i <= sqrt_n; i++)
  {
    if (n % i === 0)
    {
      return [false, `Nein, ${n} ist keine Primzahl`];
    }
  }
      return [true, `Ja, ${n} ist eine Primzahl`];
};


for (let t = 1; t < 20; t++) 
{
  console.log(is_it_prime(t));
}