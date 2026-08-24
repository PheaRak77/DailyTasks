# 📘 React.js Master Course & Step-by-Step Lesson (English & ភាសាខ្មែរ)

មេរៀន និងការអនុវត្ត React.js ពីកម្រិតដំបូងដល់កម្រិតខ្ពស់ (A comprehensive step-by-step React.js master guide with definitions, practical examples, exercises, and answer solutions in English & Khmer).

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/PheaRak77/DailyTasks)
[![Open in CodeSandbox](https://img.shields.io/badge/Codesandbox-Live_Playground-blue?style=for-the-badge&logo=codesandbox)](https://githubbox.com/PheaRak77/DailyTasks)

---

## ⚡ One-Click Online Exercise Demos (មើលលទ្ធផលផ្ទាល់លើ GitHub)

Any visitor on GitHub can click the links below to test each exercise live directly in their browser without installing anything:

| # | Exercise / លំហាត់ | Topic / ប្រធានបទ | 📖 View Code | 🚀 1-Click Live Test |
|:---:|---|---|:---:|:---:|
| **Ex 1** | **Profile Card** | Components & JSX | [Read Code](#chapter-1-components--jsx-សមាសភាគ-និង-jsx) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 2** | **Product Badge** | Props & Children | [Read Code](#chapter-2-props--children-ការបញ្ជូនទិន្នន័យតាម-props) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 3** | **Todo List** | State (`useState`) | [Read Code](#chapter-3-state-management-with-usestate-ការគ្រប់គ្រង-state) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 4** | **Student Filter** | Conditional & Lists | [Read Code](#chapter-4-conditional-rendering--lists-ការបង្ហាញ-ui-តាមលក្ខខណ្ឌ-និង-lists) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 5** | **Password Validation** | Form Handling | [Read Code](#chapter-5-form-handling-ការគ្រប់គ្រង-form--user-input) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 6** | **Live Timer** | `useEffect` & Cleanup | [Read Code](#chapter-6-side-effects--api-fetching-with-useeffect--axios-ការទាញទិន្នន័យពី-api) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 7** | **Router & Pages** | React Router DOM | [Read Code](#chapter-7-react-router-dom-ការរៀបចំ-routing--navigation) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 8** | **Auth Context** | Global State Context API | [Read Code](#chapter-8-context-api-for-global-state-ការចែករំលែក-global-state) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 9** | **useLocalStorage / useAxios** | Custom Hooks | [Read Code](#chapter-9-custom-hooks-ការបង្កើត-hook-ផ្ទាល់ខ្លួន) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |
| **Ex 10** | **Performance Demo** | `useMemo` & `useCallback` | [Read Code](#chapter-10-performance-optimization-usememo-usecallback-reactmemo) | [▶️ Test Live](https://stackblitz.com/github/PheaRak77/DailyTasks?file=RouterinReact/src/components/ExercisePlayground.jsx) |

---

## 📑 តារាងមាតិកា / Table of Contents

- [Chapter 1: Components & JSX (សមាសភាគ និង JSX)](#chapter-1-components--jsx-សមាសភាគ-និង-jsx)
- [Chapter 2: Props & Children (ការបញ្ជូនទិន្នន័យតាម Props)](#chapter-2-props--children-ការបញ្ជូនទិន្នន័យតាម-props)
- [Chapter 3: State Management with `useState` (ការគ្រប់គ្រង State)](#chapter-3-state-management-with-usestate-ការគ្រប់គ្រង-state)
- [Chapter 4: Conditional Rendering & Lists (ការបង្ហាញ UI តាមលក្ខខណ្ឌ និង Lists)](#chapter-4-conditional-rendering--lists-ការបង្ហាញ-ui-តាមលក្ខខណ្ឌ-និង-lists)
- [Chapter 5: Form Handling (ការគ្រប់គ្រង Form & User Input)](#chapter-5-form-handling-ការគ្រប់គ្រង-form--user-input)
- [Chapter 6: Side Effects & API Fetching with `useEffect` + Axios (ការទាញទិន្នន័យពី API)](#chapter-6-side-effects--api-fetching-with-useeffect--axios-ការទាញទិន្នន័យពី-api)
- [Chapter 7: React Router DOM (ការរៀបចំ Routing & Navigation)](#chapter-7-react-router-dom-ការរៀបចំ-routing--navigation)
- [Chapter 8: Context API for Global State (ការចែករំលែក Global State)](#chapter-8-context-api-for-global-state-ការចែករំលែក-global-state)
- [Chapter 9: Custom Hooks with Axios (ការបង្កើត Hook ផ្ទាល់ខ្លួន)](#chapter-9-custom-hooks-ការបង្កើត-hook-ផ្ទាល់ខ្លួន)
- [Chapter 10: Performance Optimization (`useMemo`, `useCallback`, `React.memo`)](#chapter-10-performance-optimization-usememo-usecallback-reactmemo)
- [Chapter 11: Fullstack PERN Roadmap & Best Practices](#chapter-11-fullstack-pern-roadmap--best-practices)

---

## Chapter 1: Components & JSX (សមាសភាគ និង JSX)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: A **Component** is a reusable, independent piece of user interface (UI). In modern React, components are JavaScript functions that return **JSX** (JavaScript XML), allowing you to write HTML-like structure directly inside JavaScript.
- **ភាសាខ្មែរ**: **Component** គឺជាប្លុក UI ដែលអាចប្រើឡើងវិញបាន (Reusable) និងដំណើរការដោយឯករាជ្យ។ នៅក្នុង React សម័យថ្មី Component គឺជា JavaScript Function ដែល return ចេញជា **JSX** (សរសេរកូដស្រដៀង HTML នៅក្នុង JavaScript)។

#### ⚠️ ច្បាប់សំខាន់ៗរបស់ JSX / Important JSX Rules:
1. **ឈ្មោះ Component ត្រូវតែចាប់ផ្ដើមដោយអក្សរធំ (PascalCase)** ឧទាហរណ៍៖ `UserProfile`, `NavBar` (បើប្រើ `navBar` វានឹងគិតថាជា HTML tag ធម្មតា)។
2. **ត្រូវតែ return ធាតុ Root តែមួយគត់ (Single Root)**៖ អាចរុំដោយ `<div>` ឬ React Fragment (`<>...</>`)។
3. **ប្រើ `className` ជំនួស `class`** និងប្រើ **`htmlFor` ជំនួស `for`**។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
// src/components/WelcomeCard.jsx
function WelcomeCard() {
  const developerName = "Sokha";
  const role = "Fullstack Developer";

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold text-blue-600">
        សួស្តី, {developerName}! 👋
      </h2>
      <p className="text-gray-600">Role: {role}</p>
    </div>
  );
}

export default WelcomeCard;
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 1
**Task**: បង្កើត Component ឈ្មោះ `ProfileCard` ដែលបង្ហាញរូបភាព Avatar, ឈ្មោះ (Name), អ៊ីមែល (Email), និងជំនាញ (Skills)។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
// src/components/ProfileCard.jsx
function ProfileCard() {
  const user = {
    name: "Kosal Chan",
    email: "kosal@example.com",
    skill: "React & Node.js",
    avatar: "https://via.placeholder.com/100"
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50 shadow">
      <img 
        src={user.avatar} 
        alt={user.name} 
        className="w-16 h-16 rounded-full border"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
          {user.skill}
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+-------------------------------------------------------------------+
|  [ 👤 Avatar ]   Kosal Chan                                       |
|                  kosal@example.com                                |
|                  [ React & Node.js ]                              |
+-------------------------------------------------------------------+
```
</details>

---

## Chapter 2: Props & Children (ការបញ្ជូនទិន្នន័យតាម Props)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: **Props** (short for *properties*) are read-only data passed from a parent component to a child component (One-way data flow). The special `children` prop allows passing elements or components inside another component.
- **ភាសាខ្មែរ**: **Props** (Properties) គឺជាទិន្នន័យដែលបញ្ជូនពី Parent Component ទៅកាន់ Child Component (បញ្ជូនពីលើចុះក្រោម)។ Props គឺ **Read-Only (មិនអាចកែប្រែដោយ Child Component បានទេ)**។ ចំណែក `children` គឺជា prop ពិសេសសម្រាប់រុំ Component ឬ Tag ផ្សេងទៀតនៅខាងក្នុង។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
// 1. Child Component with Destructured Props
function Button({ text, variant = "primary", onClick }) {
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium ${
        isPrimary ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {text}
    </button>
  );
}

// 2. Wrapper Component using `children`
function CardContainer({ title, children }) {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h3 className="text-lg font-semibold border-b pb-2 mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

// 3. Parent Component
function App() {
  return (
    <CardContainer title="User Actions">
      <p className="mb-2">សូមជ្រើសរើស Action មួយ៖</p>
      <div className="flex gap-2">
        <Button text="Save Data" variant="primary" onClick={() => alert("Saved!")} />
        <Button text="Cancel" variant="secondary" onClick={() => alert("Cancelled!")} />
      </div>
    </CardContainer>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 2
**Task**: បង្កើត Component ឈ្មោះ `ProductBadge` ដែលទទួល Props: `title` (string), `price` (number), និង `isSpecial` (boolean)។ ប្រសិនបើ `isSpecial` ជា `true` ត្រូវបង្ហាញ Badge ពណ៌ក្រហម "Discount 20%!".

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
// src/components/ProductBadge.jsx
function ProductBadge({ title, price, isSpecial }) {
  return (
    <div className="p-4 border rounded-lg relative bg-white shadow-sm">
      {isSpecial && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          Discount 20%!
        </span>
      )}
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-green-600 font-semibold mt-1">${price}</p>
    </div>
  );
}

export default ProductBadge;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+------------------------------------+  +------------------------------------+
| Mechanical Keyboard [Discount 20%!] |  | Wireless Mouse                     |
| $79                                |  | $29                                |
+------------------------------------+  +------------------------------------+
```
</details>

---

## Chapter 3: State Management with `useState` (ការគ្រប់គ្រង State)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: **State** is a component's memory. When state updates, React automatically **re-renders** the component to display the new UI. Always treat state as immutable (do not modify state variables directly).
- **ភាសាខ្មែរ**: **State** គឺជាអង្គចងចាំផ្ទៃក្នុងរបស់ Component។ នៅពេលតម្លៃរបស់ State ផ្លាស់ប្តូរ React នឹងធ្វើការ **Re-render (គូរ UI ឡើងវិញ)** ដោយស្វ័យប្រវត្តិ។ **ដាច់ខាតកុំកែប្រែ State ដោយផ្ទាល់** ត្រូវប្រើ Setter Function ជានិច្ច (`setCount(...)`)។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
import { useState } from 'react';

function CounterApp() {
  // 1. Primitive State
  const [count, setCount] = useState(0);

  // 2. Object State (Use Spread Operator ...)
  const [person, setPerson] = useState({ name: "Dara", age: 20 });

  const increaseAge = () => {
    setPerson(prev => ({ ...prev, age: prev.age + 1 }));
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="text-xl font-bold">Count: {count}</h3>
        <button 
          onClick={() => setCount(prev => prev + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
        >
          + បង្កើន (Increment)
        </button>
        <button 
          onClick={() => setCount(prev => prev - 1)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          - បន្ថយ (Decrement)
        </button>
      </div>

      <div className="border-t pt-2">
        <p>Name: {person.name}, Age: {person.age}</p>
        <button 
          onClick={increaseAge}
          className="px-3 py-1 bg-green-500 text-white rounded mt-1"
        >
          ខួបកំណើត (Increase Age)
        </button>
      </div>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 3
**Task**: បង្កើត `TodoList` Component ដែលអនុញ្ញាតឱ្យ User បញ្ចូល Task ថ្មីចូលក្នុង Array State និងអាច Delete Task តាមរយៈប៊ូតុង Remove។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(["រៀន React", "រៀន Node.js"]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="max-w-md p-4 bg-white border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3">បញ្ជីការងារត្រូវធ្វើ (Todo List)</h2>
      
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="បញ្ចូលការងារថ្មី..."
          className="flex-grow p-2 border rounded"
        />
        <button 
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          បន្ថែម
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-gray-50 border rounded">
            <span>{todo}</span>
            <button 
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              ✕ លុប
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+-------------------------------------------------------------+
|  បញ្ជីការងារត្រូវធ្វើ (Todo List)                                |
|  [ បញ្ចូលការងារថ្មី...              ]  [ + បន្ថែម ]            |
|  ---------------------------------------------------------  |
|  • រៀន React                                    [ ✕ លុប ]   |
|  • រៀន Node.js                                  [ ✕ លុប ]   |
+-------------------------------------------------------------+
```
</details>

---

## Chapter 4: Conditional Rendering & Lists (ការបង្ហាញ UI តាមលក្ខខណ្ឌ និង Lists)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: 
  - **Conditional Rendering**: Showing different UI components based on conditions using `if/else`, Ternary operators (`condition ? <True /> : <False />`), or Logical AND (`condition && <Element />`).
  - **Lists & Keys**: Rendering arrays using `.map()`. Every rendered item MUST have a unique `key` prop so React can efficiently track DOM changes.
- **ភាសាខ្មែរ**: 
  - **Conditional Rendering**: ការកំណត់បង្ហាញ UI ទៅតាមលក្ខខណ្ឌ (ដូចជា Logged in ឬ Logout, Loading ឬ Data) ដោយប្រើ Ternary Operator (`? :`) ឬ `&&`។
  - **Lists & Keys**: ការទាញទិន្នន័យពី Array មកបង្ហាញជាតារាង ឬបញ្ជីដោយប្រើ `.map()`។ រាល់ Item ទាំងអស់ត្រូវតែមាន `key` prop ដែលជាតម្លៃ Unique (ដូចជា id) ដើម្បីជួយឱ្យ React render បានលឿន។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
function ProductStatusList() {
  const isLoggedIn = true;
  const products = [
    { id: 101, name: "MacBook Pro", inStock: true },
    { id: 102, name: "Dell XPS", inStock: false },
    { id: 103, name: "ThinkPad X1", inStock: true },
  ];

  return (
    <div className="p-4">
      {/* 1. Ternary Operator */}
      <div className="mb-4">
        {isLoggedIn ? (
          <p className="text-green-600 font-bold">✅ បានចូលគណនីរួចរាល់ (Welcome Back!)</p>
        ) : (
          <button className="px-3 py-1 bg-blue-500 text-white rounded">សូម Login</button>
        )}
      </div>

      {/* 2. List Rendering with Keys */}
      <h3 className="font-bold text-lg mb-2">បញ្ជីផលិតផល៖</h3>
      <ul className="space-y-2">
        {products.map((item) => (
          <li key={item.id} className="p-2 border rounded flex justify-between">
            <span>{item.name}</span>
            {item.inStock ? (
              <span className="text-green-500">មានក្នុងស្តុក (In Stock)</span>
            ) : (
              <span className="text-red-500">អស់ពីស្តុក (Out of Stock)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 4
**Task**: បង្កើត Component ឈ្មោះ `StudentFilter` ដែលមាន List សិស្សដែលមានពិន្ទុ (Score)។ បង្កើតប៊ូតុងមួយសម្រាប់ Switch រវាង "បង្ហាញទាំងអស់ (Show All)" និង "បង្ហាញតែសិស្សដែលប្រឡងជាប់ពិន្ទុ >= 50 (Show Passed Only)"។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
import { useState } from 'react';

function StudentFilter() {
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  const students = [
    { id: 1, name: "Vannak", score: 85 },
    { id: 2, name: "Chanthy", score: 45 },
    { id: 3, name: "Sreypov", score: 92 },
    { id: 4, name: "Bora", score: 38 },
  ];

  const filteredStudents = showPassedOnly 
    ? students.filter(s => s.score >= 50) 
    : students;

  return (
    <div className="p-4 max-w-md border rounded bg-white shadow">
      <h2 className="text-xl font-bold mb-3">បញ្ជីពិន្ទុសិស្ស</h2>
      
      <button 
        onClick={() => setShowPassedOnly(!showPassedOnly)}
        className="mb-4 px-3 py-1.5 bg-indigo-600 text-white rounded text-sm"
      >
        {showPassedOnly ? "បង្ហាញទាំងអស់ (Show All)" : "បង្ហាញតែអ្នកជាប់ (Passed Only)"}
      </button>

      <ul className="space-y-2">
        {filteredStudents.map(student => (
          <li key={student.id} className="p-2 border rounded flex justify-between items-center">
            <span>{student.name}</span>
            <span className={`font-bold ${student.score >= 50 ? 'text-green-600' : 'text-red-500'}`}>
              {student.score} ពិន្ទុ {student.score >= 50 ? '(ជាប់)' : '(ធ្លាក់)'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentFilter;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+-------------------------------------------------------------+
|  បញ្ជីពិន្ទុសិស្ស                                              |
|  [ 🔘 បង្ហាញតែអ្នកជាប់ (Passed Only) ]                           |
|  ---------------------------------------------------------  |
|  • Vannak                                    [ 85 ពិន្ទុ (ជាប់) ] |
|  • Sreypov                                   [ 92 ពិន្ទុ (ជាប់) ] |
+-------------------------------------------------------------+
```
</details>

---

## Chapter 5: Form Handling (ការគ្រប់គ្រង Form & User Input)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: In React, form inputs are typically **Controlled Components**, meaning their values are driven by React state and updated via `onChange` events. Form submission is handled with `e.preventDefault()` to stop the browser from refreshing.
- **ភាសាខ្មែរ**: នៅក្នុង React យើងគ្រប់គ្រង Form តាមរយៈ **Controlled Component** ដោយភ្ជាប់ `value={state}` ជាមួយ State និងប្រើ `onChange` ដើម្បីចាប់ទិន្នន័យពេល User វាយអក្សរ។ នៅពេល Submit Form ត្រូវប្រើ `e.preventDefault()` ដើម្បីកុំឱ្យ Browser reload ទំព័រ។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
import { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "student"
  });

  // Universal handler for all inputs using name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`ស្វាគមន៍ ${formData.username}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm space-y-3 border rounded shadow">
      <h2 className="text-xl font-bold">ចុះឈ្មោះគណនី (Register)</h2>

      <div>
        <label className="block text-sm font-medium">ឈ្មោះ (Username):</label>
        <input 
          type="text" 
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">អ៊ីមែល (Email):</label>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">តួនាទី (Role):</label>
        <select 
          name="role" 
          value={formData.role} 
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        >
          <option value="student">សិស្ស (Student)</option>
          <option value="teacher">គ្រូបង្រៀន (Teacher)</option>
          <option value="developer">Developer</option>
        </select>
      </div>

      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded font-bold">
        Submit Form
      </button>
    </form>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 5
**Task**: បង្កើត Form សម្រាប់ផ្ទៀងផ្ទាត់ Password (Password Validation)៖ ប្រសិនបើ Password តិចជាង 6 តួអក្សរ ត្រូវបង្ហាញ Error Message ពណ៌ក្រហមថា "Password ត្រូវមានយ៉ាងតិច 6 ខ្ទង់"។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
import { useState } from 'react';

function PasswordValidationForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("❌ Password ត្រូវមានយ៉ាងតិច 6 ខ្ទង់!");
      return;
    }
    setError("");
    alert("✅ Password ត្រឹមត្រូវជោគជ័យ!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm border rounded bg-white">
      <h3 className="text-lg font-bold mb-2">បញ្ចូល Password</h3>
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="បញ្ចូលពាក្យសម្ងាត់..."
        className="w-full p-2 border rounded mb-2"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button type="submit" className="w-full py-2 bg-green-600 text-white rounded font-semibold">
        បញ្ជាក់ (Verify)
      </button>
    </form>
  );
}

export default PasswordValidationForm;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+-------------------------------------------------------------+
|  បញ្ចូល Password                                             |
|  [ ••••••               ]                                   |
|  ❌ Password ត្រូវមានយ៉ាងតិច 6 ខ្ទង់!                          |
|  [      បញ្ជាក់ (Verify)       ]                             |
+-------------------------------------------------------------+
```
</details>

---

## Chapter 6: Side Effects & API Fetching with `useEffect` + Axios (ការទាញទិន្នន័យពី API)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: `useEffect` lets you synchronize a component with external systems (APIs, network requests, timers, subscriptions). **Axios** is a promise-based HTTP client that simplifies API calls (automatically transforms JSON, has better error handling, and supports request cancellation).
  - Install Axios: `npm i axios`
  - `[]` (Empty dependency array): Runs **only once** on component mount.
  - `[stateVar]`: Runs on mount AND whenever `stateVar` changes.
  - Cleanup function: Returned inside `useEffect` to cancel requests or clear timers.
- **ភាសាខ្មែរ**: `useEffect` ប្រើប្រាស់សម្រាប់ដំណើរការ **Side Effects** ដូចជាការទាញទិន្នន័យពី Backend API (Data Fetching), ការកំណត់ Timer, ឬការកែប្រែ DOM។ ការប្រើប្រាស់ **Axios** (`npm i axios`) ជួយឱ្យការហៅ API កាន់តែងាយស្រួល ព្រោះវា parse JSON ដោយស្វ័យប្រវត្តិ (Auto JSON parsing) និងគ្រប់គ្រង Error បានល្អជាង `fetch` ធម្មតា។

### 2. ឧទាហរណ៍កូដ: ទាញទិន្នន័យដោយប្រើ Axios / Code Example with Axios
```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create AbortController to cancel request if component unmounts
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Axios automatically parses JSON response into response.data
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal
        });
        setUsers(response.data);
        setError(null);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.response?.data?.message || err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // 2. Cleanup function
    return () => controller.abort();
  }, []); // Run once on mount

  if (loading) return <p className="p-4 text-blue-500 font-bold">កំពុងទាញទិន្នន័យ (Loading with Axios...)...</p>;
  if (error) return <p className="p-4 text-red-500 font-bold">កំហុស (Error): {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">បញ្ជីឈ្មោះ Users ពី API (Axios)</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-3 border rounded shadow-sm bg-white">
            <h4 className="font-bold">{user.name}</h4>
            <p className="text-sm text-gray-500">Email: {user.email} | City: {user.address?.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 6
**Task**: បង្កើត Component ឈ្មោះ `LiveTimer` ដែលប្រើ `useEffect` ដើម្បីបង្ហាញនាឡិការាប់វិនាទី (Timer) កើនឡើងរាល់ 1 វិនាទីម្តង (`setInterval`) ហើយត្រូវមាន Cleanup function (`clearInterval`) នៅពេល Component unmount ដើម្បីកុំឱ្យ memory leak។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ និង UI Result / View Answer Solution & UI Output</b></summary>

#### 💻 កូដដំណោះស្រាយ (Source Code):
```jsx
import { useState, useEffect } from 'react';

function LiveTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Start interval timer
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function: runs when component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Timer cleared!");
    };
  }, []); // Run once

  return (
    <div className="p-4 border rounded bg-slate-900 text-white inline-block">
      <h3 className="text-lg font-bold">⏱️ នាឡិការាប់វិនាទី (Timer)</h3>
      <p className="text-3xl font-mono text-green-400 mt-2">{seconds} វិនាទី</p>
    </div>
  );
}

export default LiveTimer;
```

#### 🖥️ លទ្ធផល UI លើអេក្រង់ (Rendered UI Preview):
```text
+-------------------------------------------------------------+
|  ⏱️ នាឡិការាប់វិនាទី (Timer)                                  |
|  >> 12 វិនាទី                                               |
+-------------------------------------------------------------+
```
</details>

---

## Chapter 7: React Router DOM (ការរៀបចំ Routing & Navigation)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: **React Router** enables client-side routing in Single Page Applications (SPAs). It changes the active view and URL without reloading the browser.
  - `<BrowserRouter>`: Root provider.
  - `<Routes>` & `<Route>`: Route configuration.
  - `<Outlet />`: Layout placeholder for child routes.
  - `useParams()`: Extracts dynamic URL params (`/product/:id`).
  - `useNavigate()`: Programmatic redirect.
  - `<NavLink>`: Link with active styling.
- **ភាសាខ្មែរ**: **React Router** ប្រើសម្រាប់ប្តូរទំព័រនៅក្នុង React SPA ដោយមិនបាច់ Reload Browser ឡើងវិញឡើយ។
  - `<BrowserRouter>`៖ រុំ App ទាំងមូល។
  - `<Routes>` និង `<Route>`៖ កំណត់ផ្លូវ (Path) និង Component ដែលត្រូវបង្ហាញ។
  - `<Outlet />`៖ កន្លែងសម្រាប់បង្ហាញ Child Component នៅក្នុង Layout (Header/Footer)។
  - `useParams()`៖ សម្រាប់ទាញយក ID ពី URL (ឧ. `/product/:id`)។
  - `useNavigate()`៖ សម្រាប់ Redirect ទំព័រតាមកូដ (ឧ. Login ជោគជ័យហើយរត់ទៅកាន់ Dashboard)។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
// 1. Layout Component (src/layouts/MainLayout.jsx)
import { Outlet, NavLink } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex gap-4 p-4 bg-slate-800 text-white">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-blue-400 font-bold underline" : "text-gray-300"}
        >
          ទំព័រដើម (Home)
        </NavLink>
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? "text-blue-400 font-bold underline" : "text-gray-300"}
        >
          ផលិតផល (Products)
        </NavLink>
      </nav>

      <main className="flex-grow p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-100 text-center text-sm">
        © 2026 PERN Stack Course. រក្សាសិទ្ធិគ្រប់យ៉ាង។
      </footer>
    </div>
  );
}

// 2. Dynamic Details Component (src/pages/ProductDetail.jsx)
import { useParams, useNavigate } from 'react-router-dom';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold">ព័ត៌មានលម្អិតផលិតផល ID: {id}</h2>
      <p className="mt-2 text-gray-600">អ្នកកំពុងមើលផលិតផលលេខកូដ #{id}</p>
      <button 
        onClick={() => navigate("/products")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        ← ត្រឡប់ក្រោយ (Back to Products)
      </button>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 7
**Task**: រៀបចំ Router នៅក្នុង `App.jsx` ដែលមាន MainLayout រួមមាន Route `/`, `/products`, `/products/:id`, និង Catch-all `path="*"` សម្រាប់បង្ហាញទំព័រ 404 Not Found។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ / View Answer Solution</b></summary>

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ProductDetail } from './pages/ProductDetail';

function Home() { return <h1 className="text-2xl font-bold">សូមស្វាគមន៍មកកាន់ទំព័រដើម!</h1>; }
function ProductList() { return <h1 className="text-2xl font-bold">បញ្ជីផលិតផលទាំងអស់</h1>; }
function NotFound() { return <h1 className="text-2xl font-bold text-red-500">404 - រកមិនឃើញទំព័រនេះទេ!</h1>; }

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```
</details>

---

## Chapter 8: Context API for Global State (ការចែករំលែក Global State)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: **Context API** solves the problem of *Prop Drilling* (passing props through 5-10 component levels). It allows you to share global data (like Authenticated User, Theme, Cart items) directly with any component in the component tree.
  1. `createContext()`: Creates the Context.
  2. `<Context.Provider value={...}>`: Supplies the data.
  3. `useContext(Context)`: Consumes the data in any child component.
- **ភាសាខ្មែរ**: **Context API** ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហា **Prop Drilling** (ការបាញ់ Props កាត់តាម Component ជាច្រើនជាន់)។ Context អនុញ្ញាតឱ្យយើងចែករំលែកទិន្នន័យ Global (ដូចជា User Login, Dark/Light Theme, Cart កន្ត្រកទំនិញ) ទៅកាន់គ្រប់ Component ទាំងអស់ដោយផ្ទាល់។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
// 1. Create Theme Context (src/context/ThemeContext.jsx)
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume context easily
export const useTheme = () => useContext(ThemeContext);

// 2. Consume in any Component
export function ThemeToggleButton() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <p>របៀបបច្ចុប្បន្ន៖ <b>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</b></p>
      <button 
        onClick={toggleTheme}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded font-medium"
      >
        ប្តូរ Theme (Toggle)
      </button>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 8
**Task**: បង្កើត `AuthContext` ដែលផ្ទុក State `user` (`null` ឬ `{ username: "Dara" }`) និង Functions `login(name)` និង `logout()`។ បង្កើត Component មួយដើម្បីសាកល្បង Login និង Logout។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ / View Answer Solution</b></summary>

```jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Usage Component
export function AuthStatus() {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-4 border rounded bg-slate-50 max-w-sm">
      {user ? (
        <div>
          <p className="text-green-600 font-bold">ស្វាគមន៍, {user.username}! 🎉</p>
          <button 
            onClick={logout}
            className="mt-2 px-3 py-1 bg-red-500 text-white rounded text-sm"
          >
            ចាកចេញ (Logout)
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-600">អ្នកមិនទាន់បាន Login ទេ</p>
          <button 
            onClick={() => login("Sophea")}
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm"
          >
            ចូលប្រើជា Sophea (Login)
          </button>
        </div>
      )}
    </div>
  );
}
```
</details>

---

## Chapter 9: Custom Hooks (ការបង្កើត Hook ផ្ទាល់ខ្លួន)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**: A **Custom Hook** is a JavaScript function whose name starts with `use` (e.g., `useAxios`, `useLocalStorage`) and that can call other React hooks. Custom hooks allow you to extract and reuse stateful logic across multiple components without duplicating code.
- **ភាសាខ្មែរ**: **Custom Hook** គឺជា JavaScript Function ដែលចាប់ផ្ដើមឈ្មោះដោយពាក្យ `use` (ដូចជា `useAxios`, `useLocalStorage`) និងអាចហៅ React Hooks ផ្សេងៗទៀតបាន។ Custom Hook ជួយយើងទាញយក Logic ស្មុគស្មាញយកមកប្រើឡើងវិញ (Reusable Logic) ដោយមិនបាច់សរសេរកូដដដែលៗ។

### 2. ឧទាហរណ៍កូដ: `useAxios` Hook / Code Example with Axios
```jsx
// src/hooks/useAxios.js
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export function useAxios(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (signal) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(url, { signal });
      setData(response.data);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(err.response?.data?.message || err.message || "Request failed");
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal);

    return () => controller.abort();
  }, [fetchData]);

  // Provide refetch function for manual re-fetching
  const refetch = () => {
    const controller = new AbortController();
    fetchData(controller.signal);
  };

  return { data, loading, error, refetch };
}
```

#### How to use `useAxios` in components (របៀបប្រើក្នុង Component):
```jsx
import { useAxios } from '../hooks/useAxios';

function PostsPage() {
  const { data: posts, loading, error, refetch } = useAxios('https://jsonplaceholder.typicode.com/posts?_limit=5');

  if (loading) return <p className="p-4 text-blue-500 font-bold">កំពុងទាញទិន្នន័យ (Loading via Axios)...</p>;
  if (error) return <p className="p-4 text-red-500 font-bold">កំហុស (Error): {error}</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">បញ្ជីអត្ថបទ (Posts with Axios)</h2>
        <button 
          onClick={refetch}
          className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="space-y-2">
        {posts && posts.map(p => (
          <div key={p.id} className="p-3 border rounded bg-white shadow-sm">
            <h4 className="font-semibold text-gray-800">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

### 3. លំហាត់អនុវត្តន៍ / Exercise 9
**Task**: បង្កើត Custom Hook ឈ្មោះ `useLocalStorage(key, initialValue)` ដែលរក្សាទុក State ទៅក្នុង `localStorage` របស់ Browser ដោយស្វ័យប្រវត្តិ។

<details>
<summary><b>🔍 ចុចមើលដំណោះស្រាយ / View Answer Solution</b></summary>

```jsx
// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}
```
</details>

---

## Chapter 10: Performance Optimization (`useMemo`, `useCallback`, `React.memo`)

### 1. និយមន័យ និងទ្រឹស្តី / Definition & Concept
- **English**:
  - `React.memo`: Prevents a child component from re-rendering if its props have not changed.
  - `useMemo`: Caches the **result of an expensive calculation** between renders.
  - `useCallback`: Caches a **function definition** between renders so child components won't re-render unnecessarily.
- **ភាសាខ្មែរ**:
  - `React.memo`: ការពារកុំឱ្យ Child Component ធ្វើការ Re-render ប្រសិនបើ Props របស់វាមិនមានការផ្លាស់ប្តូរ។
  - `useMemo`: ចងចាំ (Cache) **លទ្ធផលនៃការគណនាស្មុគស្មាញ (Expensive Calculation)** ដើម្បីកុំឱ្យគណនាឡើងវិញរាល់ពេល Render។
  - `useCallback`: ចងចាំ (Cache) **Function Definition** ដើម្បីកុំឱ្យបង្កើត Function ថ្មីរាល់ពេល Render។

### 2. ឧទាហរណ៍កូដ / Code Example
```jsx
import { useState, useMemo, useCallback, memo } from 'react';

// 1. Memoized Child Component
const ChildButton = memo(({ onClick, label }) => {
  console.log(`Rendered ChildButton: ${label}`);
  return (
    <button onClick={onClick} className="px-3 py-1 bg-gray-700 text-white rounded">
      {label}
    </button>
  );
});

function OptimizationDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 2. useMemo: Caches expensive calculation
  const expensiveResult = useMemo(() => {
    console.log("កំពុងគណនាទិន្នន័យធំ (Running expensive calculation)...");
    let total = 0;
    for (let i = 0; i < 10000000; i++) {
      total += i;
    }
    return total;
  }, []); // Run once

  // 3. useCallback: Caches function reference
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="p-4 space-y-3 border rounded bg-white">
      <h3 className="font-bold text-lg">Performance Demo</h3>
      <p>Expensive Result: <b>{expensiveResult}</b></p>
      <p>Count: <b>{count}</b></p>
      
      <button 
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded mr-2"
      >
        + Add Count
      </button>

      <ChildButton onClick={handleReset} label="Reset Count" />

      <div>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="វាយអក្សរតេស្ត re-render..."
          className="p-2 border rounded w-full mt-2"
        />
      </div>
    </div>
  );
}
```

---

## Chapter 11: Fullstack PERN Roadmap & Best Practices

```
+-------------------------------------------------------------------------+
|                           PERN FULLSTACK                                |
|                                                                         |
|  [ PostgreSQL ]   <--->   [ Express.js / Node ]   <--->   [ React (Vite) ]  |
|    (Database)                (REST API Server)             (Frontend UI)  |
+-------------------------------------------------------------------------+
```

### Roadmap to Fullstack PERN Mastery:
1. **Frontend (React + Vite + Tailwind)**:
   - Components, State, Hooks (`useState`, `useEffect`, `useContext`, `useCallback`).
   - React Router for client navigation.
   - Axios / Fetch for API communication.
2. **Backend (Node.js + Express.js)**:
   - RESTful API endpoints (`GET`, `POST`, `PUT`, `DELETE`).
   - Middleware (CORS, Express JSON body-parser).
   - JWT Authentication & bcrypt password encryption.
3. **Database (PostgreSQL)**:
   - Tables, Primary Keys, Foreign Keys, Relations (`1-to-Many`, `Many-to-Many`).
   - Using PostgreSQL client library (`pg`) or Prisma ORM.

---

## ⚡ Daily Command Line Summary

| Command | បរិយាយ / Description |
|---|---|
| `npm create vite@latest my-app -- --template react` | បង្កើត React App ថ្មីជាមួយ Vite |
| `npm i react-router-dom` | ដំឡើង React Router សម្រាប់ប្តូរទំព័រ |
| `npm i tailwindcss @tailwindcss/vite` | ដំឡើង Tailwind CSS v4 |
| `npm i bootstrap` | ដំឡើង Bootstrap 5 |
| `npm i axios` | ដំឡើង Axios សម្រាប់ហៅ API |
| `npm run dev` | បើក Development Server |
| `npm run build` | Build គម្រោងសម្រាប់ Deploy ទៅ Production |
