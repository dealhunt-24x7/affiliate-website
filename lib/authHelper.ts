export interface User {
  id?: string;
  name: string;
  email?: string;
}

// Mock login check
export function validateCredentials(email: string, password: string): User | null {
  if (email === "test@demo.com" && password === "123456") {
    return { id: "1", name: "Demo User", email };
  }
  return null;
}

// Mock signup (just stores to localStorage)
export function saveUser(user: User) {
  localStorage.setItem("dealhuntUser", JSON.stringify(user));
}

// Get user from localStorage
export function getUser(): User | null {
  const stored = localStorage.getItem("dealhuntUser");
  if (!stored) return null;
  return JSON.parse(stored);
}

// Logout
export function logout() {
  localStorage.removeItem("dealhuntUser");
}
