
# Selection is used to control the flow of the program

score = int(input("Enter a number: "))
"Predict, then Run, and then Investigate"

# check the condition that score is greater than 100
if score > 100:

# create avariable and assign it the value Invalid Entry
    print("Grade:Invalid Entry")
# check the condition that score is between 75 and 100
elif score >= 75 and score <= 100:
# create avariable and assign it the value A
    print("Grade : A")
# check the condition that score is between 60 and 74
elif score >= 60 and score <= 74:
# reassign the grade variable the value B
    print ("Grade : B")
# check the condition that score is between 50 and 59
elif score >= 50 and score <=59:
# reassign the grade variable the value C
    print("Grade : C")
# reassign the grade variable the value F
else:
    print ("Grade : F")

"To Do: Q&A"
"What do you think is the equivalent of JS else if in python?"

"Make"
"To Do: Task 1: Using if elif and else"
# Create a Menu program that allow user to select between three subject choices
# User must be presented with the value assoiciated with each choice
# for example 1. Music, 2. Maths ....
# A choice must also be available for the user to exit the program
# A message using the print function must be display as per the user choice

choice1 = 'Maths'
choice2 = 'Science'
choice3 = 'English'
choice4 = 'Exit'
choice = input ('Enter your Subject choice :').title()

if choice == choice1:
    print(f'Welldone! you have chosen {choice1}')
elif choice == choice2:
    print(f'Welldone! you have chosen {choice2}')
elif choice == choice3:
    print(f'Welldone! you have chosen {choice3}')
elif choice == choice4:
    exit
else:
   print("Your choice is not available")


"To Do: Task 2:"
# Use if else to find item(a specific number) from a list
numList = [56, 78, 100, 45, 88, 71]
num = int(input('Enter the number :'))
if num == 56:
    print(f"{num} is in the numList")
elif num == 78:
    print(f"{num} is in the numList")
elif num == 100:
    print(f"{num} is in the numList")
elif num == 45:
    print(f"{num} is in the numList")
elif num == 88:
    print(f"{num} is in the numList")
elif num == 71:
    print(f"{num} is in the numList")
else:
    print("Number not in list")