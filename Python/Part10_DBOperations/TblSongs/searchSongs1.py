from connect import *
from readSongs import *
from time import sleep
def search():
    try:
        field = input( "Would you like to search by SongID.Title/Artist/Genre? ") #.title()
        if field == "SongID":
            idInput = input("Enter Song ID: ")
            cursor.execute(f"SELECT * FROM songs where SongID = {idInput}")
            rows = cursor.fetchone()
            if rows == None:
                print(f"No record with the song ID {idInput}")
            else:
                for row in rows:
                    print(row)
        elif field == "Artist" or field == "Title" or field == "Genre":
            searchInput = input(f"Enter Search field for {field}: ")
            cursor.execute(f"SELECT * FROM songs where {field} LIKE '%{searchInput}%'")
            rows = cursor.fetchall()
            if rows == None:
                print(f"No record with {field} matching '{searchInput}'")
            else:
                for row in rows:
                    print(row)
        else:
            print("Invalid search field.")
    except sql.OperationalError as e:
        print(f"No Database or table found: {e}")
if __name__ =="__main__":
    search()