import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
   title: String,
   course: String,
   description: String,
   point:Number,
   dueDate:String,
   availableFromDate:String,
   availableUntilDate:String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
 },
 { collection: "assignments" }
);
export default assignmentSchema;