import { createContext, useContext, useReducer } from "react";

// Initial State
const initialState = {
  user: null,
};

// Initialize authentication state from localStorage
const initializer = (initial) => {
  try {
    const storedUser = localStorage.getItem("auth_user");
    const storedToken = localStorage.getItem("auth_token");

    if (storedUser && storedToken) {
      return {
        user: JSON.parse(storedUser),
      };
    }
  } catch (error) {
    console.error("Failed to restore authentication session:", error);
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_token");
  }

  return initial;
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState,
    initializer
  );

  const isAuthenticated = !!state.user;
  const isAdmin = state.user?.role === "admin";

  // Login
  const login = (token, userData) => {
    try {
      localStorage.setItem("auth_token", token);
      localStorage.setItem("auth_user", JSON.stringify(userData));

      dispatch({
        type: "LOGIN",
        payload: userData,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Register
  const register = (token, userData) => {
    try {
      localStorage.setItem("auth_token", token);
      localStorage.setItem("auth_user", JSON.stringify(userData));

      dispatch({
        type: "REGISTER",
        payload: userData,
      });
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");

    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated,
        isAdmin,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "useAuth must be used within an AuthProvider."
    );
  }

  return context;
}