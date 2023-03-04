
import random

"Modify "
"To Do: Task 1: You have been provided with an incomplete diceRoll.py program with bugs to debug and fix"

dice1 = random.randint(1, 6)
dice2 = random.randint(1, 6)
print(f"Dice: {dice1} | Dice: {dice2}")

dice = dice1 + dice2  # What is the values of both dice
print (dice)

if dice == 12:  # check if both dice equals 12
    dice = dice * 2  # double the total from both dice
    print(f"You threw {dice}")
else:
    if dice1 == dice2:
        dice = dice  # 10 = 10
        print(f"You threw {dice}")
print(f"You threw a total {dice}")

"To Do: Task 2: Add notes below to explain the application in your own words"
# import random --- importing random module
# random.randint will pick random integer number from given range
# every time when we roll the dice we get random numbers between 1-6
# if dice is equal to 12 it will double the number
# if the dice is not equal to 12 it wille execute the else part