# # keyword list
# # import keyword
# # print (keyword.kwlist)

# # # input - to convert string into int & float
# # num1 = int(input(("Enter your first number: ")))
# # num2 = int(input(("Enter the second Number: ")))
# # num3 = num1 + num2
# # print("Addition of num1,num2",num3)

# # num1 = float(input(("Enter your first number: ")))
# # num2 = float(input(("Enter the second Number: ")))
# # num3 = num1 + num2
# # print("Addition of num1,num2",num3)

# # split
# # name1,name2,name3 = input("enter 3 names:").split()
# # print("name1:",name1)
# # print("name2:",name2)
# # print("name3:",name3)

# # name1,name2,name3 = input("enter 3 names:").split(',')
# # print("name1:",name1)
# # print("name2:",name2)
# # print("name3:",name3)

# # Join - list


# # listOfElements = ["Paul", "Kane", "Anna", 1, 2, 34.7, -8, "Luke","Abdul", "Tim", "Zak", "Waqas","Narayan","Christian","Richie"]
# # print(listOfElements[1])

# # "To Do: Task 1a: Accessing list items" 
# # # print Anna from list3 using the index position/value
# # print(listOfElements[2])
# # # print Kane from list3 using the negative index position/value
# # print(listOfElements[-14])

# # For loop

# for i in range(6):
#     for j in range(i):
#          print("*", end="")
#     print(" ")

# print("_________________________")

# for i in range(5,0,-1):
#     for j in range(i):
#          print("*", end="")
#     print(" ")

# ----------------------
# *
# * *
# * * *
# * * * *
# * * * * *

# for i in range(6):
#      for j in range(i):
#           print("*", end=" ")
#      print(" ")

# for i in range(5,0,-1):
#      for j in range(i):
#           print("*", end=" ")
#      print(" ")

# ----------------------------
# ABCDE
# ABCDE
# ABCDE
# ABCDE
# ABCDE

# A-Z=65-90
# a-z=97-122

for i in range(69,64,-1):
     for j in range(69,64,-1):
        print(chr(j),end=" ")
     print (" ")
