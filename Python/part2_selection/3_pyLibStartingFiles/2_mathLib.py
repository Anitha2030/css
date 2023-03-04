import math # import (module) math
# This module provides access to the mathematical functions defined by the C standard

radius = float(input("Enter radius: "))
area = math.pi * radius ** 2
4
"Predict, then Run, and then Investigate"

print(f"The area is {area}")

# Method 1
# Round (round) a number to a given precision in decimal digits.
print(f"The area displayed is rounded to 2 decimal places {round(area, 2)}")

# Method 2
print(f"The area displayed is rounded to 2 decimal places {area:.2f}")
   

"""Remove only the left most hash tag(where applicable) to Uncomment the code below.
Then debug the code by replacing the questions marks with the correct variables 
and/or methods Where applicable
"""

# "Modify"
# "To Do: Task 1: Use the floor method to round down to the nearest whole number"
roundDown = math.floor(area) # math.floor() method rounds a number downwards to its nearest integer, and returns the result:
print(f"The area displayed is rounded to 2 decimal places {roundDown}")

# # Method 3
roundDown = math.floor(area) # math.floor() method rounds a number downwards to its nearest integer, and returns the result.
print(f"The area displayed is rounded to nearest down number {roundDown}")

# # Method 4
# "To Do: Task 2: Use the ceil method to round up to the nearest whole number"
roundUp = math.ceil(area) # math.ceil() method rounds a number upwards to its nearest integer and retuns the result
print(f"The area displayed is rounded to nearest up number {roundUp}")

# "To Do: Q&A"
# "Explain the difference between the ceil and the floor method and what method(s) in JS that can perform similar operation?

# math.floor() method rounds a number downwards to its nearest integer
# math.ceil() method rounds a number upwards to its nearest integer

"To Do: Knowledge Check: Why use the 'dir(math)' in the print below?"
print(f"\n{dir(math)}")
# print all attributes and methods from  directory math module 


