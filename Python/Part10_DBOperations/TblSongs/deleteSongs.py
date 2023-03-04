from connect import *
from readSongs import *
from time import sleep


def delete():
 

    try:
        "Method 1"
        # which field can be used to delete a record from the songs table? 
        idField = input("Enter the SongID of the record to be deleted: ")
        #Select a song with a specific SongID
        cursor.execute(f"SELECT * FROM songs where SongID = {idField}")
        row = cursor.fetchone()# Get the selected record from the table in the db

        if row == None:
            # row = idField
            print(f"No record with the SongID {idField} exists")
        
        else:
            cursor.execute(f"DELETE FROM songs where SongID = {idField}") #select all records
            conn.commit()
            print(f"Record with the SongID {idField} deleted")
            #  cursor.execute(f"DELETE FROM songs where SongID >= 10") #select all records
            "Method 2"
            # cursor.execute("DELETE FROM songs where SongID=" + idField) #select all records

             #delay for three seconds and then read all da from the songs table
            sleep(3)
            read() # call the read function from the external radSongs.py file
            # # if cursor.rowcount == 0:
            # if cursor.rowcount == 0:
            #     raise ValueError(f"Error: No song with ID {idField} exists in the database.")
    except sql.OperationalError as e:
        print(f"No Databse or table found: {e}")

if __name__ == "__main__":
    delete()