
"As your programs become larger and more complex, they need to be broken down into smaller, self-contained sections"
"In python function is a type of subroutine, asubroutine is sequence of instructions to perform a specific task with an identifiable name."

"A subroutine(function) definition is used to define the steps within the subroutine(function)"

"A subroutine(function) may or may not have a return statement"

"A subroutine(function) may or may not have parameters"

"def just defines the subroutine(function)"

"A subroutine(function) is not executed unless the subroutine is called."

"A subroutine(function) call tells the program to branch to the function, execute it and come back to the next statement in the main program"



# Syntax
"""
def subroutine/functionName():
    subroutine/functionBody(code)
    subroutine/functionBody(code)
    subroutine/functionBody(code)
    subroutine/functionBody(code)

#call/invoke the subroutine/function
subroutineName/function()


"""

"To Do: Predict, then Run, and then Investigate"

# name = "Emjay"
# print("Your name is: ", name)

# name= input(("What is your name? "))
# print("Your name is: ", name)


 # def define the subroutine/function user

def user ():
    name = "Emjay"
#     print("Your name is: ", name)
# user()

# def define the subroutine userName

# def userName():
#     print("Welcome")
# userName()
# or
def userName():
    name= input(("What is your name? "))
#     print("Your name is: ", name)
# userName()


# print("Welcome")
# userName()

"To Do: Task 1: Call the subroutine inside a print function with or without f-strings and explain your result"

def userName(): # defined the subroutine called userName
    print("Welcome")
# userName() #called the subroutine to return the print stmt

"Modify/Make"
"To Do: Task 2: Modify the subroutine to ask for address and interest "
address = input("Enter your Address:")
interest = input("What is your interest:")
def details():
    print(f" My Address: {address}\nMy interest: {interest}")
details()

"Investigate" # if __name__ == "__main__":
"To Do: Task 3: Copy and paste the code block below in the broswer to investigate it use"
if __name__ == "__main__":
    userName()
    user()
# Add comment to explain why it can be used in your program in your own words"
# The variable __name__ for this module is set to __main__:
# when the interpreter runs a module, the __name__ variable will be set as  __main__ if the module that is being run is the main program.
#

# call/invoke the subroutine
# call/invoke the subroutine
  

"Knowledge Check"
"Task 4: Linking existing knowledge with new knowldge "
# What do you think is the equivalent of the python 'def' keyword in JavaScript
# function
"Further reading on python functions"



