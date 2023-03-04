from mconnect import * 
from readMembers import *
from time import sleep

# create function
def insertMembers():

    # create a empty list
    members = []

    # ask for user input member id,firstname,Lastname,email
    fName = input("Enter your FirstName : ")
    lName = input("Enter your LastName : ")
    email = input("Enter your Email : ")

    # append data captured from user input in to the members list 
    members.append(fName)
    members.append(lName)
    members.append(email)
    print(fName,lName,email)
    # INSERT INTO members (FirstName,LastName,Email) VALUES ("JJ","Smith",j@smith.com)
    # or
    # INSERT INTO members VALUES (Null,?,?,?)

    try: #                                         SongID, title, artist, Genre
        cursor.execute("INSERT INTO members VALUES (NULL,?,?,?)", members)
        conn.commit() #Make the changes permanent
        print(f"{fName} added in the members table")

        # delay for three seconds and then read all da from the songs table
        sleep(3)
        read() # call the read function from the external radSongs.py file
      
    except sql.OperationalError as e:
        conn.rollback()
        print(f"Record(s) not added to members table: {e}")

if __name__ == "__main__":
    insertMembers()


