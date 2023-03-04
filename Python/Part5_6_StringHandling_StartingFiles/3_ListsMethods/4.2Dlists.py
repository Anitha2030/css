"List methods"
"list.append(item)"  # add item at end of list
"list.insert(index,item)"  # add item at index
"list.pop(index)"  # remove item at index
"list.remove(item)"  # remove item
"list.index(item)"  # search for index of item
"list.count(item)"  # get occurrences of item
"list.reverse()"  # reverse list
"list.sort()"  # sort list

"Traverse"  # Move through a sequence.
"Method"  # A function that belongs to an object.
"Custom  built function"  # A function that you have created yourself and imported into other programs that you have created.
"List"  # A dynamic data structure that holds items under one name. The items can be of varying data types.

"To Do: Predict, then Run, and then Investigate"
# The list below contains string literals (i.e. pieces of text) and need to be in quotes

#                 0         1         2        3         4
listOfNames = ["Nicole", "Laura", "Silvia", "Steve", "Juliet"]
print(listOfNames)  # Prints the list
print(listOfNames[2])  # Prints Silvia

"What is the use of the len()?"
for index in range(len(listOfNames)):
    print(f"{index} : {listOfNames[index]}")

print(f"\n{listOfNames}")
# What item is returned from the list and why?
print(f"{listOfNames[3]}\n")

"To Do: Task1"

twoDLists = [
    #      0      1          2       3       4
    ["Nicole", "Laura", "Silvia", "Steve", "Juliet"],  # 0
    # List of numbers
    [10, 20, 30, 40, 50],  # 1
    # List of Tecnologies
    ["JS", "Python", "HTML", "CSS", "NoSQL"],  # 2
]
# You have been provided with the multidimentional list below.
"Your tasks are listed below"
# 1. Print the multidimentional list
print("-----------------------------")
print(f"{twoDLists}")
# 2. Print Nicole, number 10 and JS
print(f"{twoDLists[0][0]} {twoDLists[1][0]} {twoDLists[2][0]} ")
# 3. Print Laura, number 20 and Python
print(f"{twoDLists[0][1]} {twoDLists[1][1]} {twoDLists[2][1]} ")
# 4. Print Juliet, number 50 and NoSQl
print(f"{twoDLists[0][4]} {twoDLists[1][4]} {twoDLists[2][4]} ")


# print(twoDLists[row/list level][index position of item in the list])
for index in range(len(twoDLists)):
    print(f"{index} : {twoDLists[index]}")
# Create a 2D list with 6 items 
twoDlist = [["Anitha","Lenin","Bobby","Nithi","Nila","Nissanth"],
            [1,2,3,4,5,6],
            [39,43,41,14,8,11]]
print(f"{twoDlist}")
# name of your choice 
print(f"{twoDlist[0][3]}")
# print the 2nd, 4th and last item in the list
print (f"{twoDlist[0][1] } {twoDlist[1][1]} {twoDlist[2][1]}")
print (f"{twoDlist[0][3] } {twoDlist[1][3]} {twoDlist[2][3]}")
print (f"{twoDlist[0][5] } {twoDlist[1][5]} {twoDlist[2][5]}")

#or
def items(index):
    return f"{twoDlist[0][index]}  {twoDlist[1][index]}  {twoDlist[2][index]}"
print(items(1))
print(items(3))
print(items(5))

"To Do: Task3: Practice exercise over the weekend"
# # Create a shopping list program



