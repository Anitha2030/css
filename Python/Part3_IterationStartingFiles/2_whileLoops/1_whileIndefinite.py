"""use a while loop when the number of iteration is unknown(dont know how many times you want/going 
to do something for)
A while loop also controls the flow of execution in a program"""



# import the datetime library/class/module
import datetime


"To Do: Predict, then Run, and then Investigate"



print("None while Loop output")
dateTime = datetime.datetime.now()
print(dateTime.strftime("%H:%M:%S"))


"To Do: Task 1" 
" study the output of the code above and the output in in the while loop below, and use the links provide to answer"

" What is the while loop doing?"

# while loop we can execute a set of statements as long as a condition is true.
# A while loop will continue until the statement is false.

" add comment to explain what you understand the 'datetime.datetime.now().strftime('%H:%M:%S')'"
# The strftime() method returns a string representing date and time using date, time or datetime object & displays in h,m,sec format.
# it displays the current time in hours,min,sec format
" add comment to explain what you understand the 'end='"
# https://www.toppr.com/guides/python-guide/questions/what-does-end-do-in-python/
# Passing the whitespace to the end parameter (end=‘ ‘) indicates that the end character has to be identified by whitespace and not a newline.
" add comment to explain what you understand the '\r' is used for "
# \r moves the cursor to the beginning of the line and then keeps outputting characters as normal.
# reset the cursor to beginning of the line
# use the "carriage return" character ("\r") to delete the last printed line. 
# '\r' means "go to the beginning of the line".
# eg: print("hello \rWorld") -- output will be 'World' -- because the cursor goes to the beginning of the line and replace the last output.

" What will output if you remove  , end='\r'  from the while loop"
# if i remove end="\r", while loop is running forever. it won't stop

print("while Loop output")
while True:
    print(datetime.datetime.now().strftime("%H:%M:%S"), end="\r")
    
    # time.sleep(1)

"Further reading on python while statements"
# https://www.w3schools.com/python/ref_keyword_while.asp
# https://www.w3schools.com/python/python_ref_keywords.asp
# https://www.w3schools.com/python/python_reference.asp