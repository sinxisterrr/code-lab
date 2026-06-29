// ── Dictionary data ──────────────────────────────────────────────────────────
// Each entry: id, term, aliases, emoji, category, summary,
//             description, syntax, examples [{code, comment}],
//             tips, gotchas, usedIn [challenge ids]

const DICTIONARY = {

  python: [

    // ── Types ─────────────────────────────────────────────────────────────────

    {
      id: 'py_str',
      term: 'str',
      aliases: ['string', 'strings', 'f-string', 'f-strings'],
      emoji: '📝',
      category: 'Types',
      summary: 'Text. Any text. Even emojis.',
      description: 'A <code>str</code> is Python\'s type for text — an immutable sequence of Unicode characters. You create one with quotes. Single or double, Python doesn\'t mind. Strings support indexing, slicing, and a huge library of methods.',
      syntax: `name = "Hello, world!"
also_fine = 'Hello, world!'
multiline = """line one
line two"""`,
      examples: [
        { code: '"ha" * 3', comment: '→ "hahaha"' },
        { code: '"hello"[0]', comment: '→ "h"  (zero-indexed)' },
        { code: '"hello"[-1]', comment: '→ "o"  (last char)' },
        { code: '"hello"[1:3]', comment: '→ "el"  (slice)' },
        { code: 'len("hello")', comment: '→ 5' },
        { code: 'f"Hi, {name}!"', comment: 'f-string — embed any expression' },
      ],
      tips: [
        'f-strings let you embed any Python expression: <code>f"{2 + 2}"</code> → <code>"4"</code>',
        'Triple quotes <code>"""..."""</code> span multiple lines without escape characters',
        'Strings are <em>immutable</em> — methods return new strings, they never change the original',
      ],
      gotchas: [
        '<code>"1" + 1</code> → <code>TypeError</code> — you can\'t add a string to a number directly. Use <code>int("1") + 1</code> or <code>"1" + str(1)</code>',
        '<code>"5" == 5</code> → <code>False</code> — the string and the integer are different types, even if they look the same',
      ],
      usedIn: ['py_001', 'py_002', 'py_b08'],
    },

    {
      id: 'py_int',
      term: 'int',
      aliases: ['integer', 'integers', 'int()'],
      emoji: '🔢',
      category: 'Types',
      summary: 'Whole numbers. As big as your RAM allows.',
      description: 'An <code>int</code> is a whole number — no decimal point. Python integers have arbitrary precision, meaning they can be as large as your memory allows (no 32-bit overflow like in C/Java). Great for counting, indexing, and math that doesn\'t need decimals.',
      syntax: `count = 42
big = 1_000_000   # underscores for readability`,
      examples: [
        { code: '10 // 3', comment: '→ 3  (integer division, floor)' },
        { code: '10 % 3', comment: '→ 1  (modulo — remainder)' },
        { code: '2 ** 10', comment: '→ 1024  (exponent)' },
        { code: 'int("42")', comment: '→ 42  (convert string to int)' },
        { code: 'int(3.9)', comment: '→ 3  (truncates, does NOT round)' },
      ],
      tips: [
        'Use <code>_</code> as a thousands separator for readability: <code>1_000_000</code>',
        '<code>10 // 3</code> is integer (floor) division. <code>10 / 3</code> gives a float.',
      ],
      gotchas: [
        '<code>int(3.9)</code> gives <code>3</code>, not <code>4</code> — it truncates toward zero, not rounds',
        '<code>True</code> and <code>False</code> are actually integers in Python (<code>True == 1</code>, <code>False == 0</code>)',
      ],
      usedIn: ['py_001', 'py_005'],
    },

    {
      id: 'py_float',
      term: 'float',
      aliases: ['float()', 'decimal', 'floating point'],
      emoji: '🌊',
      category: 'Types',
      summary: 'Decimal numbers. Watch out for floating-point weirdness.',
      description: 'A <code>float</code> is a number with a decimal point. Python uses 64-bit IEEE 754 floating-point representation under the hood — the same as most languages. This means you get double precision but also the classic floating-point quirks.',
      syntax: `pi = 3.14159
temp = -4.5
also_float = 1.0   # .0 makes it a float`,
      examples: [
        { code: '10 / 3', comment: '→ 3.3333...  (true division)' },
        { code: 'round(3.7)', comment: '→ 4' },
        { code: 'round(3.14159, 2)', comment: '→ 3.14' },
        { code: 'float("3.14")', comment: '→ 3.14' },
      ],
      tips: [
        '<code>round(value, n)</code> rounds to n decimal places',
        'Use <code>1.0</code> not <code>1</code> when you need a float — <code>type(1)</code> is <code>int</code>',
      ],
      gotchas: [
        '<code>0.1 + 0.2 == 0.3</code> → <code>False</code>! Floating-point precision strikes again. Use <code>round()</code> or <code>math.isclose()</code> for comparisons',
        '<code>isinstance(True, int)</code> is <code>True</code> but <code>isinstance(True, float)</code> is <code>False</code>',
      ],
      usedIn: ['py_001', 'py_005'],
    },

    {
      id: 'py_bool',
      term: 'bool',
      aliases: ['True', 'False', 'boolean'],
      emoji: '💡',
      category: 'Types',
      summary: 'True or False. The foundation of all decisions.',
      description: 'A <code>bool</code> is either <code>True</code> or <code>False</code>. They control <code>if</code> statements, <code>while</code> loops, and logical operators. Everything in Python has a "truthiness" — empty strings, 0, <code>None</code>, and empty collections are all "falsy".',
      syntax: `active = True
logged_in = False`,
      examples: [
        { code: 'bool(0)', comment: '→ False' },
        { code: 'bool("")', comment: '→ False' },
        { code: 'bool([])', comment: '→ False  (empty list)' },
        { code: 'bool("hi")', comment: '→ True' },
        { code: '5 > 3', comment: '→ True' },
        { code: 'True and False', comment: '→ False' },
        { code: 'True or False', comment: '→ True' },
      ],
      tips: [
        'Checking <code>if my_list:</code> is the Pythonic way to check if a list is non-empty',
        '<code>bool</code> is a subclass of <code>int</code> — <code>True + True</code> is <code>2</code>!',
      ],
      gotchas: [
        '<code>if x == True:</code> is almost never what you want. Just write <code>if x:</code>',
        '<code>0 == False</code> is <code>True</code>, and <code>1 == True</code> is <code>True</code> — booleans are secretly integers',
      ],
      usedIn: ['py_001', 'py_b07'],
    },

    {
      id: 'py_none',
      term: 'None',
      aliases: ['NoneType', 'null', 'nil'],
      emoji: '🕳️',
      category: 'Types',
      summary: 'The absence of a value. Python\'s "nothing".',
      description: '<code>None</code> is Python\'s way of representing "no value" or "nothing here". Functions that don\'t explicitly return anything return <code>None</code>. It\'s the equivalent of <code>null</code> in JavaScript or Java.',
      syntax: `result = None
def do_thing():
    print("done")   # implicitly returns None`,
      examples: [
        { code: 'x = None', comment: 'no value yet' },
        { code: 'x is None', comment: '→ True  (use "is", not "==")' },
        { code: 'x is not None', comment: '→ False' },
      ],
      tips: [
        'Always check for None with <code>is None</code>, not <code>== None</code> — it\'s faster and more correct',
        'Use <code>None</code> as a default for mutable arguments: <code>def func(items=None)</code> then <code>items = items or []</code>',
      ],
      gotchas: [
        '<code>print()</code> returns <code>None</code>. Doing <code>x = print("hi")</code> sets <code>x</code> to <code>None</code>',
        'Calling a method on <code>None</code> raises <code>AttributeError: \'NoneType\' object has no attribute \'whatever\'</code> — very common bug',
      ],
      usedIn: ['py_i05'],
    },

    // ── String Methods ─────────────────────────────────────────────────────────

    {
      id: 'py_str_methods',
      term: '.strip()',
      aliases: ['.lower()', '.upper()', '.replace()', '.split()', '.join()', '.startswith()', '.endswith()', '.find()', '.count()', '.strip()', '.lstrip()', '.rstrip()'],
      emoji: '🧹',
      category: 'Strings',
      summary: 'Strings come with a whole toolbox built in.',
      description: 'String methods are called on a string value and return a new string (remember: strings are immutable). You can chain them: <code>"  hello  ".strip().upper()</code>',
      syntax: `s = "  Hello, World!  "
s.strip()          # "Hello, World!"
s.lower()          # "  hello, world!  "
s.upper()          # "  HELLO, WORLD!  "
s.replace("l","r") # "  Herro, Worrd!  "
"a,b,c".split(",") # ["a","b","c"]
"-".join(["a","b"]) # "a-b"`,
      examples: [
        { code: '"  hi  ".strip()', comment: '→ "hi"' },
        { code: '"Hello".lower()', comment: '→ "hello"' },
        { code: '"hello world".split()', comment: '→ ["hello", "world"]' },
        { code: '", ".join(["a","b","c"])', comment: '→ "a, b, c"' },
        { code: '"hello".startswith("he")', comment: '→ True' },
        { code: '"hello".find("ll")', comment: '→ 2  (index where found)' },
      ],
      tips: [
        '<code>.split()</code> with no argument splits on any whitespace and ignores leading/trailing spaces',
        '<code>", ".join(list)</code> is the right way to turn a list into a comma-separated string',
      ],
      gotchas: [
        '<code>s.replace("l", "r")</code> replaces ALL occurrences. Use <code>s.replace("l", "r", 1)</code> to replace just the first',
        '<code>.split(",")</code> and <code>.split()</code> behave differently — no argument splits on any whitespace',
      ],
      usedIn: ['py_b08'],
    },

    // ── Data Structures ────────────────────────────────────────────────────────

    {
      id: 'py_list',
      term: 'list',
      aliases: ['lists', 'list()', '.append()', '.pop()', '.insert()', '.remove()', '.sort()', '.reverse()', '.index()', '.extend()'],
      emoji: '📋',
      category: 'Data Structures',
      summary: 'An ordered, changeable collection of anything.',
      description: 'A <code>list</code> is Python\'s most versatile sequence type — ordered, mutable, and can hold any mix of types. Think of it like a shopping cart: you can add, remove, and rearrange items. Lists use zero-based indexing, and negative indices count from the end.',
      syntax: `fruits = ["apple", "banana", "cherry"]
mixed  = [1, "two", 3.0, True, None]
empty  = []`,
      examples: [
        { code: 'fruits[0]', comment: '→ "apple"  (first item)' },
        { code: 'fruits[-1]', comment: '→ "cherry"  (last item)' },
        { code: 'fruits[1:3]', comment: '→ ["banana", "cherry"]  (slice)' },
        { code: 'fruits.append("mango")', comment: 'add to end' },
        { code: 'fruits.pop()', comment: 'remove and return last item' },
        { code: 'len(fruits)', comment: 'count items' },
        { code: '"apple" in fruits', comment: '→ True  (membership test)' },
      ],
      tips: [
        'To copy a list: <code>b = a[:]</code> or <code>b = list(a)</code> or <code>b = a.copy()</code>. Just doing <code>b = a</code> makes them point to the SAME list',
        '<code>sorted(my_list)</code> returns a new sorted list. <code>my_list.sort()</code> sorts in place',
      ],
      gotchas: [
        '<code>b = a</code> doesn\'t copy — both variables point to the same list. Change one, change both',
        '<code>fruits[10]</code> on a 3-item list raises <code>IndexError</code>',
      ],
      usedIn: ['py_003', 'py_006', 'py_007', 'py_i08'],
    },

    {
      id: 'py_dict',
      term: 'dict',
      aliases: ['dictionary', 'dictionaries', 'dict()', '.items()', '.keys()', '.values()', '.get()', '.update()', '.pop()'],
      emoji: '📚',
      category: 'Data Structures',
      summary: 'Key-value pairs. The closest thing Python has to a database lookup.',
      description: 'A <code>dict</code> maps unique <em>keys</em> to <em>values</em>. Lookup by key is O(1) — lightning fast regardless of size. Keys must be immutable (strings, ints, tuples), values can be anything.',
      syntax: `person = {"name": "Alice", "age": 30}
empty  = {}
also   = dict(name="Alice", age=30)`,
      examples: [
        { code: 'person["name"]', comment: '→ "Alice"' },
        { code: 'person.get("age", 0)', comment: '→ 30  (safe — won\'t KeyError)' },
        { code: 'person["job"] = "Dev"', comment: 'add or update a key' },
        { code: '"name" in person', comment: '→ True' },
        { code: 'for k, v in person.items():', comment: 'iterate key-value pairs' },
        { code: 'list(person.keys())', comment: '→ ["name", "age"]' },
      ],
      tips: [
        'Use <code>.get(key, default)</code> instead of <code>[key]</code> when the key might not exist',
        'As of Python 3.7+, dictionaries maintain insertion order',
      ],
      gotchas: [
        '<code>person["missing"]</code> raises <code>KeyError</code>. Use <code>.get()</code> for safety',
        'Dict keys must be hashable — you can\'t use a list as a key, but a tuple is fine',
      ],
      usedIn: ['py_004', 'py_i03', 'py_i06'],
    },

    {
      id: 'py_tuple',
      term: 'tuple',
      aliases: ['tuples', 'tuple()', 'unpacking', 'packing'],
      emoji: '📦',
      category: 'Data Structures',
      summary: 'Like a list, but locked. Perfect for grouping related values.',
      description: 'A <code>tuple</code> is an immutable sequence. Once created, you can\'t change it. Use tuples for things that shouldn\'t change: coordinates, RGB colors, database records. They\'re also great as function return values when you need to return multiple things.',
      syntax: `point   = (3, 4)
colors  = ("red", "green", "blue")
single  = (42,)        # trailing comma needed for single-item tuple
x, y    = point        # unpacking`,
      examples: [
        { code: 'x, y = (3, 4)', comment: 'unpack into two variables' },
        { code: 'a, *rest = (1,2,3,4)', comment: 'a=1, rest=[2,3,4]' },
        { code: '(3,4) + (5,6)', comment: '→ (3, 4, 5, 6)' },
        { code: 'def minmax(nums): return min(nums), max(nums)', comment: 'implicitly returns tuple' },
      ],
      tips: [
        'Functions can "return" multiple values naturally — they\'re actually returning one tuple',
        'Tuple unpacking also works in for loops: <code>for x, y in list_of_pairs:</code>',
      ],
      gotchas: [
        '<code>(42)</code> is just <code>42</code> in parentheses. <code>(42,)</code> (with trailing comma) is a one-element tuple',
        'Tuples are immutable, but if they contain mutable objects (like lists), those inner objects can still change',
      ],
      usedIn: ['py_b09', 'py_i07'],
    },

    {
      id: 'py_set',
      term: 'set',
      aliases: ['sets', 'set()', 'frozenset', 'intersection', 'union', 'difference'],
      emoji: '🔵',
      category: 'Data Structures',
      summary: 'Unordered, unique elements. Great for deduplication and fast lookups.',
      description: 'A <code>set</code> stores unique, unordered elements. Adding a duplicate does nothing. Membership testing (<code>x in my_set</code>) is O(1). Set operations (<code>&</code>, <code>|</code>, <code>-</code>) mirror mathematical set theory.',
      syntax: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
from_list = set([1, 1, 2, 2])  # → {1, 2}`,
      examples: [
        { code: 'a & b', comment: '→ {3, 4}  (intersection)' },
        { code: 'a | b', comment: '→ {1,2,3,4,5,6}  (union)' },
        { code: 'a - b', comment: '→ {1, 2}  (difference: in a, not b)' },
        { code: 'a ^ b', comment: '→ {1,2,5,6}  (symmetric difference)' },
        { code: 'a.add(99)', comment: 'add one element' },
        { code: '99 in a', comment: '→ True  (fast!)' },
      ],
      tips: [
        '<code>list(set(my_list))</code> is a quick way to remove duplicates from a list',
        'Sets are unordered — don\'t rely on any particular order when iterating',
      ],
      gotchas: [
        '<code>{}</code> creates an empty <em>dict</em>, not a set. Use <code>set()</code> for an empty set',
        'Sets can only contain hashable (immutable) items — lists and dicts can\'t be set members',
      ],
      usedIn: ['py_b10'],
    },

    // ── Control Flow ───────────────────────────────────────────────────────────

    {
      id: 'py_if',
      term: 'if',
      aliases: ['elif', 'else', 'if/else', 'conditionals', 'ternary'],
      emoji: '🔀',
      category: 'Control Flow',
      summary: 'Branch your code based on conditions.',
      description: 'Python\'s <code>if/elif/else</code> lets you run different code based on conditions. Only the first matching branch runs. The ternary operator <code>x if cond else y</code> is a one-liner version for simple cases.',
      syntax: `if score >= 90:
    return "A"
elif score >= 80:
    return "B"
else:
    return "F"

# Ternary (one-liner):
label = "pass" if score >= 60 else "fail"`,
      examples: [
        { code: 'if x > 0 and y > 0:', comment: 'both conditions must be true' },
        { code: 'if x > 0 or y > 0:', comment: 'either condition' },
        { code: 'if not active:', comment: 'negate a condition' },
        { code: 'result = "yes" if flag else "no"', comment: 'ternary' },
      ],
      tips: [
        'Python uses indentation (not braces) to define blocks — consistent indentation is mandatory',
        'You can check multiple values at once: <code>if x in (1, 2, 3):</code>',
      ],
      gotchas: [
        'Forgetting the colon <code>:</code> at the end of <code>if</code>, <code>elif</code>, <code>else</code> causes a <code>SyntaxError</code>',
        '<code>if x == True:</code> is redundant — just write <code>if x:</code>',
      ],
      usedIn: ['py_b07', 'py_006', 'py_007'],
    },

    {
      id: 'py_for',
      term: 'for',
      aliases: ['for loop', 'for loops', 'range()', 'enumerate()', 'iteration'],
      emoji: '🔄',
      category: 'Control Flow',
      summary: 'Repeat code for every item in a sequence.',
      description: 'The <code>for</code> loop iterates over any iterable — lists, strings, ranges, dicts, etc. Python\'s <code>for</code> is like "for each" in other languages. No index management needed unless you want it (use <code>enumerate()</code> for that).',
      syntax: `for item in my_list:
    print(item)

for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i, item in enumerate(my_list):  # with index
    print(i, item)`,
      examples: [
        { code: 'for n in range(5):', comment: '→ 0, 1, 2, 3, 4' },
        { code: 'for n in range(2, 8, 2):', comment: '→ 2, 4, 6  (start, stop, step)' },
        { code: 'for k, v in my_dict.items():', comment: 'dict iteration' },
        { code: 'for char in "hello":', comment: 'string iteration' },
      ],
      tips: [
        '<code>enumerate()</code> gives you both index and value: <code>for i, val in enumerate(items):</code>',
        '<code>break</code> exits the loop early; <code>continue</code> skips to the next iteration',
      ],
      gotchas: [
        'Modifying a list while iterating over it causes unpredictable behavior — iterate over a copy: <code>for x in my_list[:]:</code>',
      ],
      usedIn: ['py_006', 'py_004', 'py_003'],
    },

    // ── Functions ──────────────────────────────────────────────────────────────

    {
      id: 'py_def',
      term: 'def',
      aliases: ['function', 'functions', 'def ', 'return', 'pass', 'parameters', 'arguments'],
      emoji: '🔧',
      category: 'Functions',
      summary: 'Package reusable code into a named function.',
      description: '<code>def</code> defines a function. A function takes zero or more <em>parameters</em>, does something, and optionally <code>return</code>s a value. Without a <code>return</code>, it returns <code>None</code>. Functions are first-class in Python — you can pass them around like any other value.',
      syntax: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

result = greet("Alice")          # "Hello, Alice!"
result = greet("Bob", "Hi")     # "Hi, Bob!"`,
      examples: [
        { code: 'def add(a, b): return a + b', comment: 'one-liner' },
        { code: 'def noop(): pass', comment: 'pass = do nothing placeholder' },
        { code: 'greet(greeting="Hey", name="Sam")', comment: 'keyword args (any order)' },
      ],
      tips: [
        'Default parameter values must come after non-default ones: <code>def f(a, b=0)</code> ✓, <code>def f(a=0, b)</code> ✗',
        'Functions are objects — you can store them in variables and pass them as arguments',
      ],
      gotchas: [
        'Mutable default arguments are shared across calls: <code>def f(items=[])</code> is a famous Python footgun. Use <code>def f(items=None)</code> instead',
        '<code>return</code> without a value returns <code>None</code>. Missing <code>return</code> entirely also returns <code>None</code>',
      ],
      usedIn: ['py_005', 'py_006'],
    },

    {
      id: 'py_lambda',
      term: 'lambda',
      aliases: ['anonymous function', 'arrow function'],
      emoji: '⚡',
      category: 'Functions',
      summary: 'A tiny function you can write in one line.',
      description: '<code>lambda</code> creates an anonymous function — no <code>def</code>, no name, just the parameters and one expression. They\'re most useful as arguments to functions like <code>sorted()</code>, <code>map()</code>, and <code>filter()</code>.',
      syntax: `add = lambda a, b: a + b
add(3, 4)  # → 7

# Most common use: as a key function
sorted(people, key=lambda p: p["age"])`,
      examples: [
        { code: 'lambda x: x * 2', comment: 'double a number' },
        { code: 'lambda x: x > 0', comment: 'is positive?' },
        { code: 'sorted(words, key=lambda w: len(w))', comment: 'sort by length' },
        { code: 'sorted(items, key=lambda i: i["date"], reverse=True)', comment: 'sort by field' },
      ],
      tips: [
        'If your lambda is more than one expression, use a regular <code>def</code> — readability wins',
        'Lambdas can only contain a single expression — no statements, no assignments',
      ],
      gotchas: [
        'Lambdas in loops capture the loop variable by reference, not by value — classic bug. Use a default arg workaround: <code>lambda x, n=n: x * n</code>',
      ],
      usedIn: ['py_i07', 'py_i08'],
    },

    // ── OOP ────────────────────────────────────────────────────────────────────

    {
      id: 'py_class',
      term: 'class',
      aliases: ['classes', 'object', 'instance', 'OOP', 'object-oriented', '__init__', 'self', 'method', '__str__', '__repr__'],
      emoji: '🏗️',
      category: 'OOP',
      summary: 'A blueprint for creating objects.',
      description: '<code>class</code> defines a blueprint for objects. Each object (instance) gets its own copy of the data defined in <code>__init__</code>. Methods are just functions defined inside a class — they automatically receive the instance as their first argument, called <code>self</code> by convention.',
      syntax: `class Dog:
    def __init__(self, name):  # constructor
        self.name = name       # instance attribute

    def bark(self):
        return f"{self.name} says Woof!"

rex = Dog("Rex")    # create an instance
rex.bark()          # → "Rex says Woof!"`,
      examples: [
        { code: 'class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y', comment: 'basic class' },
        { code: 'isinstance(rex, Dog)', comment: '→ True' },
        { code: 'type(rex).__name__', comment: '→ "Dog"' },
      ],
      tips: [
        '<code>__str__</code> controls what <code>print(obj)</code> shows. <code>__repr__</code> is for debugging.',
        'Keep <code>__init__</code> simple — just assign attributes. Complex logic belongs in separate methods.',
      ],
      gotchas: [
        'Forgetting <code>self</code> as the first parameter means the method won\'t have access to the instance',
        'Class attributes (defined outside <code>__init__</code>) are shared across ALL instances — usually not what you want',
      ],
      usedIn: ['py_008', 'py_i04', 'py_a01', 'py_a05'],
    },

    {
      id: 'py_super',
      term: 'super()',
      aliases: ['inheritance', 'super', 'subclass', 'parent class', 'base class', 'extends'],
      emoji: '👑',
      category: 'OOP',
      summary: 'Call the parent class\'s methods from a child class.',
      description: '<code>super()</code> returns a proxy to the parent class, letting you call methods that your class overrides. It\'s most commonly used in <code>__init__</code> to run the parent\'s constructor before adding new attributes.',
      syntax: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # run Animal's __init__
        self.breed = breed`,
      examples: [
        { code: 'class Dog(Animal):', comment: 'Dog inherits everything from Animal' },
        { code: 'super().__init__(name)', comment: 'call parent constructor' },
        { code: 'super().speak()', comment: 'call parent method' },
      ],
      tips: [
        'Always call <code>super().__init__()</code> in child classes unless you\'re certain you don\'t need to',
        'Python supports multiple inheritance — <code>super()</code> handles method resolution order (MRO) automatically',
      ],
      gotchas: [
        'If you override <code>__init__</code> without calling <code>super().__init__()</code>, the parent class never initializes — its attributes won\'t exist',
      ],
      usedIn: ['py_i04'],
    },

    // ── Error Handling ─────────────────────────────────────────────────────────

    {
      id: 'py_try',
      term: 'try',
      aliases: ['except', 'finally', 'raise', 'try/except', 'exception', 'exceptions', 'ValueError', 'TypeError', 'KeyError', 'IndexError', 'AttributeError', 'ZeroDivisionError'],
      emoji: '🛡️',
      category: 'Exceptions',
      summary: 'Catch and handle errors gracefully.',
      description: '<code>try/except</code> lets you catch exceptions — errors that happen at runtime — and handle them instead of crashing. <code>finally</code> runs regardless of whether an exception occurred. <code>raise</code> throws an exception yourself.',
      syntax: `try:
    result = 10 / denominator
except ZeroDivisionError:
    result = None
except (ValueError, TypeError) as e:
    print(f"Error: {e}")
    result = None
finally:
    print("always runs")  # cleanup code here`,
      examples: [
        { code: 'raise ValueError("bad input")', comment: 'throw your own error' },
        { code: 'class MyError(Exception): pass', comment: 'custom exception' },
        { code: 'except Exception as e: print(e)', comment: 'catch any exception' },
      ],
      tips: [
        'Catch specific exceptions rather than bare <code>except:</code> — hiding unexpected errors makes bugs hard to find',
        'Use <code>finally</code> for cleanup (closing files, releasing resources) — it always runs',
      ],
      gotchas: [
        'A bare <code>except:</code> catches EVERYTHING including <code>KeyboardInterrupt</code> and <code>SystemExit</code> — almost always a mistake',
        'Catching and silently ignoring exceptions (<code>except: pass</code>) hides bugs. At minimum, log the error.',
      ],
      usedIn: ['py_i05'],
    },

    // ── Comprehensions ─────────────────────────────────────────────────────────

    {
      id: 'py_listcomp',
      term: 'list comprehension',
      aliases: ['comprehension', 'comprehensions', 'list comp', 'dict comprehension'],
      emoji: '🧩',
      category: 'Comprehensions',
      summary: 'Build lists (or dicts) in one elegant line.',
      description: 'Comprehensions are a concise, readable way to build collections. They replace verbose <code>for</code> loops that just build a list. List comps: <code>[expr for x in iterable if condition]</code>. Dict comps: <code>{k: v for ...}</code>. Generator expressions: <code>(expr for ...)</code>.',
      syntax: `squares  = [x**2 for x in range(10)]
evens    = [x for x in range(20) if x % 2 == 0]
upper    = [w.upper() for w in words]
lengths  = {w: len(w) for w in words}   # dict comp`,
      examples: [
        { code: '[x*2 for x in range(5)]', comment: '→ [0, 2, 4, 6, 8]' },
        { code: '[x for x in nums if x > 0]', comment: 'filter only' },
        { code: '{k.upper(): v for k,v in d.items()}', comment: 'dict comp' },
        { code: '(x**2 for x in range(1000))', comment: 'generator — lazy, memory-efficient' },
      ],
      tips: [
        'If your comprehension is getting long (>80 chars) or has nested logic, a regular <code>for</code> loop is clearer',
        'Generator expressions <code>(x for x in ...)</code> are lazy — they don\'t compute all values upfront',
      ],
      gotchas: [
        'Nested comprehensions like <code>[x for row in matrix for x in row]</code> read inside-out — the outer loop comes first',
      ],
      usedIn: ['py_007', 'py_i03'],
    },

    // ── Functions (advanced) ────────────────────────────────────────────────────

    {
      id: 'py_args_kwargs',
      term: '*args',
      aliases: ['**kwargs', 'variadic', 'args', 'kwargs', 'variable arguments', '*', '**'],
      emoji: '📦',
      category: 'Functions',
      summary: 'Accept any number of arguments — however many they throw at you.',
      description: '<code>*args</code> collects extra positional arguments into a tuple. <code>**kwargs</code> collects extra keyword arguments into a dict. The names <code>args</code> and <code>kwargs</code> are convention — the <code>*</code> and <code>**</code> are what actually matter.',
      syntax: `def func(*args, **kwargs):
    print(args)    # tuple of positional args
    print(kwargs)  # dict of keyword args

func(1, 2, 3, name="Alice", age=30)
# args: (1, 2, 3)
# kwargs: {'name': 'Alice', 'age': 30}`,
      examples: [
        { code: 'def sum_all(*nums): return sum(nums)', comment: 'any number of args' },
        { code: 'def tag(name, **attrs): ...', comment: 'any keyword args' },
        { code: 'func(*[1,2,3])', comment: 'unpack a list into positional args' },
        { code: 'func(**{"a":1,"b":2})', comment: 'unpack dict into keyword args' },
      ],
      tips: [
        'You can also use <code>*</code> to force keyword-only args: <code>def f(a, *, b):</code> — <code>b</code> must be passed as <code>f(1, b=2)</code>',
      ],
      gotchas: [
        'Order matters: <code>def f(a, *args, **kwargs)</code> — regular params first, then <code>*args</code>, then <code>**kwargs</code>',
      ],
      usedIn: ['py_i06'],
    },

    {
      id: 'py_sorted',
      term: 'sorted()',
      aliases: ['sort()', '.sort()', 'sorted', 'key=', 'reverse='],
      emoji: '🗂️',
      category: 'Functions',
      summary: 'Sort any iterable, in any order, by any field.',
      description: '<code>sorted()</code> returns a new sorted list (doesn\'t modify the original). <code>list.sort()</code> sorts in place. The <code>key=</code> argument accepts a function to transform each element before comparing — this is where lambdas shine.',
      syntax: `sorted([3,1,4,1,5])            # [1,1,3,4,5]
sorted([3,1,4], reverse=True)  # [4,3,1]
sorted(words, key=len)         # sort by length
sorted(people, key=lambda p: p["age"])`,
      examples: [
        { code: 'sorted("hello")', comment: '→ ["e","h","l","l","o"]' },
        { code: 'sorted(nums, reverse=True)', comment: 'descending' },
        { code: 'sorted(people, key=lambda p: (p["dept"], p["name"]))', comment: 'multi-field sort' },
      ],
      tips: [
        'Python\'s sort is <em>stable</em> — equal elements keep their original order',
        'You can sort by multiple fields using a tuple key: <code>key=lambda x: (x.dept, -x.salary)</code>',
      ],
      gotchas: [
        '<code>my_list.sort()</code> returns <code>None</code> — it sorts in place. Don\'t do <code>result = my_list.sort()</code>',
      ],
      usedIn: ['py_i07'],
    },

    {
      id: 'py_map_filter',
      term: 'map()',
      aliases: ['filter()', 'reduce()', 'map', 'filter'],
      emoji: '🔁',
      category: 'Functional',
      summary: 'Transform and filter iterables without writing loops.',
      description: '<code>map(func, iterable)</code> applies a function to each element and returns an iterator. <code>filter(func, iterable)</code> keeps only elements where func returns <code>True</code>. Both return lazy iterators — wrap with <code>list()</code> if you need a list.',
      syntax: `doubled = list(map(lambda x: x*2, [1,2,3]))  # [2,4,6]
evens   = list(filter(lambda x: x%2==0, range(10)))`,
      examples: [
        { code: 'list(map(str.upper, words))', comment: 'method as function' },
        { code: 'list(map(int, ["1","2","3"]))', comment: '→ [1, 2, 3]' },
        { code: 'list(filter(None, [0,1,"",2,None]))', comment: '→ [1, 2]  (remove falsy)' },
      ],
      tips: [
        'List comprehensions are often more readable than <code>map()</code>/<code>filter()</code> for simple cases',
        '<code>filter(None, items)</code> removes all falsy values — handy shortcut',
      ],
      gotchas: [
        '<code>map()</code> and <code>filter()</code> return iterators — you can only iterate them once. Wrap in <code>list()</code> to reuse',
      ],
      usedIn: ['py_i08'],
    },

    {
      id: 'py_yield',
      term: 'yield',
      aliases: ['generator', 'generators', 'yield from', 'lazy evaluation', 'iterator'],
      emoji: '🌱',
      category: 'Iterators',
      summary: 'Pause a function and hand back a value, one at a time.',
      description: '<code>yield</code> turns a function into a generator. Each time the generator\'s <code>next()</code> is called, it runs until the next <code>yield</code>, produces a value, and pauses. This is memory-efficient — you compute values on demand instead of all at once.',
      syntax: `def count_up(n):
    i = 0
    while i < n:
        yield i    # pause here, send i to caller
        i += 1

for x in count_up(3):  # 0, 1, 2
    print(x)`,
      examples: [
        { code: 'gen = count_up(5)', comment: 'create generator (nothing computed yet)' },
        { code: 'next(gen)', comment: 'run until next yield' },
        { code: 'list(gen)', comment: 'exhaust the generator into a list' },
        { code: 'from itertools import islice\nlist(islice(gen, 10))', comment: 'take first 10' },
      ],
      tips: [
        'Generator expressions <code>(x*2 for x in range(1_000_000))</code> use no more memory than a single item',
        '<code>yield from other_gen</code> delegates to another generator — useful for flattening',
      ],
      gotchas: [
        'Generators are exhausted after one pass — you can\'t restart them. Create a new one to iterate again',
      ],
      usedIn: ['py_i09'],
    },

    {
      id: 'py_decorator',
      term: '@decorator',
      aliases: ['decorator', 'decorators', '@', 'wrapper', 'functools.wraps', '@property', '@staticmethod', '@classmethod', '@lru_cache', '@dataclass'],
      emoji: '🎁',
      category: 'Functions',
      summary: 'Wrap a function to add behavior, without changing its code.',
      description: 'A decorator is a function that takes a function and returns a modified version. The <code>@</code> syntax is just shorthand for <code>func = decorator(func)</code>. Use <code>functools.wraps</code> inside your decorator to preserve the original function\'s name and docstring.',
      syntax: `import functools

def log_calls(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"done")
        return result
    return wrapper

@log_calls
def greet(name): return f"hi {name}"`,
      examples: [
        { code: '@property', comment: 'turn a method into an attribute' },
        { code: '@staticmethod', comment: 'no self parameter needed' },
        { code: '@functools.lru_cache(maxsize=None)', comment: 'automatic memoization' },
        { code: '@dataclass', comment: 'auto-generate __init__, __repr__, __eq__' },
      ],
      tips: [
        'Always use <code>@functools.wraps(func)</code> inside your wrapper to preserve metadata',
        'Decorators can be stacked — they apply from bottom to top (closest to the function first)',
      ],
      gotchas: [
        'Without <code>*args, **kwargs</code> in the wrapper, your decorator will break any function with arguments',
      ],
      usedIn: ['py_i10', 'py_a08'],
    },

    // ── Built-ins ──────────────────────────────────────────────────────────────

    {
      id: 'py_len',
      term: 'len()',
      aliases: ['len'],
      emoji: '📏',
      category: 'Built-ins',
      summary: 'Count the items in any collection.',
      description: '<code>len()</code> returns the number of items in a string, list, dict, tuple, set, or any other collection. It\'s one of the most-used functions in Python.',
      syntax: `len([1, 2, 3])      # 3
len("hello")        # 5
len({})             # 0  (empty dict)`,
      examples: [
        { code: 'len(my_list) == 0', comment: 'check if empty (but prefer "if not my_list:")' },
        { code: 'len(my_string)', comment: 'number of characters' },
        { code: 'len(my_dict)', comment: 'number of key-value pairs' },
      ],
      tips: [
        'To check if something is empty, use <code>if not my_list:</code> rather than <code>if len(my_list) == 0:</code>',
      ],
      gotchas: [],
      usedIn: ['py_003', 'py_b08'],
    },

    {
      id: 'py_range',
      term: 'range()',
      aliases: ['range'],
      emoji: '🔢',
      category: 'Built-ins',
      summary: 'Generate a sequence of integers without storing them all.',
      description: '<code>range()</code> returns a lazy sequence of integers. Common forms: <code>range(n)</code> → 0 to n-1, <code>range(start, stop)</code>, <code>range(start, stop, step)</code>. The stop value is always excluded.',
      syntax: `range(5)          # 0, 1, 2, 3, 4
range(2, 8)       # 2, 3, 4, 5, 6, 7
range(0, 10, 2)   # 0, 2, 4, 6, 8
range(10, 0, -1)  # 10, 9, 8, ..., 1  (countdown)`,
      examples: [
        { code: 'list(range(5))', comment: '→ [0, 1, 2, 3, 4]' },
        { code: 'for i in range(len(my_list)):', comment: 'index-based loop' },
        { code: 'sum(range(101))', comment: '→ 5050  (sum 1 to 100)' },
      ],
      tips: [
        'Prefer <code>for item in my_list</code> over <code>for i in range(len(my_list))</code> when you don\'t need the index',
        'Use <code>enumerate()</code> when you need both the index and the item',
      ],
      gotchas: [
        'The stop value is EXCLUDED: <code>range(1, 5)</code> is 1, 2, 3, 4 — NOT 5',
      ],
      usedIn: ['py_006', 'py_007'],
    },

    {
      id: 'py_print',
      term: 'print()',
      aliases: ['print'],
      emoji: '🖨️',
      category: 'Built-ins',
      summary: 'Show text in the terminal. Your first debugging tool.',
      description: '<code>print()</code> outputs values to stdout. It accepts multiple arguments (space-separated by default), and you can change the separator with <code>sep=</code> and the ending with <code>end=</code>.',
      syntax: `print("Hello, world!")
print(name, age, sep=", ")    # comma-separated
print("loading", end="...")   # no newline at end`,
      examples: [
        { code: 'print(1, 2, 3)', comment: '→ 1 2 3' },
        { code: 'print(1, 2, 3, sep="-")', comment: '→ 1-2-3' },
        { code: 'print(f"Name: {name}")', comment: 'f-string in print' },
      ],
      tips: [
        'For debugging, <code>print(f"{variable=}")</code> (Python 3.8+) shows both name and value: <code>variable=42</code>',
      ],
      gotchas: [
        '<code>print()</code> returns <code>None</code> — don\'t assign its return value to a variable',
      ],
      usedIn: ['py_001', 'py_002'],
    },

    {
      id: 'py_isinstance',
      term: 'isinstance()',
      aliases: ['isinstance', 'type()', 'type'],
      emoji: '🔍',
      category: 'Built-ins',
      summary: 'Check if a value is of a specific type.',
      description: '<code>isinstance(value, type)</code> returns <code>True</code> if the value is an instance of that type (or a subclass of it). Preferred over <code>type(x) == SomeType</code> because it respects inheritance.',
      syntax: `isinstance(42, int)          # True
isinstance(42, (int, float)) # True  (any of these types)
isinstance("hi", str)        # True
isinstance(True, int)        # True! (bool is a subclass of int)`,
      examples: [
        { code: 'isinstance([], list)', comment: '→ True' },
        { code: 'isinstance(3.14, (int, float))', comment: '→ True' },
        { code: 'type(x) is int', comment: 'strict check — no inheritance' },
      ],
      tips: [
        'Use a tuple as the second arg to check against multiple types at once',
      ],
      gotchas: [
        '<code>isinstance(True, int)</code> is <code>True</code> — <code>bool</code> subclasses <code>int</code>',
      ],
      usedIn: ['py_001', 'py_003'],
    },

  ], // end python

  typescript: [

    // ── Types ─────────────────────────────────────────────────────────────────

    {
      id: 'ts_string',
      term: 'string',
      aliases: ['strings', 'String', 'template literal', 'template literals', '`...`'],
      emoji: '📝',
      category: 'Types',
      summary: 'Text. Just like Python\'s str — but with template literals that go brrr.',
      description: 'TypeScript\'s <code>string</code> type holds text. Use template literals (backtick strings) for embedding expressions — they\'re more powerful than Python f-strings since they can span multiple lines and be tagged.',
      syntax: `const name: string = "Alice";
const greeting = \`Hello, \${name}!\`;   // template literal
const multi = \`line one
line two\`;`,
      examples: [
        { code: '`Hi, ${name}!`', comment: 'template literal' },
        { code: '"hello".toUpperCase()', comment: '→ "HELLO"' },
        { code: '"hello world".split(" ")', comment: '→ ["hello", "world"]' },
        { code: '"abc".includes("b")', comment: '→ true' },
        { code: '"hello".slice(1, 3)', comment: '→ "el"' },
      ],
      tips: [
        'Template literals can include any expression: <code>`${2 + 2}`</code> → <code>"4"</code>',
        'Use template literals for multi-line strings — no <code>\\n</code> needed',
      ],
      gotchas: [
        '<code>"1" + 1</code> → <code>"11"</code> (string concatenation, not addition) — coerce with <code>Number("1")</code> first',
      ],
      usedIn: ['ts_001', 'ts_002', 'ts_b08'],
    },

    {
      id: 'ts_number',
      term: 'number',
      aliases: ['numbers', 'Number', 'integer', 'float', 'NaN', 'Infinity'],
      emoji: '🔢',
      category: 'Types',
      summary: 'ALL numbers in one type. Ints, floats, the whole squad.',
      description: 'Unlike Python\'s split <code>int</code>/<code>float</code>, TypeScript has just one number type — <code>number</code>. It\'s a 64-bit IEEE 754 floating point, which means no integer overflow but the same floating-point precision quirks.',
      syntax: `let age: number = 30;
let pi: number = 3.14;
const billion = 1_000_000_000;  // underscores for readability`,
      examples: [
        { code: 'Math.floor(3.9)', comment: '→ 3' },
        { code: 'Math.round(3.5)', comment: '→ 4' },
        { code: '(3.14159).toFixed(2)', comment: '→ "3.14"  (returns string!)' },
        { code: 'Number("42")', comment: '→ 42' },
        { code: 'isNaN(NaN)', comment: '→ true' },
      ],
      tips: [
        '<code>Number.isInteger(3.0)</code> → <code>true</code>, <code>Number.isInteger(3.1)</code> → <code>false</code>',
        'Use <code>Math.floor</code>, <code>Math.ceil</code>, <code>Math.round</code> to convert to integers',
      ],
      gotchas: [
        '<code>.toFixed()</code> returns a <em>string</em>, not a number: <code>(1.005).toFixed(2)</code> → <code>"1.00"</code> due to float precision',
        '<code>0.1 + 0.2 !== 0.3</code> — floating-point precision. Use <code>Math.abs(a - b) < 0.001</code> for comparisons',
      ],
      usedIn: ['ts_001', 'ts_002'],
    },

    {
      id: 'ts_boolean',
      term: 'boolean',
      aliases: ['bool', 'Boolean', 'true', 'false'],
      emoji: '💡',
      category: 'Types',
      summary: 'true or false. Capital letters not invited.',
      description: 'TypeScript\'s <code>boolean</code> type. Unlike Python where it\'s <code>True</code>/<code>False</code> (capital), JavaScript/TypeScript uses lowercase <code>true</code>/<code>false</code>. Truthiness rules are similar but not identical.',
      syntax: `let active: boolean = true;
let done: boolean = false;`,
      examples: [
        { code: 'Boolean(0)', comment: '→ false' },
        { code: 'Boolean("")', comment: '→ false' },
        { code: 'Boolean([])', comment: '→ true!  (empty array is truthy in JS!)' },
        { code: '!!value', comment: 'double-negation converts to boolean' },
      ],
      tips: [
        'Unlike Python, empty arrays <code>[]</code> and objects <code>{}</code> are <em>truthy</em> in JavaScript',
      ],
      gotchas: [
        '<code>Boolean([])</code> is <code>true</code> in JavaScript — this trips up Python developers. Check <code>arr.length > 0</code> instead',
      ],
      usedIn: ['ts_001', 'ts_b07'],
    },

    {
      id: 'ts_any',
      term: 'any',
      aliases: ['any type'],
      emoji: '🤷',
      category: 'Types',
      summary: 'Opt out of type checking. Use sparingly — it defeats the purpose.',
      description: '<code>any</code> tells TypeScript "don\'t check this". It\'s the escape hatch when you genuinely don\'t know the type, or when migrating JS to TS. The problem: errors won\'t be caught at compile time.',
      syntax: `let val: any = "hello";
val = 42;     // fine — no type checking
val.anything; // no error — dangerous!`,
      examples: [],
      tips: [
        'Prefer <code>unknown</code> over <code>any</code> — it forces you to narrow the type before using it',
        'Use <code>as any</code> for casting only as a last resort',
      ],
      gotchas: [
        '<code>any</code> spreads — a function taking <code>any</code> will often return <code>any</code>, silently turning off type checking downstream',
      ],
      usedIn: ['ts_a02'],
    },

    {
      id: 'ts_union',
      term: 'union',
      aliases: ['union type', 'union types', '|', 'A | B', 'string | number'],
      emoji: '🔗',
      category: 'Types',
      summary: 'A value that could be one of several types.',
      description: 'A union type <code>A | B</code> means a value can be either type A or type B. TypeScript narrows the type inside conditionals — after <code>if (typeof x === "string")</code>, TypeScript knows <code>x</code> is a string in that branch.',
      syntax: `let id: string | number;
id = "abc-123";  // fine
id = 42;         // also fine

function display(val: string | number): string {
  if (typeof val === "string") return val.toUpperCase();
  return val.toFixed(2);  // TS knows it's a number here
}`,
      examples: [
        { code: 'type StringOrNum = string | number', comment: 'named union alias' },
        { code: '"a" | "b" | "c"', comment: 'literal union — only these three strings' },
        { code: 'null | string', comment: 'nullable string' },
      ],
      tips: [
        'Literal unions like <code>"north" | "south" | "east" | "west"</code> are great for finite sets of values',
        'TypeScript narrows unions in <code>if</code> branches — you don\'t need to cast',
      ],
      gotchas: [
        'Methods that exist on only ONE type in a union aren\'t accessible without narrowing first',
      ],
      usedIn: ['ts_b06', 'ts_i06', 'ts_a03'],
    },

    {
      id: 'ts_interface',
      term: 'interface',
      aliases: ['interfaces', 'interface keyword', 'type shape', 'object type'],
      emoji: '📐',
      category: 'Types',
      summary: 'Define the shape of an object — what fields it must have.',
      description: 'An <code>interface</code> declares the required structure of an object. It\'s a compile-time contract — TypeScript will error if an object doesn\'t match. Interfaces can extend other interfaces and be merged (unlike <code>type</code> aliases).',
      syntax: `interface User {
  id: number;
  name: string;
  email?: string;    // ? = optional
  readonly role: string;  // can't be changed after creation
}`,
      examples: [
        { code: 'interface A extends B { ... }', comment: 'extend another interface' },
        { code: 'implements MyInterface', comment: 'classes can implement interfaces' },
      ],
      tips: [
        'For object shapes, <code>interface</code> and <code>type</code> are mostly interchangeable. <code>interface</code> is preferred for objects, <code>type</code> for unions and aliases.',
        '<code>Partial<User></code> makes all fields optional. <code>Required<User></code> makes all fields required.',
      ],
      gotchas: [
        'Interfaces are erased at runtime — there\'s no way to check <code>obj instanceof MyInterface</code>',
      ],
      usedIn: ['ts_004', 'ts_i09'],
    },

    {
      id: 'ts_generics',
      term: '<T>',
      aliases: ['generics', 'generic', 'type parameter', '<T>', '<K>', '<V>', 'extends keyof'],
      emoji: '🧬',
      category: 'Generics',
      summary: 'Write code that works for any type, without giving up type safety.',
      description: 'Generics let you write functions, classes, and types that are parameterized by type. Instead of writing separate <code>numberArray</code> and <code>stringArray</code> functions, write one <code>Array<T></code>. TypeScript infers the type argument in most cases.',
      syntax: `function identity<T>(x: T): T { return x; }
identity(42)       // T inferred as number
identity("hello")  // T inferred as string

// With constraint:
function getLength<T extends { length: number }>(x: T): number {
  return x.length;
}`,
      examples: [
        { code: 'function first<T>(arr: T[]): T | undefined', comment: 'generic function' },
        { code: 'class Box<T> { value: T; }', comment: 'generic class' },
        { code: 'type Pair<A, B> = { first: A; second: B }', comment: 'generic type' },
        { code: '<T extends keyof U>', comment: 'constrained — T must be a key of U' },
      ],
      tips: [
        'Use descriptive names for multiple type params: <code>K</code> for key, <code>V</code> for value, <code>E</code> for element',
      ],
      gotchas: [
        '<code>T extends object</code> means T must be an object type — this excludes primitives like <code>string</code> and <code>number</code>',
      ],
      usedIn: ['ts_005', 'ts_i05', 'ts_a01', 'ts_a04', 'ts_a06'],
    },

    {
      id: 'ts_utility_types',
      term: 'Partial<T>',
      aliases: ['Readonly<T>', 'Pick<T,K>', 'Omit<T,K>', 'Record<K,V>', 'Required<T>', 'ReturnType', 'Parameters', 'Awaited', 'utility types'],
      emoji: '🛠️',
      category: 'Utility Types',
      summary: 'TypeScript\'s built-in type transformers — your toolbox for manipulating types.',
      description: 'TypeScript ships with utility types that transform existing types. They\'re all built using mapped types and conditional types, but you don\'t need to understand the internals to use them.',
      syntax: `Partial<User>       // all fields become optional
Required<User>      // all optional fields become required
Readonly<User>      // all fields become readonly
Pick<User, "id" | "name">    // only these fields
Omit<User, "password">       // all fields except these
Record<string, number>       // { [key: string]: number }`,
      examples: [
        { code: 'function update(u: Partial<User>): void', comment: 'patch — all fields optional' },
        { code: 'const frozen: Readonly<Config> = cfg', comment: 'prevent mutations' },
        { code: 'type PublicUser = Pick<User, "id"|"name">', comment: 'safe subset' },
        { code: 'type Scores = Record<string, number>', comment: 'name → score map' },
      ],
      tips: [
        'Combine utility types: <code>Partial<Pick<User, "name"|"email">></code> — optional subset',
        '<code>ReturnType<typeof myFunction></code> extracts what a function returns',
      ],
      gotchas: [],
      usedIn: ['ts_i09', 'ts_i08', 'ts_a06'],
    },

    {
      id: 'ts_async',
      term: 'async',
      aliases: ['await', 'async/await', 'Promise', 'Promise<T>', 'then', 'catch', 'asynchronous'],
      emoji: '⏳',
      category: 'Async',
      summary: 'Handle things that take time without freezing everything.',
      description: '<code>async</code> functions always return a <code>Promise</code>. <code>await</code> pauses the function until the Promise resolves — but only within an <code>async</code> function. It\'s cleaner than chaining <code>.then()</code>.',
      syntax: `async function loadUser(id: number): Promise<User> {
  const response = await fetch(\`/users/\${id}\`);
  const user = await response.json();
  return user;
}

// Must use await or .then() to get the value:
const user = await loadUser(1);`,
      examples: [
        { code: 'new Promise(resolve => setTimeout(resolve, 1000))', comment: '1 second delay' },
        { code: 'await Promise.all([fetchA(), fetchB()])', comment: 'parallel fetches' },
        { code: 'try { await thing() } catch(e) { ... }', comment: 'error handling' },
      ],
      tips: [
        '<code>Promise.all([...])</code> runs promises in parallel — much faster than awaiting them one by one',
        'Top-level <code>await</code> works in modern ES modules',
      ],
      gotchas: [
        'Forgetting <code>await</code> gives you the Promise object, not the resolved value',
        '<code>async</code> functions can\'t be directly used as event handlers without a wrapper — they silently swallow errors',
      ],
      usedIn: ['ts_006', 'ts_a06'],
    },

    {
      id: 'ts_type_guard',
      term: 'type guard',
      aliases: ['type guards', 'is keyword', 'x is string', 'typeof', 'instanceof', 'narrowing', 'type narrowing'],
      emoji: '🔬',
      category: 'Types',
      summary: 'Prove to TypeScript what type something is at runtime.',
      description: 'A type guard is a runtime check that narrows a union type. TypeScript understands <code>typeof</code>, <code>instanceof</code>, and custom <code>x is Type</code> predicates. After the check, TypeScript knows the narrowed type in that branch.',
      syntax: `// typeof guard:
if (typeof x === "string") { x.toUpperCase(); }

// Custom type guard:
function isUser(obj: any): obj is User {
  return typeof obj.name === "string" && typeof obj.age === "number";
}`,
      examples: [
        { code: 'typeof x === "number"', comment: 'built-in typeof guard' },
        { code: 'x instanceof Date', comment: 'instanceof guard' },
        { code: '"kind" in obj', comment: '"in" guard — checks property exists' },
      ],
      tips: [
        'Discriminated unions (a shared <code>kind</code> field) + switch statements are a powerful pattern for exhaustive narrowing',
      ],
      gotchas: [
        '<code>typeof null === "object"</code> — a famous JavaScript quirk. Always check <code>obj !== null && typeof obj === "object"</code>',
      ],
      usedIn: ['ts_i06', 'ts_a03'],
    },

    {
      id: 'ts_destructuring',
      term: 'destructuring',
      aliases: ['destructure', 'object destructuring', 'array destructuring', 'rest operator', 'spread operator', '...rest', '{ x }', '[a, b]'],
      emoji: '📦',
      category: 'Syntax',
      summary: 'Pull values out of objects and arrays cleanly.',
      description: 'Destructuring lets you extract values from objects and arrays into variables in one step. You can rename, set defaults, and use rest patterns — all in the same syntax.',
      syntax: `const { name, age = 0 } = user;       // with default
const { id: userId } = user;          // rename to userId
const [first, , third] = arr;         // skip second
const [head, ...tail] = arr;          // rest pattern
const { a: { b } } = nested;         // nested`,
      examples: [
        { code: 'const { x, y } = point', comment: 'extract x and y from a Point' },
        { code: 'const [a, b, ...rest] = [1,2,3,4]', comment: 'a=1, b=2, rest=[3,4]' },
        { code: 'function f({ name, age = 0 }: User) {}', comment: 'destructure in params' },
      ],
      tips: [
        'You can destructure in function parameters: <code>function f({ name, age }: User)</code>',
        'Combine with rest: <code>const { password, ...safeUser } = user</code> removes a field',
      ],
      gotchas: [
        'Renaming syntax is <code>{ originalName: newName }</code> — the colon direction feels backwards at first',
      ],
      usedIn: ['ts_i07', 'ts_i08'],
    },

    {
      id: 'ts_optional_chain',
      term: '?.',
      aliases: ['optional chaining', '?.', '??', 'nullish coalescing', '??=', 'optional method call', '?.()', '?.[key]'],
      emoji: '🔐',
      category: 'Syntax',
      summary: 'Safely access nested properties without a tower of if-checks.',
      description: '<code>?.</code> short-circuits to <code>undefined</code> if the left side is <code>null</code> or <code>undefined</code> — no more <code>TypeError: Cannot read property \'x\' of undefined</code>. Pair it with <code>??</code> for a default value.',
      syntax: `user?.address?.city         // undefined if any is null/undefined
user?.getName?.()           // optional method call
arr?.[0]                    // optional index
name ?? "Anonymous"         // ?? gives default if null/undefined
settings.theme ??= "dark"   // assign default if not set`,
      examples: [
        { code: 'user?.profile?.avatar ?? "/default.png"', comment: 'safe access with fallback' },
        { code: 'arr?.length ?? 0', comment: 'length or 0 if arr is null' },
        { code: 'config ??= {}', comment: 'initialize if null/undefined' },
      ],
      tips: [
        '<code>??</code> only considers <code>null</code> and <code>undefined</code> as "missing" — <code>0</code>, <code>""</code>, and <code>false</code> are kept as-is',
        'Unlike <code>||</code>, <code>??</code> won\'t replace falsy values — great for preserving intentional <code>false</code> and <code>0</code>',
      ],
      gotchas: [
        '<code>value || "default"</code> replaces ANY falsy value including <code>0</code> and <code>""</code>. Use <code>value ?? "default"</code> if you want to keep those',
      ],
      usedIn: ['ts_i10'],
    },

    {
      id: 'ts_enum',
      term: 'enum',
      aliases: ['enums', 'string enum', 'const enum', 'numeric enum'],
      emoji: '🏷️',
      category: 'Types',
      summary: 'Named constants that make code self-documenting.',
      description: 'Enums group related named constants. String enums are preferred for readability — their values show up in logs and debuggers as meaningful strings, not cryptic numbers.',
      syntax: `enum Direction { North = "N", South = "S", East = "E", West = "W" }
enum Status   { Active = "active", Inactive = "inactive" }

function move(dir: Direction): void {
  console.log(\`Moving \${dir}\`);   // "Moving N"
}`,
      examples: [
        { code: 'Direction.North', comment: '→ "N"' },
        { code: 'Object.values(Direction)', comment: '→ ["N", "S", "E", "W"]' },
        { code: 'const d: Direction = Direction.South', comment: 'type-safe assignment' },
      ],
      tips: [
        'Prefer string enums over numeric — the values appear in logs and make debugging much easier',
        '<code>const enum</code> is inlined at compile time — slightly faster but can\'t be iterated at runtime',
      ],
      gotchas: [
        'TypeScript numeric enums have reverse mappings — <code>MyEnum[0]</code> gives the name. String enums don\'t.',
      ],
      usedIn: ['ts_i04'],
    },

    {
      id: 'ts_mapped',
      term: 'mapped type',
      aliases: ['mapped types', '[K in keyof T]', 'keyof', 'keyof T'],
      emoji: '🗺️',
      category: 'Types',
      summary: 'Create a new type by transforming every field of an existing type.',
      description: 'Mapped types iterate over the keys of a type and transform them. This is how <code>Partial<T></code>, <code>Readonly<T></code>, and <code>Record<K,V></code> are implemented. The syntax is <code>{ [K in keyof T]: ... }</code>.',
      syntax: `type Optional<T>  = { [K in keyof T]?: T[K] };
type Readonly<T>  = { readonly [K in keyof T]: T[K] };
type Nullable<T>  = { [K in keyof T]: T[K] | null };
type Stringify<T> = { [K in keyof T]: string };`,
      examples: [
        { code: 'keyof User', comment: '→ "id" | "name" | "email"  (union of keys)' },
        { code: 'T[keyof T]', comment: '→ union of all value types' },
      ],
      tips: [
        'Add <code>readonly</code> or <code>?</code> before the value type to add or remove those modifiers',
        '<code>-?</code> removes optionality: <code>{ [K in keyof T]-?: T[K] }</code> is the same as <code>Required<T></code>',
      ],
      gotchas: [],
      usedIn: ['ts_a02'],
    },

    {
      id: 'ts_conditional',
      term: 'conditional type',
      aliases: ['conditional types', 'T extends U ? X : Y', 'infer', 'distributive'],
      emoji: '🎯',
      category: 'Types',
      summary: 'Types that make decisions based on other types.',
      description: 'Conditional types choose a type based on whether another type satisfies a constraint: <code>T extends U ? X : Y</code>. The <code>infer</code> keyword captures a type inside the condition. This powers utility types like <code>ReturnType<T></code>.',
      syntax: `type IsArray<T> = T extends any[] ? true : false;
type Flatten<T> = T extends (infer U)[] ? U : T;
type NonNullable<T> = T extends null | undefined ? never : T;

// infer — capture the return type:
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`,
      examples: [
        { code: 'type A = IsArray<string[]>', comment: '→ true' },
        { code: 'type B = IsArray<string>', comment: '→ false' },
        { code: 'type C = Flatten<number[]>', comment: '→ number' },
      ],
      tips: [
        'Conditional types distribute over unions: <code>(A | B) extends C ? X : Y</code> becomes <code>(A extends C ? X : Y) | (B extends C ? X : Y)</code>',
      ],
      gotchas: [
        '<code>infer</code> can only be used on the left side of <code>extends</code> in a conditional type',
      ],
      usedIn: ['ts_a04', 'ts_a06'],
    },

  ], // end typescript

}; // end DICTIONARY
