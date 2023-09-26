notes and stuff about the models and backend

//! teacher makes account, class --> generates classroom key for student sign in
    //! student makes class acct with key 
    //! student selects their school
    //! student can ask to join a class or teachers can add student to their class

---

// api ideas
// send status message with dashboard info to inform student of upcoming assignments, deadlines, and to support the student in their learning

// when creating users with a teacher account, create a parent/student identifier key to link the parent to the student

// generate classroom key (random words) for teachers to share with students to set up their account (with auto generated username and password)

// student will use the generated key to "subscribe" to the teacher's classroom

// student will select school and grade on signup
// teachers will select school on signup
// teacher will create classroom and generate classroom key
// teacher can invite based on students available in databse or students can join with key
//    ??? potential mass email key to students/guardians?
// teacher will input student names to build a "roster" for the given class
//   - roster information will include student name and backref if the student connects to the teacher's classroom


when making new user/signing in etc, need to include a role in the request
    `const newTeacher = new Teacher({
  name: req.body.name,
  age: req.body.age,
  // ... other teacher-specific properties
  role: 'teacher', // Assign the role 'teacher' to this user
});`