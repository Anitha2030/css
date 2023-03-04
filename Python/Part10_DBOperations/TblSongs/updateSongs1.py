from connect import *
from readSongs import *
from time import sleep


def update():
    # which field can be used to update a record from the songs table? 
    idField = input("Enter the SongID of the record to be deleted: ")
    ##########################
    cursor.execute(f"SELECT * FROM songs where SongID = {idField}")
    row = cursor.fetchone()# Get the selected record from the table in the db
    if row == None:
        # row = idField
        print(f"No record with the SongID {idField} exists")
    
    else:
    ############
        fieldName = input("Enter field name (Title/Artist/Genre):" ).title()
        newFieldvalue = input(f"Enter the value for the {fieldName} field: ")
        # print(f"This is the new field value as it was entered  {newFieldvalue}")
        newFieldvalue = "'"+newFieldvalue+"'"
        # print(f"This is the amended new field value {newFieldvalue}")

        #
        # UPDATE songs SET Title/Artist/Genre = "a"/"B"/"C" WHERE SongID = 1/2/3/4...
        cursor.execute(f"UPDATE songs SET {fieldName} = {newFieldvalue} WHERE SongID = {idField}")
        conn.commit()
        print(f"Record with the SongID {idField} updated")
        sleep(3)
        read()# calling the read function from the readSongs.py file

if __name__ =="__main__":
    update()
