import random 

# Working with in built python modules/libraries

"To Do: Predict, then Run, and then Investigate"
Trainers = ["Tim", "Zak", "Waqas", "Abdul", "Chris", "Richie", "Narayan"]

#choice allow us to choose a random element from a non-empty sequence, see example below.
randomName = random.choice(Trainers)
print(f"\nThe {randomName} was randomly selected from the list of names above ")


"Make"
"To Do: Task 1: Use the notes above in create a list of five animals"
# 1 Randomly choice method to randomly display an animanl from the list
animals = ["cat","dog","goat",'lizard']
randAnimal = random.choice(animals)
print(f"\nThe {randAnimal} was randomly selected from the list of names above ")
