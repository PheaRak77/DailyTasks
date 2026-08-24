import React, { useState, useEffect, useMemo, useCallback, memo, createContext, useContext } from 'react';
import axios from 'axios';

// ==========================================
// EXERCISE 1: Profile Card (Component & JSX)
// ==========================================
function Ex1_ProfileCard() {
  const user = {
    name: "Kosal Chan",
    email: "kosal@example.com",
    skill: "React & Node.js",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
  };

  return (
    <div className="card shadow-sm p-3" style={{ maxWidth: "380px" }}>
      <div className="d-flex align-items-center gap-3">
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="rounded-circle border"
          style={{ width: "64px", height: "64px", objectFit: "cover" }}
        />
        <div>
          <h5 className="mb-0 fw-bold">{user.name}</h5>
          <small className="text-muted">{user.email}</small>
          <div>
            <span className="badge bg-primary mt-1">{user.skill}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// EXERCISE 2: Product Badge (Props)
// ==========================================
function ProductBadge({ title, price, isSpecial }) {
  return (
    <div className="card shadow-sm p-3 position-relative" style={{ minWidth: "220px" }}>
      {isSpecial && (
        <span className="position-absolute top-0 end-0 badge bg-danger m-2">
          Discount 20%! 🔥
        </span>
      )}
      <h6 className="fw-bold mb-1">{title}</h6>
      <p className="text-success fw-bold fs-5 mb-0">${price}</p>
    </div>
  );
}

function Ex2_ProductBadgeDemo() {
  return (
    <div className="d-flex gap-3 flex-wrap">
      <ProductBadge title="Mechanical Keyboard" price={79} isSpecial={true} />
      <ProductBadge title="Wireless Mouse" price={29} isSpecial={false} />
    </div>
  );
}

// ==========================================
// EXERCISE 3: Todo List (useState with Array)
// ==========================================
function Ex3_TodoList() {
  const [todos, setTodos] = useState(["រៀន React Router", "រៀន State Management", "អនុវត្ត Form Handling"]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className="card shadow-sm p-3" style={{ maxWidth: "450px" }}>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control"
          placeholder="បញ្ចូល Task ថ្មី..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          + បន្ថែម
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo}</span>
            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(idx)}>
              ✕ លុប
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==========================================
// EXERCISE 4: Student Filter (Conditional & Lists)
// ==========================================
function Ex4_StudentFilter() {
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  const students = [
    { id: 1, name: "Vannak", score: 85 },
    { id: 2, name: "Chanthy", score: 45 },
    { id: 3, name: "Sreypov", score: 92 },
    { id: 4, name: "Bora", score: 38 },
  ];

  const filtered = showPassedOnly ? students.filter(s => s.score >= 50) : students;

  return (
    <div className="card shadow-sm p-3" style={{ maxWidth: "450px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0">បញ្ជីពិន្ទុសិស្ស</h6>
        <button 
          className={`btn btn-sm ${showPassedOnly ? 'btn-success' : 'btn-outline-secondary'}`}
          onClick={() => setShowPassedOnly(!showPassedOnly)}
        >
          {showPassedOnly ? "✓ កំពុងបង្ហាញតែអ្នកជាប់" : "បង្ហាញទាំងអស់"}
        </button>
      </div>

      <ul className="list-group">
        {filtered.map(s => (
          <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{s.name}</span>
            <span className={`badge ${s.score >= 50 ? 'bg-success' : 'bg-danger'}`}>
              {s.score} ពិន្ទុ {s.score >= 50 ? '(ជាប់)' : '(ធ្លាក់)'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==========================================
// EXERCISE 5: Form Validation
// ==========================================
function Ex5_PasswordValidation() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("❌ Password ត្រូវមានយ៉ាងតិច 6 ខ្ទង់!");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleCheck} className="card shadow-sm p-3" style={{ maxWidth: "400px" }}>
      <h6 className="fw-bold mb-2">តេស្ត Password Validation</h6>
      <div className="mb-2">
        <input 
          type="password"
          className={`form-control ${error ? 'is-invalid' : success ? 'is-valid' : ''}`}
          placeholder="បញ្ចូល Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
            setSuccess(false);
          }}
        />
        {error && <div className="invalid-feedback">{error}</div>}
        {success && <div className="valid-feedback">✅ Password ត្រឹមត្រូវជោគជ័យ!</div>}
      </div>
      <button type="submit" className="btn btn-primary w-100">
        ផ្ទៀងផ្ទាត់ (Validate)
      </button>
    </form>
  );
}

// ==========================================
// EXERCISE 6: Live Timer (useEffect & Cleanup)
// ==========================================
function Ex6_LiveTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <div className="card shadow-sm p-3 bg-dark text-white text-center" style={{ maxWidth: "300px" }}>
      <h6 className="text-secondary">⏱️ នាឡិការាប់វិនាទី (Live Timer)</h6>
      <h2 className="display-5 font-monospace text-warning my-2">{seconds}s</h2>
      <div className="d-flex gap-2 justify-content-center">
        <button 
          className={`btn btn-sm ${isActive ? 'btn-danger' : 'btn-success'}`}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? 'Pause' : 'Resume'}
        </button>
        <button className="btn btn-sm btn-outline-light" onClick={() => setSeconds(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

// ==========================================
// EXERCISE 8: Auth Context
// ==========================================
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthStatusBox() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className="card shadow-sm p-3" style={{ maxWidth: "380px" }}>
      {user ? (
        <div>
          <p className="text-success fw-bold mb-2">🎉 ស្វាគមន៍, {user.username} (Logged In)!</p>
          <button className="btn btn-outline-danger btn-sm" onClick={logout}>
            ចាកចេញ (Logout)
          </button>
        </div>
      ) : (
        <div>
          <p className="text-muted mb-2">អ្នកមិនទាន់បាន Login ទេ</p>
          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-sm" onClick={() => login("Sophea Chan")}>
              Login as Sophea
            </button>
            <button className="btn btn-outline-primary btn-sm" onClick={() => login("Dara Kim")}>
              Login as Dara
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// EXERCISE 10: Performance (useMemo / useCallback)
// ==========================================
const ChildButton = memo(({ onClick, label }) => {
  return (
    <button onClick={onClick} className="btn btn-outline-secondary btn-sm">
      {label}
    </button>
  );
});

function Ex10_Performance() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const heavyCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 5000000; i++) sum += i;
    return sum;
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="card shadow-sm p-3" style={{ maxWidth: "450px" }}>
      <p className="mb-1 text-muted"><small>Memoized Calculation: {heavyCalculation}</small></p>
      <h5 className="fw-bold">Count: {count}</h5>
      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary btn-sm" onClick={() => setCount(c => c + 1)}>
          + Add Count
        </button>
        <ChildButton onClick={handleReset} label="Reset (useCallback + memo)" />
      </div>
      <input 
        type="text" 
        className="form-control form-control-sm"
        placeholder="Type here (won't trigger heavy calc re-run)..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

// ==========================================
// MAIN PLAYGROUND CONTAINER WITH TABS
// ==========================================
export default function ExercisePlayground() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Ch1: Profile Card", component: <Ex1_ProfileCard /> },
    { id: 2, title: "Ch2: Product Badge", component: <Ex2_ProductBadgeDemo /> },
    { id: 3, title: "Ch3: Todo List", component: <Ex3_TodoList /> },
    { id: 4, title: "Ch4: Student Filter", component: <Ex4_StudentFilter /> },
    { id: 5, title: "Ch5: Form Validation", component: <Ex5_PasswordValidation /> },
    { id: 6, title: "Ch6: Live Timer", component: <Ex6_LiveTimer /> },
    { id: 8, title: "Ch8: Auth Context", component: <AuthProvider><AuthStatusBox /></AuthProvider> },
    { id: 10, title: "Ch10: Performance", component: <Ex10_Performance /> },
  ];

  return (
    <div className="container py-4">
      <div className="p-4 bg-light rounded-3 mb-4 shadow-sm border">
        <h2 className="fw-bold text-primary">🧪 Interactive Exercise Playground</h2>
        <p className="text-muted mb-0">
          តេស្តមើលលទ្ធផល UI និងសាកល្បង Interaction នៃលំហាត់អនុវត្តន៍នីមួយៗ (Test live exercise UI results interactively).
        </p>
      </div>

      {/* Tabs list */}
      <ul className="nav nav-pills gap-2 mb-4">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button 
              className={`nav-link ${activeTab === tab.id ? 'active' : 'btn-outline-dark'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Active Component Display */}
      <div className="card p-4 shadow-sm border">
        <h5 className="border-bottom pb-2 mb-3 text-secondary">
          🖥️ Live Component Output: <b>{tabs.find(t => t.id === activeTab)?.title}</b>
        </h5>
        <div className="d-flex justify-content-center py-3">
          {tabs.find(t => t.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
}
