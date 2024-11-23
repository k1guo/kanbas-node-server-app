
import * as dao from "./dao.js";
import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {

    app.get("/api/:userId/enroll", (req, res) => {
        const { userId } = req.params;
        const enrollments = enrollmentDao.findCoursesForEnrolledUser(userId);
        res.send(enrollments);
    });
    
    app.delete("/api/enrollments/:enrollmentId", (req, res) => {
      const { enrollmentId } = req.params;
      enrollmentsDao.deleteEnrollment(enrollmentId);
      console.log("deleted enrollment", enrollmentId)
      res.sendStatus(204);
    });


    app.get("/api/:userId/enroll/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        console.log(userId,courseId,"userId,courseId");
        // const enrollment = {
        //   ...req.body,
        //   course: courseId,
        // };
        const newEnrollment = enrollmentDao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    });



    app.post("/api/:userId/:courseId/modules", (req, res) => {
        const { courseId } = req.params;
        const module = {
          ...req.body,
          course: courseId,
        };
        const newModule = modulesDao.createModule(module);
        res.send(newModule);
      });



     
      app.post("/api/enrollments", (req, res) => {
         const enrollment  = req.body;
         
         const newEnrollment = enrollmentsDao.createEnrollment(enrollment);
         console.log("new enrollment",enrollment)
         res.send(newEnrollment);
       });
     

}
