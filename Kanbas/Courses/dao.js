// import Database from "../Database/index.js";
import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";

// 找到所有的课
export function findAllCourses() {
    // return Database.courses;
    return model.find();
}

  const findUsersForCourse = async (req, res) => {
    const { cid } = req.params;
    const users = await enrollmentsDao.findUsersForCourse(cid);
    res.json(users);
  };
//   app.get("/api/courses/:cid/users", findUsersForCourse);
// 找到某位user所注册的课程
export async function findCoursesForEnrolledUser(userId) {
    const enrollments = await enrollmentModel.find({ user: userId }).populate("course");
    // 提取课程信息
    return enrollments.date;
}
// 创建课程
export function createCourse(course) {
    delete course._id;
    return model.create(course);
}

export function deleteCourse(courseId) {

    return model.deleteOne({ _id: courseId });
}

export function updateCourse(courseId, courseUpdates) {

}
