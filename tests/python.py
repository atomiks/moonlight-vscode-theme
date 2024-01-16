import random
import functools

# Decorator for logging
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(f"Function {func.__name__!r} returned {result!r}")
        return result
    return wrapper

# A simple class with different methods and properties
class Animal:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        self._name = value

    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def speak(self):
        return f"{self._name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self._name} says meow!"

# A function that handles exceptions
@debug
def random_animal_speak(animals):
    try:
        choice = random.choice(animals)
        speak = choice.speak()
    except IndexError as e:
        print("No animals in the list!")
    except Exception as e:
        print(f"An error occurred: {e}")
    else:
        return speak
    finally:
        print("Function random_animal_speak() is done")

# Using list comprehension, map and lambda
animals = [Dog("Buddy"), Cat("Whiskers"), Dog("Rex")]
animal_sounds = map(lambda animal: animal.speak(), animals)
loud_sounds = [sound.upper() for sound in animal_sounds]

# Main block
if __name__ == "__main__":
    for sound in loud_sounds:
        print(sound)
    
    # Print a random animal's sound
    print(random_animal_speak(animals))
