"Parameter(s): used in a subroutine/function to allow values to be passed into them/used as a place holder(s)"


# define the subroutine/function userName with parameter paraUname
"In the subroutine definition, you pass in the parameter(s)(placeholder(s))"

"To Do: Predict, then Run, and then Investigate"
def userName():
    print("Your name is:")


"in the subrotuine call, you pass in the argument(s)"


"Make/Modify"
"To Do: Task 1 : Modify the subroutine call below to pass in you own name as an argument "


if __name__ == "__main__":
    # Method 1
    # in the subroutine call we pass in the name Bob within the braces as an argument to be passed
    # into the parameter paraUname
    userName()

    # Method 2
    # in the subrotuine call we pass in the variable name  within the braces as an argument to be passed
    # into the parameter paraUname
    name = input("enter name")
    userName()

    # Method 3
    # in the subrotuine call we pass in the input function as an argument to ask for user names
    #  within the braces as an argument to be passed
    # into the parameter paraUname
    userName (input("enter ur name:"))
"Further reading on python functions"
