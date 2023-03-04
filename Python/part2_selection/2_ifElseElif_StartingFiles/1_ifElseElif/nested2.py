"""Nested selection/nesting is when a selection block(if/else) is placed within another if, 
 else selection block"""


"""Nested selection/nesting is when a selection block(if/else) is placed within another if, 
 else selection block"""



"To Do: Predict, then Run, and then Investigate and then comment the code to explain each line of code does"

pyCourse = float(input("Enter your python score: ")) # casting is used here - getting input convert str to float
htmlCourse = float(input("Enter your HTML score: "))
sqlCourse = float(input("Enter your SQL score: "))

"To Do: Explain what is casting and comment on the line of code where casting is used?"
if pyCourse < 45:
    print(f"Try again in python {pyCourse}")
if htmlCourse < 45:
    print(f"Try again in HTML {htmlCourse}")
if sqlCourse < 45:
    print(f"Try again in SQL {sqlCourse}")

gradesAverage = (pyCourse + htmlCourse + sqlCourse)/ 3
if gradesAverage <= 55:
    print(f" Your score is {gradesAverage} and is Grade D ")
elif gradesAverage <= 79 :
    print(f" Your score is {gradesAverage} and is Grade C")
elif gradesAverage <= 89:
    print(f" Your score is {gradesAverage} and is Grade B")
elif gradesAverage <= 100:
    print(f"your score is {gradesAverage} and is Grade A")

