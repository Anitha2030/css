
"To Do: Predict, then Run, and then Investigate"


# num1 = int(input(("Enter your first number: ")))
# num2 = int(input(("Enter your second number: ")))
# answer = num1 + num2
# print(f"The answer to {num1} + {num2} = {answer}")
# print(
#     "Executing...some code and processes....\nExecuting...some code and processes....\n......"
# )


"To Do: Task 1: Data Types: Value Error"
# In the terminal Enter a numeric values to perform addition and take note of the output() 
# num1 = int(input(("Enter your first number: ")))
# num2 = int(input(("Enter your second number: ")))
# answer = num1 + num2
# print(f"The answer to {num1} + {num2} = {answer}")

# Output -- The answer to 2 + 3 = 5

# In the terminal Enter a numeric value and string value(ten/one/two) to perform addition and take note of the output() 
# ValueError: invalid literal for int() with base 10: 'one'
# an exception is a runtime error,which will cause issues or render your application unavailable to other users if not handled

# will excute if the input is invalid
try:
    num1 = int(input(("Enter your first number: ")))
    num2 = int(input(("Enter your second number: ")))
    answer = num1 + num2

except ValueError:
    print(f"Please enter a numeric value ")
# else block always execute - if the input is valid otherwise 
else:
    print(f"The answer to {num1} + {num2} = {answer}")
# will execute the input is valid or invalid
finally:
    print("Closing.....application")


# https://www.w3schools.com/python/python_ref_exceptions.asp
# https://docs.python.org/3/library/exceptions.html?highlight=exception#Exception

