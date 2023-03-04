
import random

"Make"
"To Do: Task 1: Create a dice rolling python application. The application should:"
#- Generate first random number between 1 and 6 and assign this to a variable
#- Generate second random number between 1 and 6 and assign this to a variable
#- Display the value of rolled dice 
dice1 = random.randint(1, 6)
dice2 = random.randint(1, 6)
dice = dice1 + dice2
print(f"Dice: {dice1} | Dice: {dice2} \nTotal:{dice}")

"To Do: Task 2: Add notes below to explain the application in your own words"

# import random --- importing random module
# random.randint will pick random integer number from given range
# every time when we roll the dice we get random numbers between 1-6