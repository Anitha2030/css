from connect import * 
from readSongs import *
from time import sleep

# https://www.mockaroo.com/
# define function 
def insertSongs():
    # create an empty list
    songs = []
    # ask user for input 
    # songID not required because it is autoincrement
    title = input("Enter song Title: ")
    artist = input("Enter Artist Name: ")
    Genre = input("Enter song Genre: ")

    # append data captured from user input in to the songs list 
    songs.append(title )
    songs.append(artist)
    songs.append(Genre )

    #INSERT INTO songs (title, artist, Genre) VALUES ("a","b","c")
    " OR "
    #INSERT INTO songs VALUES (NULL, "a","b","c")

    try: #                                         SongID, title, artist, Genre
        cursor.execute("INSERT INTO songs VALUES (NULL, ?,?,?)", songs)
        conn.commit() #Make the changes permanent
        print(f"{title} added in the songs table")

        # delay for three seconds and then read all da from the songs table
        sleep(3)
        read() # call the read function from the external radSongs.py file
      
    except sql.OperationalError as e:
        print(f"Record(s) not added to songs table: {e}")

if __name__ == "__main__":
    insertSongs()

