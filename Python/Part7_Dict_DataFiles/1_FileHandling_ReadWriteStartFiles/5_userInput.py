fname    = input("Enter you full name: ")
address   = input("Enter your address: ")
interest = input("Enter your interest: ")
age      =    int(input("Enter your age: "))
"Make"
"To Do: Task 1: use the code above to ask for user input and then save it to a file called userDetails.txt"

# Method 1:
with open("Python/Part7_Dict_DataFiles/1_FileHandling_ReadWriteStartFiles/file1.txt", "a") as filePath1:
    # filePath1.write(f"\nUser Details: {fname} { address} { interest} { age}")

#Method 2:
# filePath1.write(fname + " " + address + " " + interest + " " + str(age))

#Method 3:
    myUser1 = "\n" + fname + " " + address + " " + interest + " " + str(age)
    # myUser2 = f"\nUser Details: {fname} { address} { interest} { age}"
    filePath1.write(myUser1)
# with open("Python/Part7_Dict_DataFiles/1_FileHandling_ReadWriteStartFiles/userDetails.txt","+r") as filePath:
#     filePath.write(f"User Details : {fname} { address} { interest} { age}")
#     print(filePath.read())



"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp