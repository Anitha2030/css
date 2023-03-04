import sys

sys.path.insert(0,"Python/Part10_DBOperations/TblSongs")
sys.path.insert(0,"Python/Part10_DBOperations/TblMembers")
sys.path.insert(0,"Python/Part10_DBOperations/TblDownloads")


import songsmenu

# create a menu using a function 
# main Songs Menu
def dbMenuOptions():
    options = 0
    while options not in ["1","2","3","4"]:
        print("Main Menu Options\n1.Songs.\n2 Members.\n3 Downloads.\n4 To Exit")
    # re-assign the value of the options variable
        options = input("Enter an option from the menu choices above: ")
        if options not in ["1","2","3","4"]:
            print(f"{options} is not a valid choice")
    return options  


mainProgram = True
while mainProgram:
    dbMenu = dbMenuOptions()
    if dbMenu == "1":
       songsmenu.dbSongs()      
    elif dbMenu == "2":
       print("Welcome Members") # call the  function from the add songs file
    elif dbMenu == "3":
        # # call the  function from the add songs file
        print("Welcome Downloads")
    else:
        print("Exiting the Main Menu")
        mainProgram = False
input("Press Enter to Exit")



# https://docs.python.org/3/library/sqlite3.html#