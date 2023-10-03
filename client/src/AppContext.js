import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [student, setStudent] = useState();
  const [teacher, setTeacher] = useState();
  const navigate = useNavigate();

  // Teacher
  // useEffect(() => {
  //   fetch("/api/v1/teacher/authorized-teacher")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         console.log("Unexpected response:", response);
  //         setTeacher(null);
  //         throw new Error("Authorization failed");
  //       }
  //     })
  //     .then((data) => {
  //       setTeacher(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const createTeacher = (values) => {
    return fetch("/api/v1/teacher/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 409) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sign up failed");
        }
      })
      .then((data) => {
        setTeacher(data);
        navigate.push("/"); // Redirect to the login page after successful signup
      });
  };

  const loginTeacher = (email, password) => {
    fetch("/api/v1/teacher/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Invalid login");
        } else if (response.ok) {
          return response.json();
        } else {
          setTeacher(null);
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log(data);

        setTeacher(data.user);
        navigate.push("/teacher-dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const logoutTeacher = () => {
    fetch("/api/v1/teacher/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setTeacher(null);
        } else {
          throw new Error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateTeacher = (updatedTeacher) => {
    fetch("/api/v1/teacher/:teacherId/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTeacher),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success case if necessary
          console.log("Teacher information updated successfully");
        } else {
          throw new Error("Failed to update teacher");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //Student
  // useEffect(() => {
  //   fetch("/authorized-student")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         console.log("Unexpected response:", response);
  //         setStudent(null);
  //         throw new Error("Authorization failed");
  //       }
  //     })
  //     .then((data) => {
  //       setStudent(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const createStudent = (values) => {
    return fetch("/register-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 409) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sign up failed");
        }
      })
      .then((data) => {
        setStudent(data);
        navigate.push("/"); // Redirect to the home page after successful signup
      });
  };

  const loginStudent = (email, password) => {
    fetch("/login-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Invalid login");
        } else if (response.ok) {
          return response.json();
        } else {
          setStudent(null);
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log(data);

        setStudent(data.user);
        navigate.push("/student-dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const logoutStudent = () => {
    fetch("/logout-student", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStudent(null);
        } else {
          throw new Error("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateStudent = (updatedStudent) => {
    fetch("/update-teacher", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedStudent),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success case if necessary
          console.log("Teacher information updated successfully");
        } else {
          throw new Error("Failed to update teacher");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        teacher,
        createTeacher,
        loginTeacher,
        logoutTeacher,
        updateTeacher,
        student,
        createStudent,
        loginStudent,
        logoutStudent,
        updateStudent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
