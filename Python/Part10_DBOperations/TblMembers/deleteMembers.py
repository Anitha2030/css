from mconnect import *
from readMembers import *
from time import sleep


def delete():
 

    try:
        "Method 1"
        # which field can be used to delete a record from the songs table? 
        idField = input("Enter the MemberID of the record to be deleted: ")
        #Select a song with a specific SongID
        cursor.execute(f"SELECT * FROM members where MemberID= {idField}")
        row = cursor.fetchone()# Get the selected record from the table in the db

        if row == None:
            # row = idField
            print(f"No record with the MemberID {idField} exists")
        
        else:
            cursor.execute(f"DELETE FROM members where MemberID = {idField}") #select all records
            conn.commit()
            print(f"Record with the MemberID {idField} deleted")
            #  cursor.execute(f"DELETE FROM members where MemberID >= 10") #select all records
    
    # "Method 2"

            # cursor.execute("DELETE FROM members where MemberID=" + idField) #select all records

             #delay for three seconds and then read all da from the songs table
            sleep(3)
            read() # call the read function from the external members2.py file
            # # if cursor.rowcount == 0:
            # if cursor.rowcount == 0:
            #     raise ValueError(f"Error: No member with ID {idField} exists in the database.")
    except sql.OperationalError as e:
        print(f"No Databse or table found: {e}")

if __name__ == "__main__":
    delete()

    # method 3 :

# from mconnect import * 
# from readMembers import *
# from time import sleep


# def delete():
#     #use memberID as it is a primary key and a unique field to delete a record
#     idField = input("Enter MemberID to delete a record: ")

#     try:
#         cursor.execute(f"DELETE FROM members WHERE MemberID = {idField}")
#         conn.commit()
#         print(f"{idField} deleted from the members Table")
#         sleep(3)
#         read()
#     except sql.OperationalError as e:
#         conn.rollback()
#         print(f"Delete failed: {e}")
        

# if __name__ =="__main__":
#     delete()

    

