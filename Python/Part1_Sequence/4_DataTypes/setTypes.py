
"Further reading on datatypes in python"
# https://docs.python.org/3/library/stdtypes.html#tuple
# https://docs.python.org/3/library/stdtypes.html#set
# https://www.w3docs.com/learn-python/python-data-types.html


"A set is an unordered list"


"Predict, then Run, and then Investigate"
set1 = {10,20,30, "xyz", "abc"} # once a set is created the values/items can not be changed 
print(type(set1))
print(set1)

set1.update([1,4,"bcd"]) # set can be updated with new items/value
print(set1)

set2={4,7, "paul", "peter"}
set1.update(set2)
print(set1)

set1.remove("peter")# items in a set can ony be removed using the name/value of the set item not via index 
print(set1)


"To Do: Investigate and exlain in your own words the purpose of the forLoop in the code block below"
# Add an element to a set.
set1.add("Python") # new items/value can be added to a set after creation
print(set1)
for i in set2:
    print(i)

set3 = {21,22,23,"John"}
print(set3)

set4 = input("Enter Value: ")
print(set4)


"Predict, Run and Investigate the frozen set"
fSet3 = frozenset(set3)
print(fSet3)


"Modify:"
"To DO:"
# Modify the data structures above by changing their values or object names
set5 = { 1,2,'anitha','lenin',2008,11,2,1}
print(set5)
set5.update(['nila','Nithi'])
print(set5)
set5.add('saradha')
print(set5)
set5.remove(2008)
print(set5)

"Make:"
"Task 1: Follow the set examples above to create a set with five countries"
# print the items(countries) in the set 
# add two more countries
# delete a counry of your choice
# print the set items
set6 = {"India","United Kingdom","USA"}
print(set6)
set6.update(['Singapore','japan'])
print(set6)
set6.remove('USA') # remove the value // delete if we know the index number
print(set6)

"Make:"
"To DO: Try to add an item to frozen set 'fset' and explain the outcome"

# frozenset -- The frozenset() function returns an unchangeable frozenset object (which is like a set object, only unchangeable).
fset = frozenset(set6)
print(fset)
# fset.update(['greece']) --- 'frozenset' object has no attribute 'update'
# print(fset)
# fset.add("Greece")  --- AttributeError: 'frozenset' object has no attribute 'add'
# print(fset)