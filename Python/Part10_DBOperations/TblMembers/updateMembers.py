from mconnect import * 
from readMembers import *
from time import sleep

def update():
      #use memberID as it is a primary key and a unique field to update a record
    idField = input("Enter MemberID to update a record: ")
    fieldName = input("Enter the field (Firstname or Lastname or Email) to update: ").title()

    fieldNameValue = input(f"Enter the value for {fieldName}: ")
    print(fieldNameValue)
    fieldNameValue = "'"+fieldNameValue+"'"
    print(fieldNameValue)

    try:  #UPDATE members SET FirstName or LastName or Email =FirstNameValue or LastNameValue or EmailValue
        #WHERE membersID = 1/2/3/4/5/6.....
        cursor.execute(f"UPDATE members SET {fieldName} = {fieldNameValue} WHERE MemberID = {idField}")
        conn.commit()
        print(f"{idField} Updated in the members Table")
        sleep(3)
        read()
    except sql.OperationalError as e:
        conn.rollback()
        print(f"Update failed: {e}")
        

if __name__ =="__main__":
    update()