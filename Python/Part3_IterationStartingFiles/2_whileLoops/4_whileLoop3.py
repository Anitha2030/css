"""use a while loop when the number of iteration is unknown(dont know how many times you want/going 
to do something for)
A while loop also controls the flow of execution in a program"""



"To Do: Predict, then Run, and then Investigate"
# userGuess = input("Guess the secret word? ")
# secretWord = "bootcamp"

# while userGuess != secretWord:
#     # ask the user to guess again
#     userGuess = input("Guess again? ")
#     print(f"You guessed {userGuess} is incorrect")



"Modify/Make"
"To Do: Task 1: Modify the while loop above to use a counter"
# Ask for the guess word a maximum of three times
# If the user guess correctly before before or on the third attempt print (Guessed correcly)
# Exit the loop if the user used up all three guess attempts(3) 
# Use if else if you can
# Refer to the 5_whileLoop5.py file and see if you can take anything from its implementation

# userGuess = False
# secretWord = "bootcamp"
# guessAttempt = 1

# while guessAttempt <= 3:
#     guess = input("Guess the secret word :")
#     if guess == secretWord:
#         userGuess = True
#         break
#     else:
#         print(f"Incorrect Guess..Try Again")
#         guessAttempt += 1
# if userGuess:
#     print(f"Guessed correctly")
# else:
#     print("You have reached the maximum attempts")


# or
userGuess = input("Guess the secret word :")
secretWord = "bootcamp"
counting = 1

while userGuess != secretWord and counting<3:
    userGuess = input("Guess Again : ")
    counting+=1
if userGuess == secretWord:
    print(f"Guessed correctly")
else:
    print("You have reached the maximum attempts")









