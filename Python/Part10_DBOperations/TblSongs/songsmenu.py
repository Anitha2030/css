from addSongs import *
from readSongs import *
from updateSongs import *
from deleteSongs import *
from searchSongs1 import *



# create a menu using a function 
# main Songs Menu
def SongsMenuOptions():
    options = 0
    while options not in ["1","2","3","4","5","6"]:
        print("Songs Menu Options\n1.To Read.\n2 To Add.\n3 To Update.\n4 To Delete.\n5 To Search.\n6 To Exit")
    # re-assign the value of the options variable
        options = input("Enter an option from the menu choices above: ")
        if options not in ["1","2","3","4","5","6"]:
            print(f"{options} is not a valid choice")
    return options  



def dbSongs():

    mainProgram = True
    while mainProgram:
        songsMenu = SongsMenuOptions()
        if songsMenu == "1":
            read()       
        elif songsMenu == "2":
            insertSongs() # call the insertSOngs function from the add songs file
        elif songsMenu == "3":
            update()# call the update function from the add songs file
            # print("Welcome to update")
        elif songsMenu == "4":
               delete() # call the update function from the add songs file
            # print("Welcome to delete")
        elif songsMenu == "5":
            search() # call the search function from the add songs file

        else:
            print("Exiting the songs menu")
            mainProgram = False
    input("Press Enter to Exit")
    # return mainProgram
if __name__ == "__main__":
    dbSongs()