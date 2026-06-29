const CHALLENGES = {
  python: [
    {
      id: 'py_001',
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

\`Hello! My name is [name] and I write code in [language].\`

(Replace the brackets with the actual values.)`,
      starterCode: `name = "Sam"
language = "Python"

# Write your f-string print here
`,
      testCode: `
import sys, io
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
      title: 'Dictionaries',
      difficulty: 'beginner',
      topic: 'Data Structures',
      description: `## Dictionaries

Dictionaries store key-value pairs. Think of them like a real dictionary — you look up a word (key) to get its definition (value).

\`\`\`python
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}
print(person["name"])   # Alice
person["job"] = "Engineer"  # add new key
\`\`\`

**Your task:** Complete the function \`print_dict_elements\` so it prints each key and value on its own line in this format:

\`key: value\`

Then call it with the \`rocket_info\` dictionary.`,
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

# Expected Output:
# Falcon 1: First privately developed liquid-fueled rocket
# Atlas V: Launch vehicle for Mars Rovers
# Saturn V: Rocket that took humans to the Moon
# Space Shuttle: First reusable spacecraft
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
except AssertionError as e:
    print(f"\\n❌ Test failed — check your format is 'key: value'")
`,
      hints: [
        '`dct.items()` gives you both key and value in each iteration',
        'In the for loop, `key` is the key and `value` is the value',
        'Use an f-string: `print(f"{key}: {value}")`',
      ],
    },
    {
      id: 'py_005',
      title: 'Functions',
      difficulty: 'beginner',
      topic: 'Functions',
      description: `## Functions

Functions let you package reusable logic. Parameters go in the parentheses, and \`return\` sends a value back.

\`\`\`python
def greet(name):
    return f"Hello, {name}!"

result = greet("Alice")
print(result)  # Hello, Alice!
\`\`\`

**Your task:** Write a function called \`calculate_bmi\` that:
- Takes two parameters: \`weight_kg\` and \`height_m\`
- Returns the BMI: \`weight_kg / (height_m ** 2)\`
- Rounds the result to 1 decimal place using \`round(value, 1)\`

Then print the BMI for someone who is 70kg and 1.75m tall.`,
      starterCode: `def calculate_bmi(weight_kg, height_m):
    # Calculate and return the BMI here
    pass

# Test it: 70kg, 1.75m tall
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
      title: 'Loops',
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

**Your task:** Write a function \`count_above\` that:
- Takes a list of numbers and a threshold value
- Returns how many numbers in the list are **strictly greater than** the threshold

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
      id: 'py_007',
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
      title: 'Classes',
      difficulty: 'intermediate',
      topic: 'OOP',
      description: `## Classes & Objects

Classes are blueprints for objects. \`__init__\` is the constructor that runs when you create a new instance.

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

**Your task:** Create a class \`BankAccount\` with:
- Constructor that takes \`owner\` (str) and \`balance\` (float, default 0)
- \`deposit(amount)\` method — adds to balance, returns new balance
- \`withdraw(amount)\` method — subtracts from balance if funds available, returns new balance. If insufficient funds, print \`"Insufficient funds"\` and return current balance
- \`__str__\` method — returns \`"[owner]'s account: $[balance]"\``,
      starterCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        pass

    def deposit(self, amount):
        pass

    def withdraw(self, amount):
        pass

    def __str__(self):
        pass

# Test it
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
  ],

  typescript: [
    {
      id: 'ts_001',
      title: 'Variables & Type Annotations',
      difficulty: 'beginner',
      topic: 'Basics',
      description: `## Variables & Type Annotations

TypeScript adds type annotations to JavaScript. You're not required to annotate everything — TypeScript infers types — but being explicit makes your code clearer and safer.

\`\`\`typescript
let name: string = "Alice";
let age: number = 30;
let active: boolean = true;
const PI: number = 3.14159;
\`\`\`

Key difference from Python:
- \`let\` for variables that can change
- \`const\` for variables that won't be reassigned

**Your task:** Declare the following and log them all with \`console.log\`:
- \`username\` — a string (const)
- \`score\` — a number (let), start at 0
- \`isLoggedIn\` — a boolean (let), start as true
- Then change \`score\` to 42 and log it again`,
      starterCode: `// Declare your variables here


// Log all three


// Change score and log again

`,
      testCode: `
try {
  if (typeof username !== 'string') throw new Error('username should be a string (const)');
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
        'Log: `console.log(username, score, isLoggedIn)`',
      ],
    },
    {
      id: 'ts_002',
      title: 'Functions with Types',
      difficulty: 'beginner',
      topic: 'Functions',
      description: `## Functions with Types

TypeScript functions let you type both parameters and return values:

\`\`\`typescript
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function version:
const multiply = (a: number, b: number): number => a * b;
\`\`\`

**Your task:** Write two functions:

1. \`greet(name: string): string\` — returns \`"Hello, [name]!"\`
2. \`celsiusToFahrenheit(celsius: number): number\` — converts using \`(celsius * 9/5) + 32\`, rounded to 1 decimal

Then log the results of calling both.`,
      starterCode: `function greet(name: string): string {
    // return the greeting
}

function celsiusToFahrenheit(celsius: number): number {
    // convert and return
}

console.log(greet("World"));        // Hello, World!
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
      title: 'Arrays & Typed Arrays',
      difficulty: 'beginner',
      topic: 'Arrays',
      description: `## Arrays & Typed Arrays

TypeScript arrays are typed — a \`number[]\` array can only hold numbers.

\`\`\`typescript
const names: string[] = ["Alice", "Bob", "Charlie"];
const scores: number[] = [95, 87, 92];

// Array methods you'll use constantly:
scores.push(100);
const doubled = scores.map(n => n * 2);
const passing = scores.filter(n => n >= 90);
const total = scores.reduce((sum, n) => sum + n, 0);
\`\`\`

**Your task:** Given the \`grades\` array:
1. Find the average grade (log it)
2. Create \`passing\` — grades 70 and above
3. Create \`letterGrades\` — map each grade to "A" (≥90), "B" (≥80), "C" (≥70), or "F"
4. Log all three results`,
      starterCode: `const grades: number[] = [92, 68, 75, 88, 95, 52, 83, 71];

// 1. Average


// 2. Passing grades (≥70)


// 3. Letter grades


// Log all three

`,
      testCode: `
try {
  const avg = grades.reduce((s,n) => s+n, 0) / grades.length;
  if (Math.round(avg * 10) !== 780) throw new Error("Average calculation seems off — expected ~78");
  if (!passing || passing.length !== 6) throw new Error(\`passing should have 6 items, got \${passing?.length}\`);
  if (!letterGrades || letterGrades.length !== 8) throw new Error("letterGrades should have 8 items");
  if (letterGrades[0] !== "A") throw new Error(\`92 should be "A", got "\${letterGrades[0]}"\`);
  if (letterGrades[1] !== "F") throw new Error(\`68 should be "F", got "\${letterGrades[1]}"\`);
  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        'Average: `grades.reduce((sum, n) => sum + n, 0) / grades.length`',
        'Filter: `grades.filter(g => g >= 70)`',
        'Map with conditionals: `grades.map(g => g >= 90 ? "A" : g >= 80 ? "B" : ...)`',
      ],
    },
    {
      id: 'ts_004',
      title: 'Interfaces',
      difficulty: 'intermediate',
      topic: 'Types',
      description: `## Interfaces

Interfaces define the shape of an object — like a contract that says "this object must have these fields."

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
3. Write \`getAffordable(products: Product[], budget: number): Product[]\` — returns products within budget that are in stock
4. Create an array of at least 3 products and test both functions`,
      starterCode: `// 1. Define the interface


// 2. Format function


// 3. Filter function


// 4. Create products array and test
const products = [

];

`,
      testCode: `
try {
  if (typeof formatProduct !== "function") throw new Error("formatProduct not defined");
  if (typeof getAffordable !== "function") throw new Error("getAffordable not defined");

  const p1 = { id: 1, name: "Widget", price: 9.99, inStock: true };
  const p2 = { id: 2, name: "Gadget", price: 49.99, inStock: false };

  const f1 = formatProduct(p1);
  if (!f1.includes("Widget") || !f1.includes("9.99")) throw new Error(\`formatProduct returned: "\${f1}"\`);

  const f2 = formatProduct(p2);
  if (!f2.includes("out of stock")) throw new Error("Out of stock products should say 'out of stock'");

  const affordable = getAffordable([p1, p2, { id: 3, name: "Thing", price: 5, inStock: true }], 10);
  if (affordable.length !== 2) throw new Error(\`Expected 2 affordable items, got \${affordable.length}\`);

  console.log("\\n✅ All tests passed!");
} catch(e) {
  console.log("\\n❌ " + e.message);
}
`,
      hints: [
        '`interface Product { id: number; name: string; price: number; inStock: boolean; }`',
        'Format: use template literal, check `product.inStock`',
        'Filter: `products.filter(p => p.price <= budget && p.inStock)`',
      ],
    },
    {
      id: 'ts_005',
      title: 'Classes in TypeScript',
      difficulty: 'intermediate',
      topic: 'OOP',
      description: `## Classes in TypeScript

TypeScript classes look like JavaScript classes but with typed properties and access modifiers.

\`\`\`typescript
class Animal {
  private name: string;
  protected sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  speak(): string {
    return \`\${this.name} says \${this.sound}\`;
  }
}
\`\`\`

**Your task:** Build a \`Stack<T>\` class (generic!) that works like a stack data structure:
- \`private items: T[]\` — the internal array
- \`push(item: T): void\` — add to top
- \`pop(): T | undefined\` — remove and return top item
- \`peek(): T | undefined\` — return top without removing
- \`get size(): number\` — number of items
- \`isEmpty(): boolean\` — true if empty`,
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

// Test it
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
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
        '`pop`: `return this.items.pop()` (array pop returns undefined if empty)',
        '`peek`: `return this.items[this.items.length - 1]`',
        '`size` getter: `return this.items.length`',
        '`isEmpty`: `return this.items.length === 0`',
      ],
    },
    {
      id: 'ts_006',
      title: 'Async / Await',
      difficulty: 'intermediate',
      topic: 'Async',
      description: `## Async / Await

Async functions handle asynchronous operations (like API calls) without callback hell.

\`\`\`typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

// Calling it:
const result = await fetchData("https://api.example.com");
\`\`\`

**Your task:**

Simulate an async operation using a delay function. Write:
1. \`delay(ms: number): Promise<void>\` — returns a promise that resolves after \`ms\` milliseconds (use \`setTimeout\`)
2. \`fetchUserData(id: number): Promise<{name: string, email: string}>\` — simulates a fetch by waiting 100ms then returning a fake user object
3. An async main function that fetches user 1, logs their name, then fetches user 2 and logs their name`,
      starterCode: `// 1. Delay function
function delay(ms: number): Promise<void> {
  return new Promise(resolve => );
}

// 2. Fake fetch
async function fetchUserData(id: number): Promise<{name: string, email: string}> {
  await delay(100);
  // return a user object based on id
  return { name: \`User \${id}\`, email: \`user\${id}@example.com\` };
}

// 3. Main function
async function main(): Promise<void> {
  // fetch user 1, log name
  // fetch user 2, log name
}

main();
`,
      testCode: `
(async () => {
  try {
    if (typeof delay !== "function") throw new Error("delay function not defined");
    const start = Date.now();
    await delay(50);
    if (Date.now() - start < 40) throw new Error("delay doesn't seem to wait");

    const user = await fetchUserData(5);
    if (!user.name || !user.email) throw new Error("fetchUserData should return {name, email}");

    console.log("\\n✅ All tests passed!");
  } catch(e) {
    console.log("\\n❌ " + e.message);
  }
})();
`,
      hints: [
        '`delay`: `return new Promise(resolve => setTimeout(resolve, ms))`',
        'The return object: `{ name: \`User \${id}\`, email: \`user\${id}@example.com\` }`',
        'In main: `const user1 = await fetchUserData(1); console.log(user1.name);`',
      ],
    },
  ],
};
