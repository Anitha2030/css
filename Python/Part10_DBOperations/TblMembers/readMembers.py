from mconnect import * # import connect module

# create a function to read data from the members table

def read():
    try:
        cursor.execute("SELECT * FROM members") # select all records
        row = cursor.fetchall() # row variable holds all fetched records
        # fetchall(): fetcheds all selected records and pass it to the row variable
        # loop through all the fetched records held in row
        for aRecord in row:
            # print all the records one at a time
            print(aRecord)
    except sql.OperationalError as e: # handles error resulting from misspelled table name
        # print the error
        print(f"Records not found{e}")
# use to prevent automatic running of actions in this file, when the file is imported
# into another python file
if __name__ == "__main__":
    read()


