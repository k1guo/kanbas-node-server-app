
import * as enrollmentsDao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as coursesDao from "../Courses/dao.js";
export default function EnrollmentRoutes(app) {



    app.get("/api/:userId/courses", async(req, res) => {
        const { userId } = req.params;
        console.log(userId)
        const enrollments = await enrollmentsDao.findCoursesForUser(userId);
        res.send(enrollments);
    });

    // const findCoursesForUser = async (req, res) => {
    //   const currentUser = req.session["currentUser"];
    //   if (!currentUser) {
    //     res.sendStatus(401);
    //     return;
    //   }
    //   if (currentUser.role === "ADMIN") {
    //     const courses = await courseDao.findAllCourses();
    //     res.json(courses);
    //     return;
    //   }
    //   let { uid } = req.params;
    //   if (uid === "current") {
    //     uid = currentUser._id;
    //   }
    //   const courses = await enrollmentsDao.findCoursesForUser(uid);
    //   res.json(courses);
    // };

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });

    app.delete("/api/enrollments/:enrollmentId", async(req, res) => {
      const { enrollmentId } = req.params;
      await enrollmentsDao.deleteEnrollment(enrollmentId);
      console.log("deleted enrollment", enrollmentId)
      res.sendStatus(204);
    });

    app.get("/api/:userId/enroll/:courseId", async(req, res) => {
        const { userId, courseId } = req.params;
        console.log(userId,courseId,"userId,courseId");
        // const enrollment = {
        //   ...req.body,
        //   course: courseId,
        // };
        const newEnrollment =await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    });



    app.post("/api/:userId/:courseId/modules", async(req, res) => {
        const { courseId } = req.params;
        const module = {
          ...req.body,
          course: courseId,
        };
        const newModule = await modulesDao.createModule(module);
        res.send(newModule);
      });

      app.post("/api/enrollments", async (req, res) => {
         const enrollment  = req.body;
         const newEnrollment = await enrollmentsDao.createEnrollment(enrollment);
         console.log("new enrollment",enrollment)
         res.send(newEnrollment);
       });
     

}
