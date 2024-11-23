import Database from "../Database/index.js";

export function deleteEnrollment(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
 }

 
export function enrollUserInCourse(userId, courseId) {
  // console.log(userId,courseId,"userId,courseId");
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}


// export function enrollCourse(enrollment) {
//   const newAssignment = { ...assignment, _id: Date.now().toString() };
//   Database.assignments = [...Database.assignments, newAssignment];
//   return newAssignment;
// }

export function createEnrollment(enrollment) {
  // const newEnroll = { ...enrollment, _id: Date.now().toString() ,user:enrollment.user, course:enrollment.user};
  Database.enrollments = [...Database.enrollments, enrollment];
}

export function updateEnrollmnt(moduleId, moduleUpdates) {
  const { enrollments } = Database;
  const enrollment = enrollments.find((module) => module._id === moduleId);
  Object.assign(module, moduleUpdates);
  return module;
}


// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;

 
//   const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);


//   const enrolledCourses = courses.filter((course) =>
//     userEnrollments.some((enrollment) => enrollment.course === course._id)
//   );
//   console.log(enrolledCourses,"enrolled courses");

//   console.log(`User ${userId} is enrolled in the following courses:`);
//   enrolledCourses.forEach((course) => {
//     console.log(`- ${course.name} (ID: ${course._id})`);
//   });
// // console.log(userId);

//   return enrolledCourses;
// }

export function findAllEnrollments() {
  return Database.enrollments;
}


