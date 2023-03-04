
"To Do: Task1:Modify the code below to:"
# Read the contents of your file (yourName.txt) by replacing the "w" mode after the file path 
# That is replace the write() method with the read method() 

"Syntax :  varName = openMethod('pathtofolder/parthtofile/Part7_Dict_DataFiles/fileName.txt', 'w')"
filePath1 = open("Python/Part7_Dict_DataFiles/1_FileHandling_ReadWriteStartFiles/file1.txt", "r") # folder/folder/filename
# print(filePath1.read())
# or
fileContent = filePath1.read()
# fileContent = filePath1.readline() # read the first line only
# fileContent = filePath1.readlines() # reads all the text `nd output the text in a list with the \n`
print(fileContent)
filePath1.close()

"Further reading"
# https://www.w3docs.com/snippets/python/how-to-read-a-text-file-into-a-list-or-an-array-with-python.html