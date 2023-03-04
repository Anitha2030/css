"""Nested selection/nesting is when a selection block(if/else) is placed within another if, 
 else selection block"""


"Predict, then Run, and then Investigate"

userAge = int(input("Enter your age: "))

ageLimit = 16

passCode = "Bootcamp"

# compare if the value held in userAge is greater than the value held in ageLimit
if userAge > ageLimit:
# execute the code bloc below if the comarison returns true
    print("userAge is greater than ageLimit")
# nested if will execute if the codition above is true (if userAge > ageLimit:)
    password = input("Enter your passCode : ")
    if passCode == password:
        print("Password Accepted")
    else:
        print("Incorrect Password")
else:
    print("You are under age")

    

"To Do: Q&A"
"What do you think is the equivalent of JS nested if in python?"


"Modify"
"To Do: Task 1: Using if elif and else"
# Exercise: Modify the code above to use else for both the outer if and the nested if condition

if userAge > ageLimit:
    print("userAge is greater than ageLimit")

    password = input("Enter your passCode : ")
    if passCode == password:
        print("Password Accepted")
    else:
        print("Incorrect Password")
else:
    print("You are under age")

