// import Database from "../Database/index.js";
import model from "./model.js";


// 老师的几个
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}


// export const findUsersForCourse = async (courseId) => {
//   try {
//     // 查询所有与指定课程相关的用户
//     return await enrollmentModel.find({ course: courseId }).populate("user").exec();
//   } catch (error) {
//     console.error("Error in findUsersForCourse:", error);
//     throw error;
//   }
// };

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
  return model.deleteOne({ _id: enrollmentId });

}


export function createEnrollment(enrollment) {
  delete enrollment._id
  return model.create(enrollment);
}

export function updateEnrollment(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}



export function findAllEnrollments() {
  return model.find();
}
