const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };
  
  export function getAssignment() {
    return assignment;
  }
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
  
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });

      // Route to update the completed property
  app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
    const { isCompleted } = req.params;
    assignment.completed = isCompleted === "true";
    res.json(assignment);
  });
  };