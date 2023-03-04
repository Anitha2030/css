import sqlite3 as sql # import the sqlite3 module


try:
    # To use the module, start by creating a database Connection object
    with sql.connect("Python/Part10_DBOperations/DFE4W3.db") as conn:
        #Once a connection has been established, 
        # create a Cursor object and call its execute() method to perform SQL queries:
        cursor = conn.cursor()

except sql.OperationalError as e:
    print(f"Connection failed: {e}")


