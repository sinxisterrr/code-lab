const CHALLENGES = {
  python: [

    // ── BEGINNER ──────────────────────────────────────────────────────────────

    {
      id: 'py_001',
      tier: 'beginner',
      title: 'Variables & Types',
      difficulty: 'beginner',
      topic: 'Basics',
      description: `## Variables & Types

In Python, you don't declare a type — it's inferred automatically.

\`\`\`python
name = "Alice"   # str
age = 30         # int
score = 9.5      # float
active = True    # bool
\`\`\`

**Your task:** Create the following variables and print each one:
- \`city\` — a string with any city name
- \`population\` — an integer (make one up)
- \`temperature\` — a float (current temp in that city)

Print all three on separate lines.`,
      starterCode: `# Create your three variables here


# Print them

`,
      testCode: `
try:
    assert isinstance(city, str), "city should be a string"
    assert isinstance(population, int), "population should be an integer"
    assert isinstance(temperature, float), "temperature should be a float"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ Test failed: {e}")
except NameError as e:
    print(f"\\n❌ Variable not defined: {e}")
`,
      hints: [
        'Strings need quotes: `city = "Tokyo"`',
        'Integers are whole numbers with no quotes: `population = 14000000`',
        'Floats have a decimal point: `temperature = 72.5`',
        'Use `print(city)` to print a variable',
      ],
    },

    {
      id: 'py_002',
      tier: 'beginner',
      title: 'String Formatting',
      difficulty: 'beginner',
      topic: 'Strings',
      description: `## String Formatting

f-strings are Python's cleanest way to embed variables in text. Prefix the string with \`f\` and use curly braces:

\`\`\`python
name = "Sam"
age = 25
print(f"My name is {name} and I am {age} years old.")
\`\`\`

**Your task:** Given the variables below, use an f-string to print:

\`Hello! My name is [name] and I write code in [language].\``,
      starterCode: `name = "Sam"
language = "Python"

# Write your f-string print here
`,
      testCode: `
import sys
_out = sys.stdout.getvalue()
try:
    assert "Sam" in _out, "Output should include the name"
    assert "Python" in _out, "Output should include the language"
    assert "Hello" in _out, "Output should start with 'Hello'"
    print("✅ All tests passed!")
except AssertionError as e:
    print(f"❌ Test failed: {e}")
`,
      hints: [
        'Start the string with f: `f"text here"`',
        'Put variable names in curly braces: `{name}`',
        'The full template: `f"Hello! My name is {name} and I write code in {language}."`',
      ],
    },

    {
      id: 'py_003',
      tier: 'beginner',
      title: 'Lists',
      difficulty: 'beginner',
      topic: 'Data Structures',
      description: `## Lists

Lists store ordered collections. You access items by index (starting at 0).

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple
print(fruits[-1])  # cherry (last item)
fruits.append("mango")
\`\`\`

**Your task:**
1. Create a list called \`languages\` containing at least 3 programming languages as strings
2. Print the first item
3. Print the last item using a negative index
4. Append one more language to the list
5. Print the length of the list using \`len()\``,
      starterCode: `# 1. Create your list
languages =

# 2. Print the first item

# 3. Print the last item

# 4. Append one more language

# 5. Print the length

`,
      testCode: `
try:
    assert isinstance(languages, list), "languages should be a list"
    assert len(languages) >= 4, "List should have at least 4 items after appending"
    assert all(isinstance(x, str) for x in languages), "All items should be strings"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ Test failed: {e}")
`,
      hints: [
        'Lists use square brackets: `languages = ["Python", "JavaScript", "TypeScript"]`',
        'First item is index 0: `languages[0]`',
        'Last item: `languages[-1]`',
        'Add to end: `languages.append("Rust")`',
        'Length: `len(languages)`',
      ],
    },

    {
      id: 'py_004',
      tier: 'beginner',
      title: 'Dictionaries',
      difficulty: 'beginner',
      topic: 'Data Structures',
      description: `## Dictionaries

Dictionaries store key-value pairs. You look up a key to get its value.

\`\`\`python
person = {"name": "Alice", "age": 30}
print(person["name"])        # Alice
person["job"] = "Engineer"   # add new key
for key, value in person.items():
    print(f"{key}: {value}")
\`\`\`

**Your task:** Complete \`print_dict_elements\` so it prints each key and value as \`key: value\`, then call it with \`rocket_info\`.`,
      starterCode: `def print_dict_elements(dct):
    for key, value in dct.items():
        print("")  # fix this line

rocket_info = {
    "Falcon 1": "First privately developed liquid-fueled rocket",
    "Atlas V": "Launch vehicle for Mars Rovers",
    "Saturn V": "Rocket that took humans to the Moon",
    "Space Shuttle": "First reusable spacecraft"
}

print_dict_elements(rocket_info)
`,
      testCode: `
import sys
_out = sys.stdout.getvalue()
try:
    assert "Falcon 1: First privately developed" in _out
    assert "Atlas V: Launch vehicle" in _out
    assert "Saturn V: Rocket that took" in _out
    assert "Space Shuttle: First reusable" in _out
    print("\\n✅ All tests passed!")
except AssertionError:
    print("\\n❌ Test failed — check your format is 'key: value'")
`,
      hints: [
        '`dct.items()` gives you both key and value in each iteration',
        'Use an f-string: `print(f"{key}: {value}")`',
      ],
    },

    {
      id: 'py_005',
      tier: 'beginner',
      title: 'Functions',
      difficulty: 'beginner',
      topic: 'Functions',
      description: `## Functions

Functions package reusable logic. Parameters go in the parentheses, and \`return\` sends a value back.

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!
\`\`\`

**Your task:** Write \`calculate_bmi(weight_kg, height_m)\` that returns \`weight_kg / (height_m ** 2)\` rounded to 1 decimal place.`,
      starterCode: `def calculate_bmi(weight_kg, height_m):
    # Calculate and return the BMI here
    pass

result = calculate_bmi(70, 1.75)
print(f"BMI: {result}")
`,
      testCode: `
try:
    assert calculate_bmi(70, 1.75) == 22.9, f"Expected 22.9, got {calculate_bmi(70, 1.75)}"
    assert calculate_bmi(90, 1.80) == 27.8, f"Expected 27.8, got {calculate_bmi(90, 1.80)}"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except TypeError as e:
    print(f"\\n❌ Function error: {e}")
`,
      hints: [
        'Remove `pass` and write the calculation',
        'Height squared: `height_m ** 2`',
        'BMI formula: `weight_kg / (height_m ** 2)`',
        'Round it: `return round(weight_kg / (height_m ** 2), 1)`',
      ],
    },

    {
      id: 'py_006',
      tier: 'beginner',
      title: 'For Loops',
      difficulty: 'beginner',
      topic: 'Loops',
      description: `## For Loops

Loops let you repeat code for each item in a sequence.

\`\`\`python
numbers = [1, 2, 3, 4, 5]
total = 0
for n in numbers:
    total += n
print(total)  # 15
\`\`\`

**Your task:** Write \`count_above(numbers, threshold)\` that returns how many numbers in the list are **strictly greater than** the threshold.

\`\`\`python
count_above([1, 5, 3, 8, 2, 9], 4)  # → 3  (5, 8, 9 are above 4)
\`\`\``,
      starterCode: `def count_above(numbers, threshold):
    count = 0
    for n in numbers:
        # add to count if n is greater than threshold
        pass
    return count

print(count_above([1, 5, 3, 8, 2, 9], 4))  # should print 3
print(count_above([10, 20, 30], 15))         # should print 2
`,
      testCode: `
try:
    assert count_above([1, 5, 3, 8, 2, 9], 4) == 3
    assert count_above([10, 20, 30], 15) == 2
    assert count_above([1, 2, 3], 10) == 0
    assert count_above([5, 5, 5], 5) == 0, "strictly greater than, not ≥"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ Test failed: {e}")
`,
      hints: [
        'Inside the loop, check: `if n > threshold:`',
        'Increment the counter: `count += 1`',
        'Remove `pass` once you add the if statement',
      ],
    },

    {
      id: 'py_b07',
      tier: 'beginner',
      title: 'Conditionals',
      difficulty: 'beginner',
      topic: 'Control Flow',
      description: `## Conditionals

Use \`if\`, \`elif\`, and \`else\` to branch based on conditions. Order matters — Python checks from top to bottom and stops at the first match.

\`\`\`python
def classify(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"
\`\`\`

**Your task:** Write \`ticket_price(age, is_student)\` that returns:
- \`0\` if age < 5 (free)
- \`8\` if age < 12
- \`10\` if age >= 65
- \`12\` if is_student (any other age)
- \`20\` otherwise (standard price)`,
      starterCode: `def ticket_price(age, is_student):
    # check conditions in order
    pass

print(ticket_price(3, False))   # 0
print(ticket_price(10, False))  # 8
print(ticket_price(70, False))  # 10
print(ticket_price(25, True))   # 12
print(ticket_price(30, False))  # 20
`,
      testCode: `
try:
    assert ticket_price(3, False) == 0, "age < 5 is free"
    assert ticket_price(4, True) == 0, "age < 5 is free even for students"
    assert ticket_price(10, False) == 8, "age 5-11 costs 8"
    assert ticket_price(70, False) == 10, "age 65+ costs 10"
    assert ticket_price(25, True) == 12, "student price is 12"
    assert ticket_price(30, False) == 20, "standard price is 20"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        'Check the most specific conditions first — `age < 5` before `age < 12`',
        'Use `elif` for each additional condition after the first `if`',
        'Check `is_student` after the age checks, before the final `else`',
        'The final `else` catches everything that didn\'t match above',
      ],
    },

    {
      id: 'py_b08',
      tier: 'beginner',
      title: 'String Methods',
      difficulty: 'beginner',
      topic: 'Strings',
      description: `## String Methods

Python strings have many built-in methods for cleaning and transforming text.

\`\`\`python
s = "  Hello, World!  "
s.strip()               # "Hello, World!"
s.lower()               # "  hello, world!  "
"hi mom".split()        # ["hi", "mom"]
"cat".replace("c","b")  # "bat"
"hello".startswith("he") # True
\`\`\`

**Your task:**
1. \`extract_initials(full_name)\` → \`"J.M.S."\` for \`"John Michael Smith"\`
2. \`is_palindrome(s)\` → \`True\` if \`s\` reads the same forwards and backwards, ignoring case and spaces`,
      starterCode: `def extract_initials(full_name):
    # Split the name, take the first letter of each part
    pass

def is_palindrome(s):
    # Ignore case and spaces, then compare to its reverse
    pass

print(extract_initials("John Michael Smith"))       # J.M.S.
print(extract_initials("Ada Lovelace"))             # A.L.
print(is_palindrome("racecar"))                     # True
print(is_palindrome("hello"))                       # False
print(is_palindrome("A man a plan a canal Panama")) # True
`,
      testCode: `
try:
    assert extract_initials("John Michael Smith") == "J.M.S."
    assert extract_initials("Ada Lovelace") == "A.L."
    assert extract_initials("Guido") == "G."
    assert is_palindrome("racecar") == True
    assert is_palindrome("hello") == False
    assert is_palindrome("A man a plan a canal Panama") == True
    assert is_palindrome("Was it a car or a cat I saw") == True
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`extract_initials`: `.split()` splits on spaces, then take `word[0].upper()` for each',
        'Join with dots: `".".join(letters) + "."`',
        '`is_palindrome`: clean with `s.lower().replace(" ", "")`, then check `cleaned == cleaned[::-1]`',
        '`[::-1]` reverses a string',
      ],
    },

    {
      id: 'py_b09',
      tier: 'beginner',
      title: 'Tuples',
      difficulty: 'beginner',
      topic: 'Data Structures',
      description: `## Tuples

Tuples are **immutable** ordered sequences — perfect for grouping related values and returning multiple things from a function.

\`\`\`python
point = (3, 4)        # create
x, y = point          # unpack

def divmod_custom(a, b):
    return (a // b, a % b)   # return two values

quotient, remainder = divmod_custom(17, 5)
\`\`\`

**Your task:**
1. \`minmax(numbers)\` — returns \`(minimum, maximum)\` as a tuple
2. \`distance(p1, p2)\` — p1 and p2 are \`(x, y)\` tuples; returns the Euclidean distance between them`,
      starterCode: `import math

def minmax(numbers):
    # Return (min, max) as a tuple
    pass

def distance(p1, p2):
    # Unpack p1 and p2, then compute Euclidean distance
    pass

low, high = minmax([3, 1, 4, 1, 5, 9, 2, 6])
print(f"Min: {low}, Max: {high}")   # Min: 1, Max: 9

print(distance((0, 0), (3, 4)))     # 5.0
`,
      testCode: `
import math
try:
    assert minmax([3, 1, 4, 1, 5, 9]) == (1, 9)
    assert minmax([7]) == (7, 7)
    mn, mx = minmax([10, 5, 8])
    assert mn == 5 and mx == 10
    assert distance((0, 0), (3, 4)) == 5.0
    assert abs(distance((1, 1), (4, 5)) - 5.0) < 0.001
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`minmax`: `return (min(numbers), max(numbers))`',
        '`distance`: unpack with `x1, y1 = p1` then `x2, y2 = p2`',
        'Euclidean distance: `math.sqrt((x2 - x1)**2 + (y2 - y1)**2)`',
        'A tuple of one item needs a trailing comma: `(42,)` not `(42)`',
      ],
    },

    {
      id: 'py_b10',
      tier: 'beginner',
      title: 'Sets',
      difficulty: 'beginner',
      topic: 'Data Structures',
      description: `## Sets

Sets store **unique, unordered** elements. They're fast for membership tests and set operations.

\`\`\`python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
a & b   # intersection: {3, 4}
a | b   # union: {1, 2, 3, 4, 5, 6}
a - b   # difference (in a, not in b): {1, 2}
a ^ b   # symmetric difference: {1, 2, 5, 6}
\`\`\`

**Your task:**
1. \`mutual_friends(friends_a, friends_b)\` — friends both users have in common
2. \`exclusive_to_first(group_a, group_b)\` — items in group_a that are NOT in group_b`,
      starterCode: `def mutual_friends(friends_a, friends_b):
    pass

def exclusive_to_first(group_a, group_b):
    pass

print(mutual_friends({"Alice", "Bob", "Carol"}, {"Bob", "Carol", "Dave"}))
# {'Bob', 'Carol'}

print(exclusive_to_first({1, 2, 3, 4}, {3, 4, 5, 6}))
# {1, 2}
`,
      testCode: `
try:
    assert mutual_friends({"Alice","Bob","Carol"}, {"Bob","Carol","Dave"}) == {"Bob","Carol"}
    assert mutual_friends({"A"}, {"B"}) == set()
    assert exclusive_to_first({1,2,3,4}, {3,4,5}) == {1,2}
    assert exclusive_to_first({1,2}, {1,2,3}) == set()
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        'Use `&` for intersection (mutual): `set(a) & set(b)`',
        'Use `-` for difference (exclusive): `set(a) - set(b)`',
        'Convert lists to sets first if needed: `set(friends_a)`',
        'Sets deduplicate automatically: `{1, 1, 2}` becomes `{1, 2}`',
      ],
    },

    // ── INTERMEDIATE ──────────────────────────────────────────────────────────

    {
      id: 'py_007',
      tier: 'intermediate',
      title: 'List Comprehensions',
      difficulty: 'intermediate',
      topic: 'Comprehensions',
      description: `## List Comprehensions

A concise way to build lists from other lists:

\`\`\`python
# Long way:
squares = []
for n in range(5):
    squares.append(n * n)

# List comprehension:
squares = [n * n for n in range(5)]
# [0, 1, 4, 9, 16]

# With a filter:
evens = [n for n in range(10) if n % 2 == 0]
# [0, 2, 4, 6, 8]
\`\`\`

**Your task:** Using list comprehensions (one expression each), create:
1. \`squared\` — squares of numbers 1 through 10
2. \`long_words\` — words from \`word_list\` that have more than 4 characters
3. \`uppercased\` — every word in \`word_list\` converted to uppercase`,
      starterCode: `word_list = ["cat", "elephant", "dog", "python", "ox", "jaguar"]

# 1. Squares of 1-10
squared =

# 2. Words longer than 4 characters
long_words =

# 3. All words uppercased
uppercased =

print(squared)
print(long_words)
print(uppercased)
`,
      testCode: `
try:
    assert squared == [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
    assert long_words == ["elephant", "python", "jaguar"]
    assert uppercased == ["CAT", "ELEPHANT", "DOG", "PYTHON", "OX", "JAGUAR"]
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ Test failed: check your output vs expected")
except SyntaxError as e:
    print(f"\\n❌ Syntax error: {e}")
`,
      hints: [
        'Squares: `[n**2 for n in range(1, 11)]`',
        'Filter: `[w for w in word_list if len(w) > 4]`',
        'Uppercase: `[w.upper() for w in word_list]`',
      ],
    },

    {
      id: 'py_008',
      tier: 'intermediate',
      title: 'Classes',
      difficulty: 'intermediate',
      topic: 'OOP',
      description: `## Classes & Objects

Classes are blueprints for objects. \`__init__\` is the constructor that runs when you create an instance.

\`\`\`python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} says: Woof!"

rex = Dog("Rex", "Labrador")
print(rex.bark())  # Rex says: Woof!
\`\`\`

**Your task:** Create a \`BankAccount\` class with:
- Constructor: \`owner\` (str) and \`balance\` (float, default 0)
- \`deposit(amount)\` — adds to balance, returns new balance
- \`withdraw(amount)\` — subtracts if funds available, returns new balance; if not, prints \`"Insufficient funds"\` and returns current balance
- \`__str__\` — returns \`"[owner]'s account: $[balance]"\``,
      starterCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        pass

    def deposit(self, amount):
        pass

    def withdraw(self, amount):
        pass

    def __str__(self):
        pass

acc = BankAccount("Sam", 100)
print(acc)
acc.deposit(50)
acc.withdraw(30)
acc.withdraw(200)  # should print "Insufficient funds"
print(acc)
`,
      testCode: `
try:
    acc = BankAccount("Test", 100)
    assert acc.deposit(50) == 150, "deposit should return new balance"
    assert acc.withdraw(30) == 120, "withdraw should return new balance"
    acc2 = BankAccount("New")
    assert acc2.balance == 0, "default balance should be 0"
    assert "New" in str(acc2) and "$" in str(acc2)
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except AttributeError as e:
    print(f"\\n❌ Missing attribute: {e}")
`,
      hints: [
        'In `__init__`: `self.owner = owner` and `self.balance = balance`',
        '`deposit`: `self.balance += amount` then `return self.balance`',
        '`withdraw`: check `if amount > self.balance` first',
        '`__str__`: `return f"{self.owner}\'s account: ${self.balance}"`',
      ],
    },

    {
      id: 'py_i03',
      tier: 'intermediate',
      title: 'Dict Comprehensions',
      difficulty: 'intermediate',
      topic: 'Comprehensions',
      description: `## Dict Comprehensions

Like list comprehensions but produce dictionaries.

\`\`\`python
squares = {n: n**2 for n in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

filtered = {k: v for k, v in scores.items() if v >= 80}
\`\`\`

**Your task:**
1. \`word_lengths(words)\` — maps each word to its length
2. \`filter_scores(scores, min_val)\` — keeps only entries where value ≥ min_val
3. \`invert_dict(d)\` — swaps keys and values`,
      starterCode: `def word_lengths(words):
    pass  # {word: len(word) for ...}

def filter_scores(scores, min_val):
    pass  # keep entries where value >= min_val

def invert_dict(d):
    pass  # swap keys and values

print(word_lengths(["python", "is", "cool"]))
# {'python': 6, 'is': 2, 'cool': 4}

print(filter_scores({"Alice": 92, "Bob": 75, "Carol": 88}, 80))
# {'Alice': 92, 'Carol': 88}

print(invert_dict({"a": 1, "b": 2}))
# {1: 'a', 2: 'b'}
`,
      testCode: `
try:
    assert word_lengths(["cat", "hi"]) == {"cat": 3, "hi": 2}
    assert word_lengths([]) == {}
    assert filter_scores({"A": 90, "B": 70, "C": 80}, 80) == {"A": 90, "C": 80}
    assert filter_scores({"X": 50}, 60) == {}
    assert invert_dict({"x": 1, "y": 2}) == {1: "x", 2: "y"}
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`word_lengths`: `return {w: len(w) for w in words}`',
        '`filter_scores`: `return {k: v for k, v in scores.items() if v >= min_val}`',
        '`invert_dict`: `return {v: k for k, v in d.items()}`',
      ],
    },

    {
      id: 'py_i04',
      tier: 'intermediate',
      title: 'Inheritance',
      difficulty: 'intermediate',
      topic: 'OOP',
      description: `## Inheritance

A child class inherits all methods from its parent, and can override them with its own behavior.

\`\`\`python
class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2

c = Circle(5)
print(c.area())  # 78.539...
\`\`\`

**Your task:** Create an \`Animal\` base class with \`__init__(self, name)\` and \`speak()\` returning \`"..."\`. Then create:
- \`Dog\` — \`speak()\` returns \`"[name] says Woof!"\`
- \`Cat\` — \`speak()\` returns \`"[name] says Meow!"\`
- \`Parrot(name, phrase)\` — \`speak()\` returns \`"[name] says [phrase]!"\``,
      starterCode: `class Animal:
    def __init__(self, name):
        pass

    def speak(self):
        return "..."

class Dog(Animal):
    pass

class Cat(Animal):
    pass

class Parrot(Animal):
    def __init__(self, name, phrase):
        pass

    def speak(self):
        pass

# Test
dog = Dog("Rex")
cat = Cat("Whiskers")
parrot = Parrot("Polly", "want a cracker")
print(dog.speak())    # Rex says Woof!
print(cat.speak())    # Whiskers says Meow!
print(parrot.speak()) # Polly says want a cracker!
`,
      testCode: `
try:
    d = Dog("Rex")
    assert d.speak() == "Rex says Woof!", f"Got: {d.speak()}"
    c = Cat("Whiskers")
    assert c.speak() == "Whiskers says Meow!", f"Got: {c.speak()}"
    p = Parrot("Polly", "hello")
    assert p.speak() == "Polly says hello!", f"Got: {p.speak()}"
    assert isinstance(d, Animal), "Dog should be an instance of Animal"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        'In `Animal.__init__`: `self.name = name`',
        'Dog/Cat don\'t need their own `__init__` — they inherit Animal\'s',
        'Override `speak` in each subclass with `return f"{self.name} says Woof!"`',
        'Parrot needs its own `__init__` to store `phrase`: call `super().__init__(name)` then `self.phrase = phrase`',
      ],
    },

    {
      id: 'py_i05',
      tier: 'intermediate',
      title: 'Error Handling',
      difficulty: 'intermediate',
      topic: 'Exceptions',
      description: `## Error Handling

Handle errors gracefully with \`try/except\`. Catch specific exception types. Define custom exceptions by subclassing \`Exception\`.

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    result = None
finally:
    print("always runs")

class AppError(Exception):
    pass

raise AppError("something went wrong")
\`\`\`

**Your task:**
1. \`safe_divide(a, b)\` — returns \`a / b\`, or \`None\` if b is zero
2. \`parse_int(s)\` — returns the integer, or \`None\` if the string isn't a valid int
3. Define \`ValidationError\` and write \`validate_age(age)\` — raises \`ValidationError\` if age < 0 or age > 150`,
      starterCode: `def safe_divide(a, b):
    pass

def parse_int(s):
    pass

class ValidationError(Exception):
    pass

def validate_age(age):
    pass

print(safe_divide(10, 2))   # 5.0
print(safe_divide(5, 0))    # None
print(parse_int("42"))       # 42
print(parse_int("abc"))      # None
validate_age(25)             # no error
validate_age(-1)             # raises ValidationError
`,
      testCode: `
try:
    assert safe_divide(10, 2) == 5.0
    assert safe_divide(5, 0) is None
    assert parse_int("42") == 42
    assert parse_int("abc") is None
    assert parse_int("3.14") is None

    try:
        validate_age(-1)
        assert False, "Should have raised ValidationError"
    except ValidationError:
        pass

    try:
        validate_age(200)
        assert False, "Should have raised ValidationError"
    except ValidationError:
        pass

    validate_age(25)  # should not raise
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`safe_divide`: wrap in `try/except ZeroDivisionError: return None`',
        '`parse_int`: wrap `return int(s)` in `try/except ValueError: return None`',
        '`class ValidationError(Exception): pass` — that\'s all you need',
        '`validate_age`: `if age < 0 or age > 150: raise ValidationError("Invalid age")`',
      ],
    },

    {
      id: 'py_i06',
      tier: 'intermediate',
      title: '*args & **kwargs',
      difficulty: 'intermediate',
      topic: 'Functions',
      description: `## *args & **kwargs

Accept any number of positional or keyword arguments.

\`\`\`python
def sum_all(*args):      # args is a tuple
    return sum(args)

def greet(**kwargs):     # kwargs is a dict
    name = kwargs.get("name", "stranger")
    return f"Hello, {name}!"

sum_all(1, 2, 3, 4)     # 10
greet(name="Alice")     # "Hello, Alice!"
\`\`\`

**Your task:**
1. \`sum_all(*args)\` — returns the sum of all arguments (handle empty case)
2. \`build_profile(name, **kwargs)\` — returns a dict with \`"name"\` plus all kwargs merged in
3. \`log(level, *messages, sep=" ")\` — joins messages with sep, returns \`"[LEVEL] joined_message"\``,
      starterCode: `def sum_all(*args):
    pass

def build_profile(name, **kwargs):
    pass

def log(level, *messages, sep=" "):
    pass

print(sum_all(1, 2, 3))          # 6
print(sum_all())                  # 0
print(build_profile("Sam", age=25, city="NYC"))
# {'name': 'Sam', 'age': 25, 'city': 'NYC'}
print(log("INFO", "Server", "started"))   # [INFO] Server started
print(log("WARN", "a","b","c", sep="-"))  # [WARN] a-b-c
`,
      testCode: `
try:
    assert sum_all(1, 2, 3) == 6
    assert sum_all() == 0
    assert sum_all(5) == 5
    profile = build_profile("Sam", age=25, city="NYC")
    assert profile == {"name": "Sam", "age": 25, "city": "NYC"}
    assert log("INFO", "Server", "started") == "[INFO] Server started"
    assert log("WARN", "a", "b", sep="-") == "[WARN] a-b"
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`sum_all`: `return sum(args)` — works even when args is empty',
        '`build_profile`: start with `profile = {"name": name}`, then `profile.update(kwargs)`, return profile',
        '`log`: `joined = sep.join(messages)`, return `f"[{level}] {joined}"`',
      ],
    },

    {
      id: 'py_i07',
      tier: 'intermediate',
      title: 'Lambda & Sorted',
      difficulty: 'intermediate',
      topic: 'Functions',
      description: `## Lambda & Sorted

\`lambda\` creates a small anonymous function. \`sorted()\` accepts a \`key=\` function to control sort order.

\`\`\`python
students = [{"name": "Bob", "gpa": 3.5}, {"name": "Alice", "gpa": 3.9}]

# Sort by GPA descending
sorted(students, key=lambda s: s["gpa"], reverse=True)

# Sort by multiple fields: name asc, then gpa desc
sorted(students, key=lambda s: (s["name"], -s["gpa"]))
\`\`\`

**Your task:**
1. \`top_students(students, n)\` — returns the top \`n\` by GPA descending
2. \`sort_name_then_gpa(students)\` — sort by name ascending, then GPA descending
3. \`get_passing(students, min_gpa=2.0)\` — filter to students at or above min_gpa using \`filter()\` + \`lambda\``,
      starterCode: `def top_students(students, n):
    pass

def sort_name_then_gpa(students):
    pass

def get_passing(students, min_gpa=2.0):
    pass

people = [
    {"name": "Charlie", "gpa": 3.2},
    {"name": "Alice", "gpa": 3.9},
    {"name": "Bob", "gpa": 1.8},
    {"name": "Alice", "gpa": 3.5},
]

print([s["name"] for s in top_students(people, 2)])  # ['Alice', 'Alice']
print([s["gpa"] for s in get_passing(people)])        # [3.2, 3.9, 3.5]
`,
      testCode: `
people = [
    {"name": "Charlie", "gpa": 3.2},
    {"name": "Alice", "gpa": 3.9},
    {"name": "Bob", "gpa": 1.8},
    {"name": "Alice", "gpa": 3.5},
]
try:
    top = top_students(people, 2)
    assert len(top) == 2
    assert top[0]["gpa"] == 3.9 and top[1]["gpa"] == 3.5

    passing = list(get_passing(people, 2.0))
    assert len(passing) == 3
    assert all(s["gpa"] >= 2.0 for s in passing)

    sorted_people = sort_name_then_gpa(people)
    assert sorted_people[0]["name"] == "Alice"
    assert sorted_people[0]["gpa"] == 3.9
    assert sorted_people[1]["gpa"] == 3.5

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`top_students`: `sorted(students, key=lambda s: s["gpa"], reverse=True)[:n]`',
        '`sort_name_then_gpa`: key is a tuple `(s["name"], -s["gpa"])` — tuples sort element by element',
        '`get_passing`: `list(filter(lambda s: s["gpa"] >= min_gpa, students))`',
      ],
    },

    {
      id: 'py_i08',
      tier: 'intermediate',
      title: 'Map & Filter',
      difficulty: 'intermediate',
      topic: 'Functional',
      description: `## Map & Filter

\`map(func, iterable)\` transforms each element. \`filter(func, iterable)\` keeps elements where func returns \`True\`. Both return iterators — wrap with \`list()\` to get a list.

\`\`\`python
numbers = [1, -2, 3, -4, 5]
doubled   = list(map(lambda x: x * 2, numbers))   # [2, -4, 6, -8, 10]
positives = list(filter(lambda x: x > 0, numbers)) # [1, 3, 5]
\`\`\`

**Your task:**
1. \`celsius_to_fahrenheit(temps)\` — converts a list of Celsius values to Fahrenheit (\`C * 9/5 + 32\`) using \`map()\`
2. \`keep_positives(numbers)\` — use \`filter()\` to return only positive numbers
3. \`clean_names(names)\` — use \`map()\` to strip and capitalize each name, then \`filter()\` to remove empties`,
      starterCode: `def celsius_to_fahrenheit(temps):
    pass  # use map()

def keep_positives(numbers):
    pass  # use filter()

def clean_names(names):
    pass  # map to strip/capitalize, filter out empty strings

print(celsius_to_fahrenheit([0, 100, -40]))   # [32.0, 212.0, -40.0]
print(keep_positives([-3, 0, 5, -1, 2]))      # [5, 2]
print(clean_names(["  alice", "BOB ", "", " "]))  # ['Alice', 'Bob']
`,
      testCode: `
try:
    assert celsius_to_fahrenheit([0, 100, -40]) == [32.0, 212.0, -40.0]
    assert celsius_to_fahrenheit([]) == []
    assert keep_positives([-3, 0, 5, -1, 2]) == [5, 2]
    assert clean_names(["  alice", "BOB ", "", " "]) == ["Alice", "Bob"]
    assert clean_names([]) == []
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`celsius_to_fahrenheit`: `list(map(lambda c: c * 9/5 + 32, temps))`',
        '`keep_positives`: `list(filter(lambda x: x > 0, numbers))`',
        '`clean_names`: chain map then filter — `list(filter(bool, map(lambda n: n.strip().capitalize(), names)))`',
      ],
    },

    {
      id: 'py_i09',
      tier: 'intermediate',
      title: 'Generators',
      difficulty: 'intermediate',
      topic: 'Iterators',
      description: `## Generators

Generators use \`yield\` to produce values one at a time, lazily. They're memory-efficient for large sequences.

\`\`\`python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

list(countdown(3))  # [3, 2, 1]

# Generator expression (like list comprehension but lazy):
gen = (x**2 for x in range(5))
\`\`\`

**Your task:**
1. \`fibonacci()\` — an **infinite** generator that yields 0, 1, 1, 2, 3, 5, 8, ...
2. \`running_total(numbers)\` — yields cumulative sums: \`[1, 3, 6, 10]\` for \`[1, 2, 3, 4]\`
3. Use \`itertools.islice(fibonacci(), 8)\` to get the first 8 Fibonacci numbers as a list`,
      starterCode: `from itertools import islice

def fibonacci():
    # yield Fibonacci numbers indefinitely
    pass

def running_total(numbers):
    # yield cumulative sums
    pass

# First 8 Fibonacci numbers
first_8 = list(islice(fibonacci(), 8))
print(first_8)  # [0, 1, 1, 2, 3, 5, 8, 13]

print(list(running_total([1, 2, 3, 4])))  # [1, 3, 6, 10]
`,
      testCode: `
from itertools import islice
try:
    assert list(islice(fibonacci(), 8)) == [0, 1, 1, 2, 3, 5, 8, 13]
    assert list(islice(fibonacci(), 1)) == [0]
    assert list(running_total([1, 2, 3, 4])) == [1, 3, 6, 10]
    assert list(running_total([5])) == [5]
    assert list(running_total([])) == []
    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`fibonacci`: start with `a, b = 0, 1`, then in a `while True` loop: `yield a`, then `a, b = b, a + b`',
        '`running_total`: track a `total = 0`, then for each number: `total += n; yield total`',
        'An infinite generator is fine — `islice` stops it after n items',
      ],
    },

    {
      id: 'py_i10',
      tier: 'intermediate',
      title: 'Decorators',
      difficulty: 'intermediate',
      topic: 'Functions',
      description: `## Decorators

A decorator is a function that wraps another function to add behavior. Use \`@decorator\` syntax for clean application.

\`\`\`python
import functools

def shout(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs).upper()
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

greet("world")  # "HELLO WORLD"
\`\`\`

**Your task:**
1. \`@memoize\` — caches results in a dict; same arguments return the cached value (no recomputation)
2. \`@require_positive\` — raises \`ValueError("Arguments must be positive")\` if the first positional argument is ≤ 0`,
      starterCode: `import functools

def memoize(func):
    cache = {}
    @functools.wraps(func)
    def wrapper(*args):
        pass  # return cached or compute and cache
    return wrapper

def require_positive(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        pass  # check args[0], then call func
    return wrapper

@memoize
def slow_square(n):
    return n * n

@require_positive
def sqrt(n):
    return n ** 0.5

print(slow_square(5))   # 25
print(slow_square(5))   # 25 (cached)
print(sqrt(16))         # 4.0
sqrt(-1)                # raises ValueError
`,
      testCode: `
import functools
try:
    calls = []
    @memoize
    def tracked(n):
        calls.append(n)
        return n * 2

    assert tracked(3) == 6
    assert tracked(3) == 6  # should not re-call
    assert len(calls) == 1, "memoize should cache — tracked was called more than once"

    @require_positive
    def double(n):
        return n * 2

    assert double(5) == 10
    try:
        double(0)
        assert False, "Should have raised ValueError"
    except ValueError:
        pass

    try:
        double(-3)
        assert False, "Should have raised ValueError"
    except ValueError:
        pass

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`memoize` wrapper: `if args not in cache: cache[args] = func(*args)`, then `return cache[args]`',
        '`require_positive`: `if args[0] <= 0: raise ValueError("Arguments must be positive")`',
        'Use `@functools.wraps(func)` to preserve the original function\'s name/docstring',
      ],
    },

    // ── ADVANCED ──────────────────────────────────────────────────────────────

    {
      id: 'py_a01',
      tier: 'advanced',
      title: 'Context Managers',
      difficulty: 'advanced',
      topic: 'Patterns',
      description: `## Context Managers

The \`with\` statement calls \`__enter__\` on entry and \`__exit__\` on exit — even if an exception occurs.

\`\`\`python
class ManagedResource:
    def __enter__(self):
        print("acquiring")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("releasing")
        return False  # don't suppress exceptions
\`\`\`

**Your task:** Implement a \`Timer\` context manager:
- \`__enter__\`: records start time, returns \`self\`
- \`__exit__\`: computes and stores elapsed seconds in \`self.elapsed\`

\`\`\`python
import time
with Timer() as t:
    total = sum(range(100_000))
print(f"Took {t.elapsed:.4f}s")  # Took 0.003s (approx)
\`\`\``,
      starterCode: `import time

class Timer:
    def __enter__(self):
        # record start time, return self
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        # record elapsed time
        pass

with Timer() as t:
    total = sum(range(100_000))

print(f"Elapsed: {t.elapsed:.4f}s")
print(f"Sum: {total}")
`,
      testCode: `
import time
try:
    with Timer() as t:
        x = sum(range(10_000))
    assert hasattr(t, "elapsed"), "Timer should have an 'elapsed' attribute"
    assert isinstance(t.elapsed, float), "elapsed should be a float"
    assert t.elapsed >= 0, "elapsed should be non-negative"

    # Test that __exit__ still runs when exception occurs
    try:
        with Timer() as t2:
            raise ValueError("test")
    except ValueError:
        pass
    assert hasattr(t2, "elapsed"), "__exit__ should run even on exception"

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, AttributeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`__enter__`: `self._start = time.time(); return self`',
        '`__exit__`: `self.elapsed = time.time() - self._start`',
        'Return `False` from `__exit__` to let exceptions propagate normally',
        'The three `__exit__` parameters are exception info — `None` if no exception occurred',
      ],
    },

    {
      id: 'py_a02',
      tier: 'advanced',
      title: 'Dataclasses',
      difficulty: 'advanced',
      topic: 'OOP',
      description: `## Dataclasses

\`@dataclass\` auto-generates \`__init__\`, \`__repr__\`, and \`__eq__\` based on field annotations.

\`\`\`python
from dataclasses import dataclass, field

@dataclass
class Point:
    x: float
    y: float
    label: str = "origin"
    tags: list = field(default_factory=list)  # mutable default

p = Point(1.0, 2.0)
p == Point(1.0, 2.0)  # True (auto __eq__)
\`\`\`

**Your task:** Create a \`Player\` dataclass with \`name: str\`, \`score: int = 0\`, \`level: int = 1\`. Add:
- \`add_score(pts)\` — adds pts to score; if score reaches \`100 * level\`, calls \`level_up()\`
- \`level_up()\` — increments level, resets score to 0, prints \`"[name] reached level [N]!"\``,
      starterCode: `from dataclasses import dataclass

@dataclass
class Player:
    name: str
    score: int = 0
    level: int = 1

    def add_score(self, pts):
        pass

    def level_up(self):
        pass

p = Player("Sam")
p.add_score(60)
p.add_score(50)  # total 110 >= 100*1 → level up!
print(f"{p.name}: level {p.level}, score {p.score}")
`,
      testCode: `
from dataclasses import dataclass
try:
    p = Player("Tester")
    assert p.score == 0 and p.level == 1

    p.add_score(50)
    assert p.score == 50 and p.level == 1

    p.add_score(60)  # 110 >= 100 -> level up
    assert p.level == 2, f"Expected level 2, got {p.level}"

    p2 = Player("A")
    p3 = Player("A")
    assert p2 == p3, "Two Players with same fields should be equal (auto __eq__)"

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, AttributeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        'Fields with defaults must come after fields without: `name` first, then `score=0`, `level=1`',
        '`add_score`: `self.score += pts; if self.score >= 100 * self.level: self.level_up()`',
        '`level_up`: `self.level += 1; self.score = 0; print(...)`',
        'The `@dataclass` decorator gives you `__eq__` for free — two instances with same fields are equal',
      ],
    },

    {
      id: 'py_a03',
      tier: 'advanced',
      title: 'Type Hints',
      difficulty: 'advanced',
      topic: 'Type System',
      description: `## Type Hints

Type hints make code self-documenting and enable IDE/linter checks. Python doesn't enforce them at runtime — but tools like mypy do.

\`\`\`python
from typing import List, Dict, Optional, Union, Any

def find(items: List[str], target: str) -> Optional[int]:
    try:
        return items.index(target)
    except ValueError:
        return None
\`\`\`

**Your task:** Write these functions with complete type hints:
1. \`filter_adults(people, min_age)\` — filters a list of \`{"name": str, "age": int}\` dicts, returns list of names
2. \`merge_dicts(a, b)\` — merges two \`Dict[str, int]\` dicts (b wins on conflict), returns the merged dict
3. \`parse_value(s)\` — tries int first, then float, else returns the original string`,
      starterCode: `from typing import List, Dict, Optional, Union, Any

def filter_adults(people: List[Dict[str, Any]], min_age: int) -> List[str]:
    pass

def merge_dicts(a: Dict[str, int], b: Dict[str, int]) -> Dict[str, int]:
    pass

def parse_value(s: str) -> Union[int, float, str]:
    pass

people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 15}]
print(filter_adults(people, 18))   # ['Alice']
print(merge_dicts({"a": 1}, {"a": 9, "b": 2}))  # {'a': 9, 'b': 2}
print(parse_value("42"))    # 42 (int)
print(parse_value("3.14"))  # 3.14 (float)
print(parse_value("hello")) # 'hello' (str)
`,
      testCode: `
try:
    people = [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 15}, {"name": "Carol", "age": 18}]
    assert filter_adults(people, 18) == ["Alice", "Carol"]
    assert filter_adults(people, 31) == []

    merged = merge_dicts({"a": 1, "b": 2}, {"b": 9, "c": 3})
    assert merged == {"a": 1, "b": 9, "c": 3}

    assert parse_value("42") == 42 and isinstance(parse_value("42"), int)
    assert parse_value("3.14") == 3.14 and isinstance(parse_value("3.14"), float)
    assert parse_value("hello") == "hello" and isinstance(parse_value("hello"), str)

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`filter_adults`: `return [p["name"] for p in people if p["age"] >= min_age]`',
        '`merge_dicts`: `result = {**a}; result.update(b); return result` (or `return {**a, **b}`)',
        '`parse_value`: try `return int(s)`, except ValueError try `return float(s)`, except ValueError `return s`',
      ],
    },

    {
      id: 'py_a04',
      tier: 'advanced',
      title: 'Closures',
      difficulty: 'advanced',
      topic: 'Functions',
      description: `## Closures

A closure is a function that "remembers" variables from its enclosing scope, even after that scope has finished.

\`\`\`python
def make_adder(n):
    def add(x):
        return x + n   # "closes over" n
    return add

add5 = make_adder(5)
add5(3)  # 8
add5(10) # 15
\`\`\`

Use \`nonlocal\` to modify an enclosing variable:

\`\`\`python
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment
\`\`\`

**Your task:**
1. \`make_multiplier(n)\` — returns a function that multiplies its input by \`n\`
2. \`make_counter(start=0)\` — returns a function; each call returns the next count
3. \`memoize(fn)\` — returns a version of \`fn\` that caches results by arguments`,
      starterCode: `def make_multiplier(n):
    pass

def make_counter(start=0):
    pass

def memoize(fn):
    pass

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5))   # 10
print(triple(5))   # 15

counter = make_counter(10)
print(counter())   # 11
print(counter())   # 12

call_count = 0
def tracked(x):
    global call_count
    call_count += 1
    return x * x

cached = memoize(tracked)
print(cached(4))   # 16
print(cached(4))   # 16 (from cache)
print(call_count)  # 1 (called only once)
`,
      testCode: `
try:
    double = make_multiplier(2)
    triple = make_multiplier(3)
    assert double(5) == 10
    assert triple(7) == 21

    counter = make_counter(0)
    assert counter() == 1
    assert counter() == 2
    assert counter() == 3

    counter2 = make_counter(10)
    assert counter2() == 11

    calls = [0]
    def fn(x):
        calls[0] += 1
        return x * 2

    cached = memoize(fn)
    assert cached(5) == 10
    assert cached(5) == 10
    assert calls[0] == 1, "memoize should prevent duplicate calls"

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`make_multiplier`: `def multiply(x): return x * n; return multiply`',
        '`make_counter`: `count = start`, inner function does `nonlocal count; count += 1; return count`',
        '`memoize`: `cache = {}`, wrapper: `if args not in cache: cache[args] = fn(*args); return cache[args]`',
      ],
    },

    {
      id: 'py_a05',
      tier: 'advanced',
      title: 'Property Decorators',
      difficulty: 'advanced',
      topic: 'OOP',
      description: `## Property Decorators

\`@property\` turns a method into a read-only attribute. Add a setter with \`@name.setter\`.

\`\`\`python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius   # private by convention

    @property
    def fahrenheit(self):         # read as t.fahrenheit
        return self._celsius * 9/5 + 32

    @fahrenheit.setter
    def fahrenheit(self, value):  # t.fahrenheit = 100
        self._celsius = (value - 32) * 5/9
\`\`\`

**Your task:** Create a \`Circle\` class:
- Private \`_radius\` set in \`__init__\`
- \`radius\` property: getter returns it; setter raises \`ValueError\` if value < 0
- Read-only \`area\` property: π × r²
- Read-only \`diameter\` property: 2r`,
      starterCode: `import math

class Circle:
    def __init__(self, radius):
        self.radius = radius  # uses the setter

    @property
    def radius(self):
        pass

    @radius.setter
    def radius(self, value):
        pass

    @property
    def area(self):
        pass

    @property
    def diameter(self):
        pass

c = Circle(5)
print(c.radius)    # 5
print(c.area)      # 78.539...
print(c.diameter)  # 10
c.radius = 3
print(c.area)      # 28.274...
`,
      testCode: `
import math
try:
    c = Circle(5)
    assert c.radius == 5
    assert abs(c.area - math.pi * 25) < 0.001
    assert c.diameter == 10

    c.radius = 3
    assert c.radius == 3
    assert abs(c.area - math.pi * 9) < 0.001

    try:
        c.radius = -1
        assert False, "Should have raised ValueError"
    except ValueError:
        pass

    try:
        c2 = Circle(-5)
        assert False, "Constructor with negative radius should raise ValueError"
    except ValueError:
        pass

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, AttributeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        'getter: `return self._radius`',
        'setter: `if value < 0: raise ValueError("Radius cannot be negative"); self._radius = value`',
        '`area`: `return math.pi * self._radius ** 2`',
        '`diameter`: `return 2 * self._radius`',
        'Setting `self.radius = radius` in `__init__` invokes the setter automatically',
      ],
    },

    {
      id: 'py_a06',
      tier: 'advanced',
      title: 'Regular Expressions',
      difficulty: 'advanced',
      topic: 'Text Processing',
      description: `## Regular Expressions

The \`re\` module provides powerful pattern matching.

\`\`\`python
import re
re.findall(r'\\d+', "call 911 or 112")      # ['911', '112']
re.sub(r'\\s+', ' ', "too  many   spaces")  # 'too many spaces'
bool(re.match(r'^\\w+$', "hello123"))        # True
\`\`\`

Key patterns: \`\\d\` digit, \`\\w\` word char, \`\\s\` whitespace, \`.\` any char, \`+\` one-or-more, \`*\` zero-or-more, \`^\` start, \`$\` end.

**Your task:**
1. \`extract_emails(text)\` — returns all email addresses found in the text
2. \`validate_phone(s)\` — returns \`True\` if \`s\` matches \`(XXX) XXX-XXXX\`
3. \`extract_hashtags(text)\` — returns all hashtags like \`#python\` (lowercase, letters/digits only)`,
      starterCode: `import re

def extract_emails(text):
    pass

def validate_phone(s):
    pass

def extract_hashtags(text):
    pass

text = "Contact alice@example.com or bob@test.org for info."
print(extract_emails(text))   # ['alice@example.com', 'bob@test.org']

print(validate_phone("(123) 456-7890"))  # True
print(validate_phone("123-456-7890"))    # False

tweet = "Loving #python and #coding today! #100DaysOfCode"
print(extract_hashtags(tweet))  # ['#python', '#coding', '#100DaysOfCode']
`,
      testCode: `
import re
try:
    emails = extract_emails("hi alice@example.com and bob@test.org bye")
    assert emails == ["alice@example.com", "bob@test.org"], f"Got {emails}"

    assert validate_phone("(123) 456-7890") == True
    assert validate_phone("123-456-7890") == False
    assert validate_phone("(123) 456-789") == False

    tags = extract_hashtags("I love #python and #TypeScript!")
    assert "#python" in tags and "#TypeScript" in tags, f"Got {tags}"
    assert "#" not in "".join(t[1:] for t in tags), "No nested # in tag text"

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`extract_emails`: `re.findall(r\'[\\w.+-]+@[\\w-]+\\.[\\w.]+\', text)`',
        '`validate_phone`: `bool(re.fullmatch(r\'\\(\\d{3}\\) \\d{3}-\\d{4}\', s))`',
        '`extract_hashtags`: `re.findall(r\'#[\\w]+\', text)` — \\w matches letters, digits, underscore',
      ],
    },

    {
      id: 'py_a07',
      tier: 'advanced',
      title: 'Itertools',
      difficulty: 'advanced',
      topic: 'Iterators',
      description: `## Itertools

The \`itertools\` module provides powerful building blocks for working with iterators.

\`\`\`python
from itertools import chain, product, groupby, islice

list(chain([1,2],[3,4]))         # [1,2,3,4]
list(product('AB',[1,2]))        # [('A',1),('A',2),('B',1),('B',2)]
\`\`\`

**Your task:**
1. \`flatten(lists)\` — use \`chain.from_iterable\` to flatten a list of lists
2. \`card_pairs(suits, ranks)\` — use \`product\` to generate all (suit, rank) tuples
3. \`group_by_letter(words)\` — sort words, then use \`groupby\` to return a dict of \`first_letter → [words]\``,
      starterCode: `from itertools import chain, product, groupby

def flatten(lists):
    pass

def card_pairs(suits, ranks):
    pass

def group_by_letter(words):
    pass

print(flatten([[1,2],[3,4],[5]]))
# [1, 2, 3, 4, 5]

suits = ["♠", "♥"]
ranks = ["A", "K"]
print(card_pairs(suits, ranks))
# [('♠','A'), ('♠','K'), ('♥','A'), ('♥','K')]

words = ["banana", "apple", "avocado", "blueberry"]
print(group_by_letter(words))
# {'a': ['apple', 'avocado'], 'b': ['banana', 'blueberry']}
`,
      testCode: `
from itertools import chain, product, groupby
try:
    assert flatten([[1,2],[3,4],[5]]) == [1,2,3,4,5]
    assert flatten([]) == []
    assert flatten([[], [1]]) == [1]

    pairs = card_pairs(["♠","♥"], ["A","K"])
    assert len(pairs) == 4
    assert ("♠", "A") in pairs
    assert ("♥", "K") in pairs

    grouped = group_by_letter(["banana","apple","avocado","blueberry"])
    assert grouped["a"] == ["apple","avocado"]
    assert grouped["b"] == ["banana","blueberry"]

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`flatten`: `return list(chain.from_iterable(lists))`',
        '`card_pairs`: `return list(product(suits, ranks))`',
        '`group_by_letter`: sort words first, then `{k: list(v) for k, v in groupby(sorted_words, key=lambda w: w[0])}`',
      ],
    },

    {
      id: 'py_a08',
      tier: 'advanced',
      title: 'functools',
      difficulty: 'advanced',
      topic: 'Functional',
      description: `## functools

The \`functools\` module provides higher-order function utilities.

\`\`\`python
from functools import lru_cache, partial, reduce

@lru_cache(maxsize=None)
def fib(n): return n if n < 2 else fib(n-1) + fib(n-2)

double = partial(int.__mul__, 2)   # partial application
total  = reduce(lambda a, b: a + b, [1,2,3,4,5])  # 15
\`\`\`

**Your task:**
1. Write \`fib(n)\` with \`@lru_cache\` — recursive Fibonacci, fast due to caching
2. Write \`multiply(x, n)\`, then use \`partial\` to create \`double\` (n=2) and \`triple\` (n=3)
3. Write \`product_of(numbers)\` using \`reduce\` — multiplies all numbers together`,
      starterCode: `from functools import lru_cache, partial, reduce

@lru_cache(maxsize=None)
def fib(n):
    pass  # base cases: 0→0, 1→1; else fib(n-1)+fib(n-2)

def multiply(x, n):
    return x * n

double = None  # partial of multiply with n=2
triple = None  # partial of multiply with n=3

def product_of(numbers):
    pass  # use reduce

print(fib(10))          # 55
print(double(7))        # 14
print(triple(7))        # 21
print(product_of([1,2,3,4,5]))  # 120
`,
      testCode: `
from functools import lru_cache, partial, reduce
try:
    assert fib(0) == 0
    assert fib(1) == 1
    assert fib(10) == 55
    assert fib(20) == 6765

    assert callable(double) and double(7) == 14
    assert callable(triple) and triple(7) == 21

    assert product_of([1,2,3,4,5]) == 120
    assert product_of([10, 3]) == 30
    assert product_of([1]) == 1

    print("\\n✅ All tests passed!")
except AssertionError as e:
    print(f"\\n❌ {e}")
except (NameError, TypeError) as e:
    print(f"\\n❌ Error: {e}")
`,
      hints: [
        '`fib`: `if n < 2: return n; return fib(n-1) + fib(n-2)` — lru_cache prevents recomputing',
        '`double = partial(multiply, n=2)` — freezes the `n` argument',
        '`product_of`: `return reduce(lambda a, b: a * b, numbers)`',
      ],
    },
  ],

  typescript: [

    // ── BEGINNER ──────────────────────────────────────────────────────────────

    {
      id: 'ts_001',
      tier: 'beginner',
      title: 'Variables & Type Annotations',
      difficulty: 'beginner',
      topic: 'Basics',
      description: `## Variables & Type Annotations

TypeScript adds type annotations to JavaScript. You're not required to annotate everything — TypeScript infers types — but being explicit makes code clearer and safer.

\`\`\`typescript
let name: string = "Alice";
let age: number = 30;
let active: boolean = true;
const PI: number = 3.14159;
\`\`\`

Use \`let\` for variables that can change, \`const\` for those that won't be reassigned.

**Your task:** Declare the following and log them all:
- \`username\` — a \`const\` string
- \`score\` — a \`let\` number, start at 0
- \`isLoggedIn\` — a \`let\` boolean, start as true
- Then change \`score\` to 42 and log it again`,
      starterCode: `// Declare your variables here


// Log all three


// Change score and log again

`,
      testCode: `
try {
  if (typeof username !== 'string') throw new Error('username should be a string const');
  if (typeof score !== 'number') throw new Error('score should be a number');
  if (score !== 42) throw new Error('score should be 42 after reassignment');
  if (typeof isLoggedIn !== 'boolean') throw new Error('isLoggedIn should be a boolean');
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`const username: string = "yourname";`',
        '`let score: number = 0;`',
        '`let isLoggedIn: boolean = true;`',
        'Reassign: `score = 42;`',
      ],
    },

    {
      id: 'ts_002',
      tier: 'beginner',
      title: 'Functions with Types',
      difficulty: 'beginner',
      topic: 'Functions',
      description: `## Functions with Types

TypeScript functions let you type both parameters and return values:

\`\`\`typescript
function add(a: number, b: number): number {
    return a + b;
}

const multiply = (a: number, b: number): number => a * b;
\`\`\`

**Your task:** Write two functions:
1. \`greet(name: string): string\` — returns \`"Hello, [name]!"\`
2. \`celsiusToFahrenheit(celsius: number): number\` — converts using \`(celsius * 9/5) + 32\`, round to 1 decimal`,
      starterCode: `function greet(name: string): string {
    // return the greeting
}

function celsiusToFahrenheit(celsius: number): number {
    // convert and return
}

console.log(greet("World"));           // Hello, World!
console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212
`,
      testCode: `
try {
  const g = greet("Test");
  if (g !== "Hello, Test!") throw new Error(\`greet returned "\${g}", expected "Hello, Test!"\`);
  const f1 = celsiusToFahrenheit(0);
  if (f1 !== 32) throw new Error(\`0°C should be 32°F, got \${f1}\`);
  const f2 = celsiusToFahrenheit(100);
  if (f2 !== 212) throw new Error(\`100°C should be 212°F, got \${f2}\`);
  const f3 = celsiusToFahrenheit(37);
  if (Math.round(f3 * 10) !== 986) throw new Error(\`37°C should be 98.6°F, got \${f3}\`);
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`return \`Hello, \${name}!\`;`',
        'Formula: `(celsius * 9/5) + 32`',
        'Round: `Math.round(result * 10) / 10`',
      ],
    },

    {
      id: 'ts_003',
      tier: 'beginner',
      title: 'Arrays & Array Methods',
      difficulty: 'beginner',
      topic: 'Arrays',
      description: `## Arrays & Array Methods

TypeScript arrays are typed — a \`number[]\` can only hold numbers.

\`\`\`typescript
const names: string[] = ["Alice", "Bob"];
const doubled = names.map(n => n.repeat(2));
const long    = names.filter(n => n.length > 3);
const total   = [1,2,3].reduce((sum, n) => sum + n, 0);
\`\`\`

**Your task:** Given the \`grades\` array:
1. Calculate and log the average grade
2. Create \`passing\` — grades 70 and above
3. Create \`letterGrades\` — map each grade to "A" (≥90), "B" (≥80), "C" (≥70), or "F"`,
      starterCode: `const grades: number[] = [92, 68, 75, 88, 95, 52, 83, 71];

// 1. Average


// 2. Passing grades (≥70)


// 3. Letter grades


// Log all three

`,
      testCode: `
try {
  if (!passing || passing.length !== 6) throw new Error(\`passing should have 6 items, got \${passing?.length}\`);
  if (!letterGrades || letterGrades.length !== 8) throw new Error("letterGrades should have 8 items");
  if (letterGrades[0] !== "A") throw new Error(\`92 should be "A", got "\${letterGrades[0]}"\`);
  if (letterGrades[1] !== "F") throw new Error(\`68 should be "F", got "\${letterGrades[1]}"\`);
  if (letterGrades[4] !== "A") throw new Error(\`95 should be "A"\`);
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        'Average: `grades.reduce((sum, n) => sum + n, 0) / grades.length`',
        'Filter: `grades.filter(g => g >= 70)`',
        'Map: `grades.map(g => g >= 90 ? "A" : g >= 80 ? "B" : g >= 70 ? "C" : "F")`',
      ],
    },

    {
      id: 'ts_b04',
      tier: 'beginner',
      title: 'Conditionals',
      difficulty: 'beginner',
      topic: 'Control Flow',
      description: `## Conditionals

TypeScript has \`if/else\`, \`switch\`, and the ternary operator \`condition ? a : b\`.

\`\`\`typescript
// switch with string literal
function direction(key: string): string {
  switch (key) {
    case "ArrowUp":   return "up";
    case "ArrowDown": return "down";
    default:          return "unknown";
  }
}

// ternary
const label = score >= 60 ? "pass" : "fail";
\`\`\`

**Your task:**
1. \`getDiscount(tier: string): number\` — returns 0.3 for "gold", 0.15 for "silver", 0.05 for "bronze", 0 otherwise (use switch)
2. \`clamp(n: number, min: number, max: number): number\` — returns n clamped between min and max (use ternary)`,
      starterCode: `function getDiscount(tier: string): number {
  // use switch
}

function clamp(n: number, min: number, max: number): number {
  // use ternary operators
}

console.log(getDiscount("gold"));    // 0.3
console.log(getDiscount("silver"));  // 0.15
console.log(getDiscount("vip"));     // 0
console.log(clamp(5, 0, 10));        // 5
console.log(clamp(-5, 0, 10));       // 0
console.log(clamp(15, 0, 10));       // 10
`,
      testCode: `
try {
  if (getDiscount("gold") !== 0.3) throw new Error(\`gold: expected 0.3, got \${getDiscount("gold")}\`);
  if (getDiscount("silver") !== 0.15) throw new Error("silver: expected 0.15");
  if (getDiscount("bronze") !== 0.05) throw new Error("bronze: expected 0.05");
  if (getDiscount("vip") !== 0) throw new Error("unknown tier: expected 0");
  if (clamp(5, 0, 10) !== 5) throw new Error("5 in [0,10] should be 5");
  if (clamp(-5, 0, 10) !== 0) throw new Error("-5 clamped to [0,10] should be 0");
  if (clamp(15, 0, 10) !== 10) throw new Error("15 clamped to [0,10] should be 10");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`switch (tier) { case "gold": return 0.3; ... default: return 0; }`',
        'Ternary chain: `n < min ? min : n > max ? max : n`',
        'Don\'t forget `break` in switch — or just `return` directly from each case',
      ],
    },

    {
      id: 'ts_b05',
      tier: 'beginner',
      title: 'Type Aliases & Objects',
      difficulty: 'beginner',
      topic: 'Types',
      description: `## Type Aliases & Object Types

Use \`type\` to name a shape. String literal unions create a finite set of allowed values.

\`\`\`typescript
type Point = { x: number; y: number };
type Direction = "north" | "south" | "east" | "west";

function move(p: Point, dir: Direction): Point {
  if (dir === "north") return { x: p.x, y: p.y + 1 };
  // ...
}
\`\`\`

**Your task:**
1. Define \`type Point = { x: number; y: number }\` and write \`translate(p, dx, dy)\` returning a new Point
2. Define \`type Color = "red" | "green" | "blue"\` and write \`hexCode(c: Color): string\` returning the hex`,
      starterCode: `// 1. Point type and translate function
type Point = { x: number; y: number };

function translate(p: Point, dx: number, dy: number): Point {
  // return a new Point — don't mutate p
}

// 2. Color literal union and hex function
type Color = "red" | "green" | "blue";

function hexCode(c: Color): string {
  // return "#FF0000" for red, "#00FF00" for green, "#0000FF" for blue
}

console.log(translate({ x: 1, y: 2 }, 3, -1));  // { x: 4, y: 1 }
console.log(hexCode("red"));    // #FF0000
console.log(hexCode("green"));  // #00FF00
`,
      testCode: `
try {
  const p = translate({ x: 1, y: 2 }, 3, -1);
  if (p.x !== 4 || p.y !== 1) throw new Error(\`translate: expected {x:4,y:1}, got {x:\${p.x},y:\${p.y}}\`);
  const orig = { x: 1, y: 2 };
  translate(orig, 5, 5);
  if (orig.x !== 1) throw new Error("translate should not mutate the original point");
  if (hexCode("red") !== "#FF0000") throw new Error(\`red hex wrong: \${hexCode("red")}\`);
  if (hexCode("green") !== "#00FF00") throw new Error("green hex wrong");
  if (hexCode("blue") !== "#0000FF") throw new Error("blue hex wrong");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`translate`: `return { x: p.x + dx, y: p.y + dy }`',
        'Use a switch or object map for `hexCode`: `const map = { red: "#FF0000", ... }; return map[c]`',
        'Literal union types restrict values at compile time — TypeScript will error if you pass "purple"',
      ],
    },

    {
      id: 'ts_b06',
      tier: 'beginner',
      title: 'Union Types',
      difficulty: 'beginner',
      topic: 'Types',
      description: `## Union Types

A union type (\`A | B\`) means a value can be either type. Use \`typeof\` to narrow the type at runtime.

\`\`\`typescript
function display(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();  // TypeScript knows it's a string here
  }
  return value.toFixed(2);      // and a number here
}
\`\`\`

**Your task:**
1. \`formatId(id: number | string): string\` — returns \`"ID-[id]"\` (convert number to string if needed)
2. \`getLength(val: string | string[]): number\` — returns string length or array length`,
      starterCode: `function formatId(id: number | string): string {
  // return "ID-" + id as a string
}

function getLength(val: string | string[]): number {
  // return length of the string OR the array
}

console.log(formatId(42));          // ID-42
console.log(formatId("abc"));       // ID-abc
console.log(getLength("hello"));    // 5
console.log(getLength(["a","b","c"])); // 3
`,
      testCode: `
try {
  if (formatId(42) !== "ID-42") throw new Error(\`formatId(42): got "\${formatId(42)}"\`);
  if (formatId("abc") !== "ID-abc") throw new Error(\`formatId("abc"): got "\${formatId("abc")}"\`);
  if (getLength("hello") !== 5) throw new Error("getLength string: expected 5");
  if (getLength(["a","b","c"]) !== 3) throw new Error("getLength array: expected 3");
  if (getLength("") !== 0) throw new Error("getLength empty string: expected 0");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`formatId`: `return "ID-" + id` — JS coerces number to string with `+`',
        '`getLength`: check with `Array.isArray(val)` or `typeof val === "string"`',
        'Both strings and arrays have a `.length` property, so `val.length` also works here',
      ],
    },

    {
      id: 'ts_b07',
      tier: 'beginner',
      title: 'Optional & Default Parameters',
      difficulty: 'beginner',
      topic: 'Functions',
      description: `## Optional & Default Parameters

Add \`?\` to make a parameter optional. Use \`= value\` for a default.

\`\`\`typescript
function greet(name: string, greeting = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

function createTag(tag: string, content?: string): string {
  return \`<\${tag}>\${content ?? ""}</\${tag}>\`;
}
\`\`\`

**Your task:**
1. \`createUser(name: string, role = "user", active = true)\` — returns an object \`{name, role, active}\`
2. \`repeat(s: string, times = 3, sep = ""): string\` — repeats string \`times\` times, joined with \`sep\``,
      starterCode: `function createUser(name: string, role = "user", active = true) {
  // return { name, role, active }
}

function repeat(s: string, times = 3, sep = ""): string {
  // repeat s, times times, joined by sep
}

console.log(createUser("Sam"));
// { name: 'Sam', role: 'user', active: true }
console.log(createUser("Admin", "admin", false));
// { name: 'Admin', role: 'admin', active: false }
console.log(repeat("ha"));          // hahaha
console.log(repeat("na", 4, "-")); // na-na-na-na
`,
      testCode: `
try {
  const u1 = createUser("Sam");
  if (u1.name !== "Sam" || u1.role !== "user" || u1.active !== true)
    throw new Error(\`createUser default: got \${JSON.stringify(u1)}\`);
  const u2 = createUser("Admin", "admin", false);
  if (u2.role !== "admin" || u2.active !== false)
    throw new Error("createUser custom args failed");
  if (repeat("ha") !== "hahaha") throw new Error(\`repeat default: got "\${repeat("ha")}"\`);
  if (repeat("na", 4, "-") !== "na-na-na-na") throw new Error("repeat with sep failed");
  if (repeat("x", 1) !== "x") throw new Error("repeat once failed");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`createUser`: `return { name, role, active }` — shorthand property syntax',
        '`repeat`: `Array(times).fill(s).join(sep)` creates an array of copies and joins them',
        'Default parameters only apply when the argument is `undefined` — passing `false` uses false',
      ],
    },

    {
      id: 'ts_b08',
      tier: 'beginner',
      title: 'String Methods',
      difficulty: 'beginner',
      topic: 'Strings',
      description: `## String Methods

TypeScript/JavaScript strings have many useful built-in methods.

\`\`\`typescript
"  hello  ".trim()              // "hello"
"hello world".split(" ")        // ["hello", "world"]
["a","b","c"].join("-")         // "a-b-c"
"Hello".toLowerCase()           // "hello"
"cat".replace("c", "b")        // "bat"
"hello world".includes("world") // true
\`\`\`

**Your task:**
1. \`toSlug(s: string): string\` — lowercase, replace spaces with hyphens, remove non-alphanumeric/hyphen chars
2. \`countWords(s: string): number\` — count words in a string (split on whitespace)
3. \`truncate(s: string, maxLen: number, ellipsis = "..."): string\` — truncate if over maxLen`,
      starterCode: `function toSlug(s: string): string {
  // lowercase → replace spaces with - → remove non [a-z0-9-]
}

function countWords(s: string): number {
  // split on whitespace and count non-empty parts
}

function truncate(s: string, maxLen: number, ellipsis = "..."): string {
  // if s.length <= maxLen return s, else trim and add ellipsis
}

console.log(toSlug("Hello World!"));        // hello-world
console.log(toSlug("TypeScript & JS"));     // typescript-js
console.log(countWords("  hello world  ")); // 2
console.log(truncate("Hello World", 8));    // Hello...
console.log(truncate("Hi", 10));            // Hi
`,
      testCode: `
try {
  if (toSlug("Hello World!") !== "hello-world") throw new Error(\`toSlug: got "\${toSlug("Hello World!")}"\`);
  if (toSlug("TypeScript & JS") !== "typescript--js" && toSlug("TypeScript & JS") !== "typescript-js")
    throw new Error(\`toSlug special chars: got "\${toSlug("TypeScript & JS")}"\`);
  if (countWords("  hello world  ") !== 2) throw new Error("countWords spaces");
  if (countWords("one") !== 1) throw new Error("countWords single");
  if (countWords("") !== 0) throw new Error("countWords empty");
  if (truncate("Hello World", 8) !== "Hello...") throw new Error(\`truncate: got "\${truncate("Hello World", 8)}"\`);
  if (truncate("Hi", 10) !== "Hi") throw new Error("truncate short string");
  if (truncate("abcdef", 6) !== "abcdef") throw new Error("truncate exact length");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`toSlug`: chain `.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "")`',
        '`countWords`: `s.trim().split(/\\s+/).filter(w => w.length > 0).length`',
        '`truncate`: `if (s.length <= maxLen) return s; return s.slice(0, maxLen - ellipsis.length) + ellipsis`',
      ],
    },

    // ── INTERMEDIATE ──────────────────────────────────────────────────────────

    {
      id: 'ts_004',
      tier: 'intermediate',
      title: 'Interfaces',
      difficulty: 'intermediate',
      topic: 'Types',
      description: `## Interfaces

Interfaces define the shape of an object — a contract that says "this object must have these fields."

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  role?: string;  // ? means optional
}

function displayUser(user: User): string {
  return \`\${user.name} (\${user.email})\`;
}
\`\`\`

**Your task:**
1. Define a \`Product\` interface with: \`id\` (number), \`name\` (string), \`price\` (number), \`inStock\` (boolean)
2. Write \`formatProduct(product: Product): string\` — returns \`"[name] - $[price]"\` or \`"[name] - $[price] (out of stock)"\`
3. Write \`getAffordable(products: Product[], budget: number): Product[]\` — in-stock products within budget`,
      starterCode: `// 1. Define the interface


// 2. Format function


// 3. Filter function


const products = [
  { id: 1, name: "Widget", price: 9.99, inStock: true },
  { id: 2, name: "Gadget", price: 49.99, inStock: false },
  { id: 3, name: "Doohickey", price: 4.99, inStock: true },
];

console.log(formatProduct(products[0]));
console.log(formatProduct(products[1]));
console.log(getAffordable(products, 10));
`,
      testCode: `
try {
  if (typeof formatProduct !== "function") throw new Error("formatProduct not defined");
  if (typeof getAffordable !== "function") throw new Error("getAffordable not defined");

  const p1 = { id: 1, name: "Widget", price: 9.99, inStock: true };
  const p2 = { id: 2, name: "Gadget", price: 49.99, inStock: false };

  const f1 = formatProduct(p1);
  if (!f1.includes("Widget") || !f1.includes("9.99")) throw new Error(\`formatProduct: "\${f1}"\`);
  const f2 = formatProduct(p2);
  if (!f2.includes("out of stock")) throw new Error("Out of stock should say 'out of stock'");

  const affordable = getAffordable([p1, p2, { id: 3, name: "Thing", price: 5, inStock: true }], 10);
  if (affordable.length !== 2) throw new Error(\`Expected 2 affordable items, got \${affordable.length}\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`interface Product { id: number; name: string; price: number; inStock: boolean; }`',
        '`formatProduct`: use template literal, check `product.inStock`',
        '`getAffordable`: `products.filter(p => p.price <= budget && p.inStock)`',
      ],
    },

    {
      id: 'ts_005',
      tier: 'intermediate',
      title: 'Classes in TypeScript',
      difficulty: 'intermediate',
      topic: 'OOP',
      description: `## Classes in TypeScript

TypeScript classes add typed properties and access modifiers (\`private\`, \`protected\`, \`public\`).

\`\`\`typescript
class Animal {
  private name: string;
  constructor(name: string) { this.name = name; }
  speak(): string { return \`\${this.name} makes a sound\`; }
}
\`\`\`

**Your task:** Build a generic \`Stack<T>\` class:
- \`private items: T[]\`
- \`push(item: T): void\`
- \`pop(): T | undefined\`
- \`peek(): T | undefined\`
- \`get size(): number\`
- \`isEmpty(): boolean\``,
      starterCode: `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    // add to top
  }

  pop(): T | undefined {
    // remove and return top
  }

  peek(): T | undefined {
    // return top without removing
  }

  get size(): number {
    // return count
  }

  isEmpty(): boolean {
    // return true if empty
  }
}

const stack = new Stack<number>();
stack.push(1); stack.push(2); stack.push(3);
console.log(stack.peek());  // 3
console.log(stack.pop());   // 3
console.log(stack.size);    // 2
`,
      testCode: `
try {
  const s = new Stack();
  if (!s.isEmpty()) throw new Error("New stack should be empty");
  s.push("a"); s.push("b"); s.push("c");
  if (s.size !== 3) throw new Error(\`Expected size 3, got \${s.size}\`);
  if (s.peek() !== "c") throw new Error(\`peek() should return "c", got "\${s.peek()}"\`);
  if (s.size !== 3) throw new Error("peek() should not change size");
  if (s.pop() !== "c") throw new Error(\`pop() should return "c"\`);
  if (s.size !== 2) throw new Error("size should be 2 after pop");
  s.pop(); s.pop();
  if (!s.isEmpty()) throw new Error("Stack should be empty after all pops");
  if (s.pop() !== undefined) throw new Error("pop() on empty should return undefined");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`push`: `this.items.push(item)`',
        '`pop`: `return this.items.pop()`',
        '`peek`: `return this.items[this.items.length - 1]`',
        '`size` getter: `return this.items.length`',
      ],
    },

    {
      id: 'ts_006',
      tier: 'intermediate',
      title: 'Async / Await',
      difficulty: 'intermediate',
      topic: 'Async',
      description: `## Async / Await

Async functions return Promises. Use \`await\` to pause until a Promise resolves.

\`\`\`typescript
async function fetchUser(id: number): Promise<{name: string}> {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}

// Calling it:
const user = await fetchUser(1);
\`\`\`

**Your task:**
1. \`delay(ms: number): Promise<void>\` — resolves after \`ms\` milliseconds (use \`setTimeout\`)
2. \`fetchUserData(id: number): Promise<{name: string, email: string}>\` — awaits a 100ms delay then returns a fake user
3. An async \`main()\` that fetches users 1 and 2, logging each name`,
      starterCode: `function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUserData(id: number): Promise<{name: string, email: string}> {
  await delay(100);
  return { name: \`User \${id}\`, email: \`user\${id}@example.com\` };
}

async function main(): Promise<void> {
  // fetch user 1, log name
  // fetch user 2, log name
}

main();
`,
      testCode: `
try {
  if (typeof delay !== 'function') throw new Error('delay function not defined');
  const p = delay(50);
  if (!(p instanceof Promise)) throw new Error('delay should return a Promise');

  const start = Date.now();
  await delay(50);
  if (Date.now() - start < 30) throw new Error("delay doesn't seem to wait");

  const user = await fetchUserData(5);
  if (!user.name || !user.email) throw new Error('fetchUserData should return {name, email}');
  if (!user.name.includes("5")) throw new Error('user name should include the id');

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`delay`: `return new Promise(resolve => setTimeout(resolve, ms))`',
        '`fetchUserData`: `await delay(100)` then `return { name: \`User \${id}\`, email: \`user\${id}@example.com\` }`',
        'In `main`: `const user1 = await fetchUserData(1); console.log(user1.name);`',
      ],
    },

    {
      id: 'ts_i04',
      tier: 'intermediate',
      title: 'Enums',
      difficulty: 'intermediate',
      topic: 'Types',
      description: `## Enums

Enums create named constants. String enums are especially useful because their values are readable at runtime.

\`\`\`typescript
enum Direction { North = "N", South = "S", East = "E", West = "W" }

function opposite(d: Direction): Direction {
  const map = { [Direction.North]: Direction.South, ... };
  return map[d];
}
\`\`\`

**Your task:**
1. Create \`enum Direction\` with string values "N", "S", "E", "W"
2. Create \`enum HttpStatus\` with numeric values OK=200, NotFound=404, Error=500
3. Write \`describeStatus(s: HttpStatus): string\` returning a human-readable description`,
      starterCode: `enum Direction {
  // North = "N", etc.
}

enum HttpStatus {
  // OK = 200, etc.
}

function describeStatus(s: HttpStatus): string {
  // return "OK", "Not Found", or "Server Error"
}

function move(dir: Direction, steps: number): string {
  return \`Moving \${steps} step(s) in direction \${dir}\`;
}

console.log(move(Direction.North, 3));         // Moving 3 step(s) in direction N
console.log(describeStatus(HttpStatus.OK));    // OK
console.log(describeStatus(HttpStatus.NotFound)); // Not Found
`,
      testCode: `
try {
  if (Direction.North !== "N") throw new Error(\`Direction.North should be "N", got "\${Direction.North}"\`);
  if (Direction.West !== "W") throw new Error("Direction.West should be W");
  if (HttpStatus.OK !== 200) throw new Error(\`HttpStatus.OK should be 200, got \${HttpStatus.OK}\`);
  if (HttpStatus.NotFound !== 404) throw new Error("HttpStatus.NotFound should be 404");
  const ok = describeStatus(HttpStatus.OK);
  if (!ok.toLowerCase().includes("ok")) throw new Error(\`describeStatus(200): got "\${ok}"\`);
  const nf = describeStatus(HttpStatus.NotFound);
  if (!nf.toLowerCase().includes("not found") && !nf.toLowerCase().includes("404"))
    throw new Error(\`describeStatus(404): got "\${nf}"\`);
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`enum Direction { North = "N", South = "S", East = "E", West = "W" }`',
        '`enum HttpStatus { OK = 200, NotFound = 404, Error = 500 }`',
        '`describeStatus`: use a switch on `s` with cases for each HttpStatus value',
      ],
    },

    {
      id: 'ts_i05',
      tier: 'intermediate',
      title: 'Generics Basics',
      difficulty: 'intermediate',
      topic: 'Generics',
      description: `## Generics

Generics let you write functions and types that work with **any** type while keeping type safety.

\`\`\`typescript
function identity<T>(x: T): T { return x; }

identity<string>("hello")  // string
identity<number>(42)       // number
identity("inferred")       // TypeScript infers T = string
\`\`\`

**Your task:**
1. \`identity<T>(x: T): T\` — returns its argument unchanged
2. \`first<T>(arr: T[]): T | undefined\` — returns the first element or undefined
3. \`zip<A, B>(as: A[], bs: B[]): [A, B][]\` — pairs elements: \`zip([1,2],["a","b"])\` → \`[[1,"a"],[2,"b"]]\``,
      starterCode: `function identity<T>(x: T): T {
  // return x
}

function first<T>(arr: T[]): T | undefined {
  // return first element or undefined
}

function zip<A, B>(as: A[], bs: B[]): [A, B][] {
  // pair each element — stop at shorter array
}

console.log(identity(42));            // 42
console.log(identity("hello"));       // hello
console.log(first([10, 20, 30]));    // 10
console.log(first([]));              // undefined
console.log(zip([1,2,3], ["a","b","c"]));  // [[1,"a"],[2,"b"],[3,"c"]]
`,
      testCode: `
try {
  if (identity(42) !== 42) throw new Error("identity number");
  if (identity("hi") !== "hi") throw new Error("identity string");
  if (first([10,20,30]) !== 10) throw new Error("first returns first element");
  if (first([]) !== undefined) throw new Error("first on empty returns undefined");
  const zipped = zip([1,2,3], ["a","b","c"]);
  if (JSON.stringify(zipped) !== '[[1,"a"],[2,"b"],[3,"c"]]')
    throw new Error(\`zip: got \${JSON.stringify(zipped)}\`);
  const short = zip([1,2], ["a","b","c"]);
  if (short.length !== 2) throw new Error("zip stops at shorter array");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`identity`: `return x`',
        '`first`: `return arr[0]` (returns undefined if array is empty)',
        '`zip`: `const len = Math.min(as.length, bs.length); return Array.from({length: len}, (_, i) => [as[i], bs[i]])`',
      ],
    },

    {
      id: 'ts_i06',
      tier: 'intermediate',
      title: 'Type Guards',
      difficulty: 'intermediate',
      topic: 'Types',
      description: `## Type Guards

Type guards narrow a union type to a specific type at runtime. Use \`typeof\`, \`instanceof\`, or a custom \`is\` predicate.

\`\`\`typescript
function isString(x: unknown): x is string {
  return typeof x === "string";
}

function process(val: string | number) {
  if (isString(val)) {
    console.log(val.toUpperCase()); // TypeScript knows val is string
  }
}
\`\`\`

**Your task:**
1. \`isString(x: unknown): x is string\`
2. \`isNumber(x: unknown): x is number\`
3. \`formatValue(x: string | number | boolean): string\` — uses the guards to format: strings get quoted, numbers get fixed to 2 decimals, booleans get "yes"/"no"`,
      starterCode: `function isString(x: unknown): x is string {
  // use typeof
}

function isNumber(x: unknown): x is number {
  // use typeof
}

function formatValue(x: string | number | boolean): string {
  // return '"text"' for strings, "3.14" for numbers, "yes"/"no" for booleans
}

console.log(formatValue("hello"));  // "hello"
console.log(formatValue(3.14159)); // 3.14
console.log(formatValue(true));    // yes
console.log(formatValue(false));   // no
`,
      testCode: `
try {
  if (!isString("hi")) throw new Error("isString should return true for strings");
  if (isString(42)) throw new Error("isString should return false for numbers");
  if (!isNumber(42)) throw new Error("isNumber should return true for numbers");
  if (isNumber("42")) throw new Error("isNumber should return false for strings");
  if (formatValue("hello") !== '"hello"') throw new Error(\`formatValue string: got "\${formatValue("hello")}"\`);
  if (formatValue(3.14159) !== "3.14") throw new Error(\`formatValue number: got "\${formatValue(3.14159)}"\`);
  if (formatValue(true) !== "yes") throw new Error("formatValue true should be 'yes'");
  if (formatValue(false) !== "no") throw new Error("formatValue false should be 'no'");
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`isString`: `return typeof x === "string"`',
        '`isNumber`: `return typeof x === "number"`',
        '`formatValue`: check string → `\`"\${x}"\``, number → `x.toFixed(2)`, else → `x ? "yes" : "no"`',
      ],
    },

    {
      id: 'ts_i07',
      tier: 'intermediate',
      title: 'Destructuring',
      difficulty: 'intermediate',
      topic: 'Syntax',
      description: `## Destructuring

Destructuring extracts values from objects and arrays cleanly.

\`\`\`typescript
const { name, age = 0 } = user;          // object, with default
const { id: userId } = user;             // rename to userId
const [first, , third] = items;          // skip second element
const [head, ...tail] = items;           // rest pattern
const { address: { city } } = person;   // nested
\`\`\`

**Your task:**
1. Write \`getCity(person)\` — destructure a nested \`{name, address: {city, zip}}\` object, return \`"\${name} lives in \${city} \${zip}"\`
2. Write \`head(arr)\` — returns \`{first, rest}\` using array destructuring
3. Write \`swapPair([a, b])\` — returns \`[b, a]\``,
      starterCode: `function getCity(person: { name: string; address: { city: string; zip: string } }): string {
  // destructure name and address.city, address.zip
}

function head<T>(arr: T[]): { first: T | undefined; rest: T[] } {
  // destructure arr into first element and rest
}

function swapPair<T>([a, b]: [T, T]): [T, T] {
  // return swapped pair
}

const person = { name: "Alice", address: { city: "NYC", zip: "10001" } };
console.log(getCity(person));          // Alice lives in NYC 10001
console.log(head([1, 2, 3, 4]));      // { first: 1, rest: [2,3,4] }
console.log(swapPair(["a", "b"]));    // ['b', 'a']
`,
      testCode: `
try {
  const p = { name: "Alice", address: { city: "NYC", zip: "10001" } };
  const result = getCity(p);
  if (!result.includes("Alice") || !result.includes("NYC") || !result.includes("10001"))
    throw new Error(\`getCity: got "\${result}"\`);

  const h = head([1, 2, 3]);
  if (h.first !== 1 || JSON.stringify(h.rest) !== "[2,3]")
    throw new Error(\`head: got \${JSON.stringify(h)}\`);
  const empty = head([]);
  if (empty.first !== undefined || empty.rest.length !== 0)
    throw new Error("head on empty array");

  const swapped = swapPair(["a","b"]);
  if (swapped[0] !== "b" || swapped[1] !== "a") throw new Error("swapPair failed");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`getCity`: `const { name, address: { city, zip } } = person; return \`...\``',
        '`head`: `const [first, ...rest] = arr; return { first, rest }`',
        '`swapPair`: the parameter `[a, b]` destructures in the signature — just `return [b, a]`',
      ],
    },

    {
      id: 'ts_i08',
      tier: 'intermediate',
      title: 'Spread & Rest',
      difficulty: 'intermediate',
      topic: 'Syntax',
      description: `## Spread & Rest

The \`...\` operator spreads iterable values or collects them.

\`\`\`typescript
// Spread: expand
const merged = { ...defaults, ...overrides };  // object spread
const combined = [...arr1, ...arr2];            // array spread

// Rest: collect
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
\`\`\`

**Your task:**
1. \`mergeConfig<T extends object>(defaults: T, overrides: Partial<T>): T\` — merges with overrides winning
2. \`sum(...nums: number[]): number\` — sums any number of arguments
3. \`unique<T>(...arrays: T[][]): T[]\` — combines all arrays and removes duplicates`,
      starterCode: `function mergeConfig<T extends object>(defaults: T, overrides: Partial<T>): T {
  // spread defaults then overrides
}

function sum(...nums: number[]): number {
  // reduce to sum
}

function unique<T>(...arrays: T[][]): T[] {
  // combine and deduplicate
}

const config = mergeConfig({ host: "localhost", port: 3000 }, { port: 8080 });
console.log(config);  // { host: 'localhost', port: 8080 }

console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(unique([1,2,3],[2,3,4],[3,4,5]));  // [1,2,3,4,5]
`,
      testCode: `
try {
  const cfg = mergeConfig({ host: "localhost", port: 3000 }, { port: 8080 });
  if (cfg.host !== "localhost") throw new Error("mergeConfig: host should come from defaults");
  if ((cfg as any).port !== 8080) throw new Error("mergeConfig: port should come from overrides");

  if (sum(1,2,3,4,5) !== 15) throw new Error(\`sum: got \${sum(1,2,3,4,5)}\`);
  if (sum() !== 0) throw new Error("sum() with no args should be 0");

  const u = unique([1,2,3],[2,3,4],[3,4,5]);
  if (u.length !== 5 || !u.includes(1) || !u.includes(5))
    throw new Error(\`unique: got \${JSON.stringify(u)}\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`mergeConfig`: `return { ...defaults, ...overrides }`',
        '`sum`: `return nums.reduce((a, b) => a + b, 0)` — works with 0 args since initial value is 0',
        '`unique`: combine with `[...arrays].flat()` then `[...new Set(combined)]`',
      ],
    },

    {
      id: 'ts_i09',
      tier: 'intermediate',
      title: 'Utility Types',
      difficulty: 'intermediate',
      topic: 'Types',
      description: `## Utility Types

TypeScript ships with built-in utility types to transform existing types.

\`\`\`typescript
interface User { id: number; name: string; email: string; }

type UserPreview  = Pick<User, "id" | "name">;    // subset
type UserUpdate   = Partial<User>;                  // all optional
type FrozenUser   = Readonly<User>;                 // immutable
type UserMap      = Record<string, User>;           // string -> User
type NoEmail      = Omit<User, "email">;            // remove field
\`\`\`

**Your task:** Given a \`Config\` interface, write functions that demonstrate \`Partial\`, \`Readonly\`, \`Pick\`, and \`Record\`.`,
      starterCode: `interface Config {
  host: string;
  port: number;
  debug: boolean;
  timeout: number;
}

// 1. applyPatch: takes a full config and a Partial<Config>, returns merged Config
function applyPatch(config: Config, patch: Partial<Config>): Config {
  // spread config, then patch
}

// 2. publicConfig: takes Config, returns only host and port (use Pick)
function publicConfig(config: Config): Pick<Config, "host" | "port"> {
  // destructure or pick
}

// 3. createRegistry: returns a Record<string, Config>
function createRegistry(): Record<string, Config> {
  return {};
}

const cfg: Config = { host: "localhost", port: 3000, debug: true, timeout: 5000 };
console.log(applyPatch(cfg, { port: 8080, debug: false }));
console.log(publicConfig(cfg));
`,
      testCode: `
try {
  const cfg = { host: "localhost", port: 3000, debug: true, timeout: 5000 };

  const patched = applyPatch(cfg, { port: 8080 });
  if (patched.port !== 8080) throw new Error("applyPatch: port should update");
  if (patched.host !== "localhost") throw new Error("applyPatch: host should remain");
  if (patched.debug !== true) throw new Error("applyPatch: debug should remain");

  const pub = publicConfig(cfg);
  if (pub.host !== "localhost" || pub.port !== 3000) throw new Error("publicConfig: wrong values");
  if ("debug" in pub) throw new Error("publicConfig: should not include debug");

  const reg = createRegistry();
  reg["dev"] = cfg;
  if (reg["dev"].host !== "localhost") throw new Error("registry should store configs");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`applyPatch`: `return { ...config, ...patch }`',
        '`publicConfig`: `const { host, port } = config; return { host, port }`',
        '`Partial<Config>` makes all fields optional — great for update/patch operations',
        '`Record<string, Config>` is shorthand for an object with string keys and Config values',
      ],
    },

    {
      id: 'ts_i10',
      tier: 'intermediate',
      title: 'Optional Chaining & Nullish Coalescing',
      difficulty: 'intermediate',
      topic: 'Syntax',
      description: `## Optional Chaining & Nullish Coalescing

\`?.\` safely accesses properties that might be \`null\` or \`undefined\` — returns \`undefined\` instead of throwing.
\`??\` returns the right side when the left is \`null\` or \`undefined\` (but NOT \`0\` or \`""\`).

\`\`\`typescript
const city = user?.address?.city ?? "Unknown";
const len  = user?.getName?.();  // optional method call

settings.theme ??= "dark";  // assign only if null/undefined
\`\`\`

**Your task:**
1. \`getAvatar(user?)\` — returns \`user.profile.avatar\` if it exists, else \`"/default.png"\`
2. \`getDisplayName(user?)\` — returns \`user.displayName ?? user.name ?? "Anonymous"\`
3. \`safeProp<T>(obj: T | null | undefined, ...path: string[]): unknown\` — traverses a path safely`,
      starterCode: `interface Profile { avatar?: string; }
interface User { name?: string; displayName?: string; profile?: Profile; }

function getAvatar(user?: User): string {
  // use optional chaining and ??
}

function getDisplayName(user?: User): string {
  // use ?? chaining
}

function safeProp(obj: unknown, ...path: string[]): unknown {
  // traverse each key safely
}

const user: User = { name: "Sam", profile: { avatar: "/me.png" } };
console.log(getAvatar(user));         // /me.png
console.log(getAvatar({}));           // /default.png
console.log(getAvatar(undefined));    // /default.png
console.log(getDisplayName(user));    // Sam
console.log(getDisplayName({}));      // Anonymous

const obj = { a: { b: { c: 42 } } };
console.log(safeProp(obj, "a", "b", "c")); // 42
console.log(safeProp(obj, "a", "x", "c")); // undefined
`,
      testCode: `
try {
  const user = { name: "Sam", profile: { avatar: "/me.png" } };
  if (getAvatar(user) !== "/me.png") throw new Error(\`getAvatar with avatar: got "\${getAvatar(user)}"\`);
  if (getAvatar({}) !== "/default.png") throw new Error("getAvatar without profile");
  if (getAvatar(undefined) !== "/default.png") throw new Error("getAvatar undefined user");

  if (getDisplayName({ displayName: "SamD", name: "Sam" }) !== "SamD")
    throw new Error("getDisplayName: displayName should win");
  if (getDisplayName({ name: "Sam" }) !== "Sam") throw new Error("getDisplayName: name fallback");
  if (getDisplayName({}) !== "Anonymous") throw new Error("getDisplayName: anonymous fallback");

  const obj = { a: { b: { c: 42 } } };
  if (safeProp(obj, "a", "b", "c") !== 42) throw new Error("safeProp found path");
  if (safeProp(obj, "a", "x", "c") !== undefined) throw new Error("safeProp missing key");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`getAvatar`: `return user?.profile?.avatar ?? "/default.png"`',
        '`getDisplayName`: `return user?.displayName ?? user?.name ?? "Anonymous"`',
        '`safeProp`: `return path.reduce((obj: any, key) => obj?.[key], obj)`',
      ],
    },

    // ── ADVANCED ──────────────────────────────────────────────────────────────

    {
      id: 'ts_a01',
      tier: 'advanced',
      title: 'Generics with Constraints',
      difficulty: 'advanced',
      topic: 'Generics',
      description: `## Generics with Constraints

Use \`extends\` to restrict what types a generic can accept. Use \`keyof T\` to get the keys of a type.

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];  // TypeScript knows the return type!
}

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}
\`\`\`

**Your task:**
1. \`getProperty<T, K extends keyof T>(obj: T, key: K): T[K]\`
2. \`merge<T extends object, U extends object>(a: T, b: U): T & U\`
3. \`minBy<T>(arr: T[], key: keyof T): T | undefined\` — returns item with smallest value at key`,
      starterCode: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  // return the value at key
}

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  // spread both objects
}

function minBy<T>(arr: T[], key: keyof T): T | undefined {
  // return item with smallest value at the given key
}

const user = { name: "Alice", age: 30, score: 95 };
console.log(getProperty(user, "name"));   // Alice
console.log(getProperty(user, "age"));    // 30

const merged = merge({ x: 1 }, { y: 2, z: 3 });
console.log(merged);  // { x: 1, y: 2, z: 3 }

const players = [{ name: "A", score: 90 }, { name: "B", score: 70 }, { name: "C", score: 85 }];
console.log(minBy(players, "score")); // { name: 'B', score: 70 }
`,
      testCode: `
try {
  const user = { name: "Alice", age: 30 };
  if (getProperty(user, "name") !== "Alice") throw new Error("getProperty name");
  if (getProperty(user, "age") !== 30) throw new Error("getProperty age");

  const m = merge({ x: 1 }, { y: 2 });
  if ((m as any).x !== 1 || (m as any).y !== 2) throw new Error(\`merge: got \${JSON.stringify(m)}\`);

  const players = [{ name: "A", score: 90 }, { name: "B", score: 70 }];
  const min = minBy(players, "score");
  if (!min || min.name !== "B") throw new Error(\`minBy: expected B, got \${min?.name}\`);
  if (minBy([], "score") !== undefined) throw new Error("minBy empty array should return undefined");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`getProperty`: `return obj[key]`',
        '`merge`: `return { ...a, ...b } as T & U`',
        '`minBy`: `if (!arr.length) return undefined; return arr.reduce((min, item) => item[key] < min[key] ? item : min)`',
      ],
    },

    {
      id: 'ts_a02',
      tier: 'advanced',
      title: 'Mapped Types',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## Mapped Types

Mapped types create new types by transforming each property of an existing type.

\`\`\`typescript
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type Optional<T> = { [K in keyof T]?: T[K] };
type Stringify<T> = { [K in keyof T]: string };
\`\`\`

You can also add modifiers (\`readonly\`, \`?\`) or use \`as\` to rename keys.

**Your task:**
1. Implement \`type Nullable<T>\` — all fields can also be \`null\`
2. Implement \`type Getters<T>\` — for each field \`k\`, adds a method \`getK(): T[k]\`... actually write \`toNullable<T>(obj: T): Nullable<T>\` and \`stringify<T>(obj: T): Stringify<T>\` as functions that convert at runtime`,
      starterCode: `// 1. Type definitions
type Nullable<T> = { [K in keyof T]: T[K] | null };
type Stringify<T> = { [K in keyof T]: string };

// 2. Runtime functions that use these types
function toNullable<T extends object>(obj: T): Nullable<T> {
  // return a new object with same keys but all values set to null
}

function stringify<T extends object>(obj: T): Stringify<T> {
  // return a new object with same keys but all values converted to strings
}

const user = { name: "Alice", age: 30, active: true };
console.log(toNullable(user));
// { name: null, age: null, active: null }
console.log(stringify(user));
// { name: 'Alice', age: '30', active: 'true' }
`,
      testCode: `
try {
  const obj = { name: "Alice", age: 30, active: true };

  const nulled = toNullable(obj);
  for (const key of Object.keys(obj)) {
    if ((nulled as any)[key] !== null)
      throw new Error(\`toNullable: key \${key} should be null\`);
  }

  const stringified = stringify(obj);
  if (stringified.name !== "Alice") throw new Error("stringify: name should be string 'Alice'");
  if (stringified.age !== "30") throw new Error(\`stringify: age should be "30", got "\${stringified.age}"\`);
  if (stringified.active !== "true") throw new Error("stringify: active should be 'true'");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`toNullable`: `const result: any = {}; for (const k in obj) result[k] = null; return result`',
        '`stringify`: `const result: any = {}; for (const k in obj) result[k] = String((obj as any)[k]); return result`',
        'Mapped types are compile-time constructs — the runtime functions implement the same logic',
      ],
    },

    {
      id: 'ts_a03',
      tier: 'advanced',
      title: 'Discriminated Unions',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## Discriminated Unions

A discriminated union is a union of types that each have a common literal field (the "discriminant"). TypeScript narrows the type based on that field.

\`\`\`typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "rect":   return s.width * s.height;
  }
}
\`\`\`

**Your task:** Extend the Shape type to add \`triangle\` (base, height), then implement \`area\` and \`perimeter\` (use approximations for circle). Add exhaustiveness checking.`,
      starterCode: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":   // Math.PI * r^2
    case "rect":     // w * h
    case "triangle": // 0.5 * base * height
    default:
      const _never: never = s;
      return _never;
  }
}

function describe(s: Shape): string {
  // return a string like "circle with radius 5" or "10x20 rectangle"
}

console.log(area({ kind: "circle", radius: 5 }));           // ~78.5
console.log(area({ kind: "rect", width: 4, height: 6 }));   // 24
console.log(area({ kind: "triangle", base: 3, height: 8 })); // 12
`,
      testCode: `
try {
  const pi = Math.PI;
  if (Math.abs(area({ kind: "circle", radius: 5 }) - pi * 25) > 0.01)
    throw new Error(\`circle area wrong: \${area({ kind: "circle", radius: 5 })}\`);
  if (area({ kind: "rect", width: 4, height: 6 }) !== 24)
    throw new Error("rect area wrong");
  if (area({ kind: "triangle", base: 3, height: 8 }) !== 12)
    throw new Error(\`triangle area: got \${area({ kind: "triangle", base: 3, height: 8 })}\`);

  const d = describe({ kind: "circle", radius: 5 });
  if (!d.includes("circle") && !d.includes("5")) throw new Error(\`describe circle: "\${d}"\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        'Each `case` should `return` the computed value',
        'The `default: const _never: never = s; return _never` causes a compile error if you miss a case',
        '`describe`: switch on `s.kind` and return a descriptive string using the shape\'s properties',
      ],
    },

    {
      id: 'ts_a04',
      tier: 'advanced',
      title: 'Conditional Types',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## Conditional Types

Conditional types choose a type based on a condition: \`T extends U ? X : Y\`.

\`\`\`typescript
type IsArray<T> = T extends any[] ? true : false;
type Flatten<T> = T extends (infer U)[] ? U : T;

type A = IsArray<string[]>;  // true
type B = IsArray<string>;    // false
type C = Flatten<number[]>;  // number
type D = Flatten<number>;    // number
\`\`\`

**Your task:**
1. Define \`type IsArray<T>\` — \`true\` if T is an array, else \`false\`
2. Define \`type Flatten<T>\` — unwraps one level of array, else returns T
3. Write \`flattenArray<T>(x: T | T[]): T[]\` — runtime implementation: always returns an array`,
      starterCode: `// Type definitions (compile-time)
type IsArray<T> = T extends any[] ? true : false;
type Flatten<T> = T extends (infer U)[] ? U : T;

// Runtime function
function flattenArray<T>(x: T | T[]): T[] {
  // if x is an array, return it; otherwise wrap in array
}

console.log(flattenArray([1, 2, 3])); // [1, 2, 3]
console.log(flattenArray(42));         // [42]
console.log(flattenArray("hello"));   // ['hello']

// Type tests (these are compile-time, shown as comments)
// type T1 = IsArray<string[]>;  // true
// type T2 = IsArray<string>;    // false
// type T3 = Flatten<number[]>;  // number
`,
      testCode: `
try {
  const r1 = flattenArray([1,2,3]);
  if (JSON.stringify(r1) !== "[1,2,3]") throw new Error(\`flattenArray array: got \${JSON.stringify(r1)}\`);
  const r2 = flattenArray(42);
  if (JSON.stringify(r2) !== "[42]") throw new Error(\`flattenArray number: got \${JSON.stringify(r2)}\`);
  const r3 = flattenArray("hello");
  if (JSON.stringify(r3) !== '["hello"]') throw new Error(\`flattenArray string: got \${JSON.stringify(r3)}\`);
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`flattenArray`: `return Array.isArray(x) ? x : [x]`',
        '`infer U` in `T extends (infer U)[]` captures the element type',
        'Conditional types distribute over unions: `string | number[] extends any[]` splits into two checks',
      ],
    },

    {
      id: 'ts_a05',
      tier: 'advanced',
      title: 'Template Literal Types',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## Template Literal Types

Template literal types compose string types the same way template literals compose strings.

\`\`\`typescript
type Greeting = \`Hello, \${string}!\`;      // "Hello, [any string]!"
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ClickEvent = EventName<"click">;   // "onClick"
type HoverEvent = EventName<"hover">;   // "onHover"
\`\`\`

**Your task:**
1. \`EventHandler<T>\` is already defined in the starter code — study how it works
2. Write \`makeHandler<T extends string>(event: T, fn: () => void)\` — returns \`{ onClick: fn }\` for event \`"click"\`
3. Write \`createEventMap(events: string[])\` — returns an object mapping \`"onClick"\`, \`"onHover"\`, etc. from input \`["click","hover"]\``,
      starterCode: `type EventHandler<T extends string> = \`on\${Capitalize<T>}\`;

function makeHandler<T extends string>(event: T, fn: () => void): Record<EventHandler<T>, () => void> {
  // return { [\`on\${capitalize(event)}\`]: fn }
}

function createEventMap(events: string[]): Record<string, () => void> {
  // map each event to a handler key and empty function
}

const handler = makeHandler("click", () => console.log("clicked!"));
console.log(Object.keys(handler));  // ['onClick']

const map = createEventMap(["click", "hover", "focus"]);
console.log(Object.keys(map));  // ['onClick', 'onHover', 'onFocus']
`,
      testCode: `
try {
  let clicked = false;
  const h = makeHandler("click", () => { clicked = true; });
  if (!("onClick" in h)) throw new Error(\`makeHandler: expected 'onClick', got \${Object.keys(h)}\`);
  h.onClick();
  if (!clicked) throw new Error("makeHandler: function should be callable");

  const map = createEventMap(["click", "hover", "focus"]);
  if (!("onClick" in map)) throw new Error("createEventMap: missing 'onClick'");
  if (!("onHover" in map)) throw new Error("createEventMap: missing 'onHover'");
  if (!("onFocus" in map)) throw new Error("createEventMap: missing 'onFocus'");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`makeHandler`: capitalize the event name manually: `event[0].toUpperCase() + event.slice(1)`',
        'Return `{ [\`on\${capitalized}\`]: fn } as Record<EventHandler<T>, () => void>`',
        '`createEventMap`: `.reduce((acc, e) => { acc[\`on\${capitalize(e)}\`] = () => {}; return acc; }, {})`',
      ],
    },

    {
      id: 'ts_a06',
      tier: 'advanced',
      title: 'ReturnType & Parameters',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## ReturnType & Parameters

TypeScript's built-in utility types can extract type information from functions.

\`\`\`typescript
function add(a: number, b: number): number { return a + b; }

type AddReturn = ReturnType<typeof add>;     // number
type AddParams = Parameters<typeof add>;     // [number, number]
type AddFirst  = Parameters<typeof add>[0];  // number
\`\`\`

**Your task:**
1. Write a \`memoize<T extends (...args: any[]) => any>(fn: T): T\` function that caches by serializing arguments to JSON
2. Use \`ReturnType\` and \`Parameters\` to annotate a \`compose(f, g)\` function: applies g first, then f`,
      starterCode: `function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

function compose<A, B, C>(f: (b: B) => C, g: (a: A) => B): (a: A) => C {
  // return a function that applies g then f
}

// Test memoize
let callCount = 0;
const slowDouble = memoize((n: number) => { callCount++; return n * 2; });
console.log(slowDouble(5));  // 10
console.log(slowDouble(5));  // 10 (cached)
console.log(callCount);      // 1

// Test compose
const addOne = (n: number) => n + 1;
const toString = (n: number) => \`\${n}\`;
const addOneThenStr = compose(toString, addOne);
console.log(addOneThenStr(5));  // "6"
`,
      testCode: `
try {
  let count = 0;
  const fn = memoize((x: number) => { count++; return x * 3; });
  if (fn(4) !== 12) throw new Error(\`memoize: expected 12, got \${fn(4)}\`);
  fn(4); fn(4);
  if (count !== 1) throw new Error(\`memoize: fn should be called once, called \${count} times\`);
  fn(5);
  if (count !== 2) throw new Error("memoize: different arg should call fn again");

  const addOne = (n: number) => n + 1;
  const double = (n: number) => n * 2;
  const doubleThenAdd = compose(addOne, double);
  if (doubleThenAdd(3) !== 7) throw new Error(\`compose: expected 7, got \${doubleThenAdd(3)}\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`memoize`: the implementation is already partially given — fill in the cache logic',
        '`compose`: `return (a: A) => f(g(a))`',
        '`ReturnType<T>` extracts the return type of function type T',
        '`Parameters<T>` extracts the parameter types as a tuple',
      ],
    },

    {
      id: 'ts_a07',
      tier: 'advanced',
      title: 'Function Overloads',
      difficulty: 'advanced',
      topic: 'Functions',
      description: `## Function Overloads

Function overloads let you define multiple call signatures for a single function. The implementation signature must be compatible with all overloads.

\`\`\`typescript
function pad(s: string, n: number): string;
function pad(n: number, width: number): string;
function pad(x: string | number, n: number): string {
  const s = typeof x === "string" ? x : String(x);
  return s.padStart(n, " ");
}
\`\`\`

**Your task:** Write a \`parse\` function with two overloads:
- \`parse(x: string): number\` — converts string to number
- \`parse(x: number): string\` — converts number to string
- Implementation handles both`,
      starterCode: `// Overload signatures
function parse(x: string): number;
function parse(x: number): string;
// Implementation
function parse(x: string | number): number | string {
  // handle both cases
}

// Also write format with overloads:
function format(n: number, decimals: number): string;
function format(n: number, prefix: string): string;
function format(n: number, arg: number | string): string {
  // if arg is a number: toFixed(arg); if string: prefix + n
}

console.log(parse("42"));    // 42 (number)
console.log(parse(3.14));    // "3.14" (string)
console.log(format(3.14159, 2));      // "3.14"
console.log(format(42, "$"));         // "$42"
`,
      testCode: `
try {
  const n = parse("42");
  if (typeof n !== "number" || n !== 42) throw new Error(\`parse string: expected 42 (number), got \${n}\`);
  const s = parse(3.14);
  if (typeof s !== "string" || s !== "3.14") throw new Error(\`parse number: expected "3.14", got "\${s}"\`);

  const f1 = format(3.14159, 2);
  if (f1 !== "3.14") throw new Error(\`format with decimals: got "\${f1}"\`);
  const f2 = format(42, "$");
  if (f2 !== "$42") throw new Error(\`format with prefix: got "\${f2}"\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`parse` implementation: `return typeof x === "string" ? Number(x) : String(x)`',
        '`format` implementation: `return typeof arg === "number" ? n.toFixed(arg) : arg + n`',
        'Overload signatures are just type declarations — only the implementation runs at runtime',
        'The implementation\'s parameter types must be a union covering all overload cases',
      ],
    },

    {
      id: 'ts_a08',
      tier: 'advanced',
      title: 'Intersection Types',
      difficulty: 'advanced',
      topic: 'Types',
      description: `## Intersection Types

Intersection types (\`A & B\`) combine multiple types into one — the result must satisfy all of them. Great for composing capabilities.

\`\`\`typescript
type Serializable = { serialize(): string };
type Loggable    = { log(): void };

type Service = Serializable & Loggable;

function process(s: Service) {
  s.log();
  return s.serialize();
}
\`\`\`

**Your task:** Define three capability types, combine them, and implement a class that satisfies all three:
- \`Serializable\`: \`serialize(): string\`
- \`Loggable\`: \`log(): void\` and \`logs: string[]\`
- \`Cacheable\`: \`cacheKey: string\` and \`invalidate(): void\``,
      starterCode: `type Serializable = { serialize(): string };
type Loggable    = { log(): void; logs: string[] };
type Cacheable   = { cacheKey: string; invalidate(): void };

type Service = Serializable & Loggable & Cacheable;

class UserService implements Service {
  logs: string[] = [];
  cacheKey = "users";

  serialize(): string {
    // return JSON.stringify with the service info
  }

  log(): void {
    // push a timestamped entry to this.logs
  }

  invalidate(): void {
    // clear logs and reset some state
  }
}

const svc = new UserService();
svc.log();
svc.log();
console.log(svc.logs.length);    // 2
console.log(svc.serialize());
svc.invalidate();
console.log(svc.logs.length);    // 0
`,
      testCode: `
try {
  const svc = new UserService();

  if (typeof svc.serialize !== "function") throw new Error("serialize not implemented");
  if (typeof svc.log !== "function") throw new Error("log not implemented");
  if (typeof svc.invalidate !== "function") throw new Error("invalidate not implemented");
  if (!Array.isArray(svc.logs)) throw new Error("logs should be an array");
  if (typeof svc.cacheKey !== "string") throw new Error("cacheKey should be a string");

  svc.log();
  svc.log();
  if (svc.logs.length !== 2) throw new Error(\`Expected 2 logs after 2 calls, got \${svc.logs.length}\`);

  const s = svc.serialize();
  if (typeof s !== "string") throw new Error("serialize should return a string");

  svc.invalidate();
  if (svc.logs.length !== 0) throw new Error("invalidate should clear logs");

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`serialize`: `return JSON.stringify({ cacheKey: this.cacheKey, logs: this.logs.length })`',
        '`log`: `this.logs.push(new Date().toISOString())`',
        '`invalidate`: `this.logs = []`',
        'Intersection types enforce that the implementing class has ALL methods and properties from each type',
      ],
    },
  ],
};

