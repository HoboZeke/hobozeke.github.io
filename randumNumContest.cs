using System;
using System.IO;
class MainClass 
{
  
  static void Main () 
  {
    Random randomNum = new Random();
    TextReader guess = Console.In;
    int playerDef = 0;
    int playerAtk = 0;
    int compDef = 0;
    int compAtk = 0;
    int playerHealth = 100;
    int compHealth = 100;
    int score = 0;
    bool isPlaying = true;
  
    while (isPlaying)
    {
      Console.WriteLine("Player: "+ playerHealth + " Computer: " + compHealth);
      
      //attack
      Console.WriteLine("Input attack value between 0-99");
      String inputAtk = guess.ReadLine();  
      playerAtk = Convert.ToInt32(inputAtk);
      if (playerAtk > 99){playerAtk=99;}
      if (playerAtk < 0){playerAtk=0;}
      compAtk = randomNum.Next(0,100);
      
      //defense
      Console.WriteLine("Input defense value between 0-99");
      String inputDef = guess.ReadLine();  
      playerDef = Convert.ToInt32(inputDef);
      if (playerDef > 99){playerDef=99;}
      if (playerDef < 0){playerDef=0;}
      compDef = randomNum.Next(0,100);
      
      //Update
      playerHealth = playerHealth - (Math.Abs(compAtk-playerDef));
      compHealth = compHealth - (Math.Abs(playerAtk-compDef));
      Console.WriteLine("Player does " +(Math.Abs(playerAtk-compDef))+ " damage. ("+playerAtk+"atk - "+compDef+"def)");
      Console.WriteLine("Computer does " +(Math.Abs(compAtk-playerDef))+ " damage. ("+compAtk+"atk - "+playerDef+"def)");
      Console.WriteLine();
      
      if (playerHealth < 1 && compHealth < 1)
      {
        Console.WriteLine("DRAW!");
        isPlaying=false;
      }
      else if (playerHealth < 1)
      {
        Console.WriteLine("YOU LOSE!");
        isPlaying=false;
      }
      else if (compHealth < 1)
      {
        Console.WriteLine("YOU WIN!");
        score++;
        isPlaying=false;
      }
      while(!isPlaying)
      {
        Console.WriteLine("Current score:" + score);
        Console.WriteLine();
        Console.WriteLine("NEW GAME:");
        playerHealth = 100;
        compHealth = 100;
        isPlaying=true;
      }
    }
  }
}
