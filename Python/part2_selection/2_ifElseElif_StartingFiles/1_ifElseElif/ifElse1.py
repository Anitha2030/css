# Selection is used to control the flow of the program

pStudy = input("Enter your program of study: ").title()
curProgram = "Bootcamp"
"Predict, then Run, and then Investigate"
# check the condition that pStudy value is same as the value held in curProgram
if pStudy == curProgram:
# do something/execute the line of code below if the condition is checked above true
    print("Condition is true")
# The block(else) of code will be executed if the codition in the if block is not met
else:
    print("pStudy is not equal to curProgram")

"Modify"
"To Do: Exercise"
# Modify the code above to use the "!=" operator, or the "not" operator
if pStudy != curProgram:
     print("Value is not equal")
else:
    print("Value is equal")

# Not
if(not(pStudy == curProgram)):
    print("value is not equal")
else:
    print("Value is equal")