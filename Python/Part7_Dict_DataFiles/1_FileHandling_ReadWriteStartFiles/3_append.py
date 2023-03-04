
# a for adding to an existing file​ and creates the file if it does not exists
# Using context manager to handling resource usage
" automatically setup and teardown resources"

"Syntax :  varName = openMethod('pathtofolder/parthtofile/Part7_Dict_DataFiles/fileName.txt', 'w')"
# open("'pathtofolder/parthtofile/Part7_Dict_DataFiles/fileName.txt', 'w'") # folder/folder/filename

# filePath1 = open("Python/Part7_Dict_DataFiles/1_FileHandling_ReadWriteStartFiles/file1.txt", "a") # folder/folder/filename
# filePath1.write("\nHello Python")
# filePath1.close()

#or
# with -- context manager

with open("Python/Part7_Dict_DataFiles/1_FileHandling_ReadWriteStartFiles/file1.txt", "a") as filePath1:
    filePath1.write("\ncreate an append to a new file")

"To Do: Task 1: Use the context manager to append to your file (yourName.txt) "
# Append your interests and a fake address
"Further reading"
# https://www.w3docs.com/snippets/python/how-to-read-a-text-file-into-a-list-or-an-array-with-python.html