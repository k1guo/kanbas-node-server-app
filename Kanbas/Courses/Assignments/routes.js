// routes.js 是后端 API 的入口，用于分发请求和调用相应的控制器逻辑。
// import Database from "../Database/index.js";
import * as dao from "./dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
export default function AssignmentRoutes(app) {


  app.get("/api/courses/:courseId/assignments", async(req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.post("/api/courses/:courseId/assignments", async(req, res) => {
    const { courseId } = req.params;
    const assignment = {
      ...req.body,
      course: courseId,
    };
    const newAssignment = await assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  });


  app.put("/api/assignments/:assignmentId", async(req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });

  app.get("/api/assignments", async (req, res) => {
    const assignments = await dao.findAllAssignments();
    res.send(assignments);
  });
 
}