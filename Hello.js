export default function HelloRoutes(app)
// (request,object)
{app.get("/hello", (req,res) => {
    res.send("hello world! Life is harsh and people struggle to survive");
});
app.get("/",(req,res) => {
    res.send("path ")
})
}