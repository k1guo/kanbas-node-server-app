import Database from "../Database/index.js";
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
// ​​import * as enrollmentsDao from "../Enrollments/dao.js";
// const enrollmentsDao = require("../Enrollments/dao");

export default function CourseRoutes(app){

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    // const currentUser = req.session["currentUser"];
    // if (currentUser) {
    //   await enrollmentsDao.enrollUserInCourse(currentUser._id, course._id);
    // }
    res.json(course);
  });

  // 得到特定的课的 modules
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.send(newModule);
  });




  //   所有的课程
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    // console.log(courses);
    res.send(courses);
  });

  // 得到这门课的modules
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    const { courseId } = req.params;
    const modules = await modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  });

  // 修改这个course id的课的内容
  app.put("/api/courses/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });



}
