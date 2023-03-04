"To DO: Read through the data types examples in your own time and reference or use it as a guide during your lesson"

# Data types are nothing but variables you use to reserve some space in memory.
# Python variables do not need an explicit declaration to reserve memory space. 
# The declaration happens automatically when you assign a value to a variable.

"To DO: Further reading on datatypes in python"
#hhttps://www.w3docs.com/learn-python/python-data-types.html

# String data types
# String are identified as a contiguous set of characters represented in 
# the quotation marks. Python allows for either # pairs of single or double
#  quotes. Strings are immutable sequence data type, i.e each time one makes 
# any changes to a string, completely new string object is created.

"Predict, then Run, and then Investigate"

# use "" for single line string value assigment 
s1 = "I love python, with double quotes" 
# use '' for single line string value assigment 
s2 = 'Python is the in demand programming language, with single quote'
# use """""" for multi line string value assigment 
s3 = """
This is multiline, 
This is multiline, 
This is multiline, 
This is multiline, 
"""

# ~string comments
"This is a comment"

"""
This is a multiline comment 
This is a multiline comment 
This is a multiline comment 
"""

# Boolean data types
# Boolean is yes/no or true or false (0 = off and 1 = on)
bVal1 = True # declare and assign a boolean type variable with value True
bVal2 = False # declare and assign a boolean type variable with value False


# Numeric data types
num1 = 20.5 # float(decimal) variable declaration and assigment 
num2 = 20 # integer variable declaration and assigment


"To DO: type() function is used to ?"
print(type(bVal1)) # bool
print(type(bVal2))

print(type(s1)) # str
print(type(s2))
print(type(s3))

print(type(num1)) #float
print(type(num2)) #int

"Modify:"
"To DO:"
# Modify the data structures above by changing their values or object names
name1 = 'Anitha Natarajan'
print(type(name1))
numb1=25
print(type(numb1))
numb2=10.5
print(type(numb2))
# int to str
numb3 = str(numb1)
print(type(numb3))
# int to float
numb4 = float(numb1)
print(type(numb4))
print(numb4)
# float to int
numb5 = int(numb2)
print(type(numb5))
print(numb5)
#str to int
str1 = "456"
numb6 = int(str1)
print(type(numb6))
print(numb6)
"Make:"
"To DO:"
# Produce five examples of numeric datatypes
numb1=25
print(type(numb1))
numb2=10.5
print(type(numb2))
print(bin(numb1))
print(hex(numb1))
print(oct(numb1))

# Produce five examples of string datatypes
doub1 = "Hello,How are you"
sing2 = 'Hello,How r u'
mult = """ 
multiline,
multiline,
multiline,
multiline
"""
list1 = [25,25,'anitha']
a = "Hello, World!"
print(a[1])
print(type(doub1))
print(type(sing2))
print(type(mult))
print(type(list1))

# Produce two examples of numeric datatypes
numb1=25
print(type(numb1))
numb2=10.5
print(type(numb2))