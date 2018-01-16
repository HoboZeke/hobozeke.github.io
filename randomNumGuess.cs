using System;
using System.IO;
class Program
{
  static void Main()
  {
    Random targetNum = new Random();
    int target = targetNum.Next(0,100);
    TextReader guess = Console.In;
    int totalGuesses = 0;
    bool isPlaying = true;
    
    Console.WriteLine("Guess!");
    
    while(isPlaying)
    {
    
      String curGuess = guess.ReadLine();
      totalGuesses = totalGuesses + 1;
      int guessNum = Convert.ToInt32(curGuess);
      if (guessNum > target)
      {
        Console.WriteLine("Too High!");
      }
      else if (guessNum < target)
      {
        Console.WriteLine("Too Low!");
      }
      else
      {
        Console.WriteLine("Well Done!");
        Console.WriteLine("Target Number: " + target);
        Console.WriteLine("Number of Guesses: " + totalGuesses);
        isPlaying = false;
      }
    }
  }
}
