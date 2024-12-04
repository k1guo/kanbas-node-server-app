import Database from "../Database/index.js";
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

import * as enrollmentsDao from "../Enrollments/dao.js";
export default function CourseRoutes(app) {
  // 得到特定的课的 modules
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

  //   所有的课程
  app.get("/api/courses", async(req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  // 得到这门课的modules
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.send(status);
  });

  // 修改这个course id的课的内容
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });

  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });
}
