"Read through the data types examples and reference or use it as a guide during lessons"
"Further reading on datatypes in python"
#https://www.w3docs.com/learn-python/python-data-types.html

# List is an ordered sequence of items. It is a very flexible data type in python
# The values in a list doesn't have to be of the same type
# items in a list can be modified
# declare a list1 variable and assign values of different datatypes in the list
# items can be accessed based on their index position

"Predict, then Run, and then Investigate"

emptyList = [] # creates an empty list
print(type(emptyList))
print(emptyList)

# creates a list with elements of different data types
list1 = [1, 5, 9.9, 5, "list", "list"]

# creates a list with elements of different data types
list2 = [1, 3, 4, 5, 10, 20]
print("\nThis is a List")
print(type(list1))
print(list1)
print(type(list2))
print(list2)


# Tuple is a sequence of items that are in order
# and it is not possible to modify the tuples. Therefore,
# tuples are faster than list and the primary use of tuples
# is to create, write and protect data
# items can be accessed based on their index position

# declare/create a tuple1 variable and assign values of different datatypes in the tuple
tuple1 = (6, -4, "Tuple", -4, 3.2, "Tuple")
print("\nThis is a Tuple")
print(type(tuple1))
print(tuple1)

# Set is a  collection of unique items that are not in order,
# it is an unordered datatype. Duplicates are eliminated in a set
# Set items cannot be accessed based on their index position

# declare/create a set1 variable and assign values of different datatpes in the set
set1 = {4, 5, 5, 5, 5, 5, 5, 10.5, "xyz", 1.3, 5, "xyz"}
print("\nThis is a Set")
print(type(set1))
print(set1)

# expected output
# duplicate items will be printed only once
# items in the list will be displayed in no particular order

# Dictionary stored data as key value pairs
# to retrieve a specific value from a dictionary you need to know the key

# create a dictionary with key value pairs
dictionary1 = {1: "John", 2: "Anna", 3: "Peter"}
dictionary2 = {"age": 23, "homeOwner": True}

print("\nThis is a Dictionary")
print(type(dictionary1))
print(dictionary2)

"Modify:"
"To DO:"
# Modify the data structures above by changing their values or object names
lst = ["anitha",28,2008,'good']
print(type(lst))
print(lst)
set2 = {'aaa','bbb',28,6,7,8,6,6,'aaa'}
print(type(set2))
print(set2)
tuple3 = ("t1",'t2',1,2,3,4,'t2')
print(type(tuple3))
print(tuple3)
dictionary3={1:"anitha",2:"natarajan",3:'leninkumar'}
print(type(dictionary3))
print(dictionary3)


"Make:"
"To DO:"
# Create a list with five elements(items)
lst = ["anitha",28,2008,'good',-18]
print(type(lst))
print(lst)
# Create a tuple with five elements(items)
tuple3 = ("t1",'t2',1,2,3,4,'t2')
print(type(tuple3))
print(tuple3)
# Create a set with five elements(items)
set2 = {'aaa','bbb',28,6,7,8,6,6,'aaa'}
print(type(set2))
print(set2)
# Create a dictionary with five key value pairs items
dictionary3={1:"anitha",2:"natarajan",3:'leninkumar'}
print(type(dictionary3))
print(dictionary3)

"To DO:Extension"
"Why and when would you use a:" 
# list -- Lists are used to store multiple items in a single variable.
# List is a collection which is ordered and changeable. Allows duplicate members.
# 

# tuple -- Tuples are used to store multiple items in a single variable.
# Tuple is a collection which is ordered and unchangeable. Allows duplicate members.

# set -- Sets are used to store multiple items in a single variable.
# Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.

# dictionary -- Dictionaries are used to store data values in key:value pairs.
# Dictionary is a collection which is ordered** and changeable. No duplicate members.


