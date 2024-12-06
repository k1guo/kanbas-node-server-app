// import Database from "../Database/index.js";
import model from "./model.js";


// 老师的几个
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
 }
 export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
 }



 export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
 }
 export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
 }
 


export function deleteEnrollment(enrollmentId) {
  // const { enrollments } = Database;
  // Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
  return model.deleteOne({ _id: enrollmentId });
  
}

 


export function createEnrollment(enrollment) {
  // const newEnroll = { ...enrollment, _id: Date.now().toString() ,user:enrollment.user, course:enrollment.user};
  // Database.enrollments = [...Database.enrollments, enrollment];

  delete enrollment._id
  return model.create(enrollment);

}

export function updateEnrollment(moduleId, moduleUpdates) {
  // const { enrollments } = Database;
  // const enrollment = enrollments.find((module) => module._id === moduleId);
  // Object.assign(module, moduleUpdates);
  // return module;
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}


export async function findCoursesForEnrolledUser(userId) {
  // const { courses, enrollments } = Database;

 
  // const userEnrollments = enrollments.filter((enrollment) => enrollment.user === userId);


  // const enrolledCourses = courses.filter((course) =>
  //   userEnrollments.some((enrollment) => enrollment.course === course._id)
  // );
  // console.log(enrolledCourses,"enrolled courses");

  // console.log(`User ${userId} is enrolled in the following courses:`);
  // enrolledCourses.forEach((course) => {
  //   console.log(`- ${course.name} (ID: ${course._id})`);
  // });

  // return enrolledCourses;

  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export function findAllEnrollments() {
  // return Database.enrollments;

  return model.find();
}
