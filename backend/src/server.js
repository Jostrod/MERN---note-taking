import express from "express";
import NotesRoutes from "./routes/NotesRoutes.js"

const app = express()

app.use("/api/notes", NotesRoutes)



app.listen(5001, ()=> {
    console.log("Server started on PORT: 5001")
})