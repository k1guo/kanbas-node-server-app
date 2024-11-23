// dao.js 文件负责数据访问层（Data Access Object, DAO），用于处理与数据库的交互。
// import Database from "../Database/index.js";
import Database from "../../Database/index.js";
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function findAllAssignments(){
    return Database.assignments;
}

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    if (!assignment) {
        throw new Error(`Assignment with ID ${assignmentId} not found.`);
    }
    Object.assign(assignment, assignmentUpdates);
    // console.log(assignment.title);
    return assignment;
  }
