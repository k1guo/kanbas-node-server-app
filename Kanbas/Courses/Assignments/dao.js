// dao.js 文件负责数据访问层（Data Access Object, DAO），用于处理与数据库的交互。
// import Database from "../Database/index.js";
// import Database from "../../Database/index.js";
import model from "./model.js";

export function createAssignment(assignment) {
    delete assignment._id
    return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
    return model.deleteOne({ _id: assignmentId });
}


export function updateAssignment(assignmentId, assignmentUpdates) {
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}



export function findAllAssignments() {
    return model.find();
}

export function findAssignmentsForCourse(courseId) {
    return model.find({ course: courseId });
}




