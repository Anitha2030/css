from connect import *



def read():
    try:
        cursor.execute("SELECT * FROM songs") #select all records
        row = cursor.fetchall() # get all the selected records
        for arecord in row:
            print(arecord)
  
    except sql.OperationalError as e:
        print(f"Record(s) not found: {e}")
if __name__ == "__main__":
    read()