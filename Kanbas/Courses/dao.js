// import Database from "../Database/index.js";
import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";

// 找到所有的课
export function findAllCourses() {
    // return Database.courses;
    return model.find();
}



  export const findUsersForCourse = async (courseId) => {
    try {
      // 查询所有与指定课程相关的用户
      return await enrollmentModel.find({ course: courseId }).populate("user").exec();
    } catch (error) {
      console.error("Error in findUsersForCourse:", error);
      throw error;
    }
  };
  

// 找到某位user所注册的课程
// export async function findCoursesForEnrolledUser(userId) {
//     const enrollments = await enrollmentModel.find({ user: userId }).populate("course");
//     // 提取课程信息
//     return enrollments.date;
// }
// 创建课程
export function createCourse(course) {
    delete course._id;
    return model.create(course);
}

export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });

}
