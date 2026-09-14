import express from "express"
import moviesRouter from "./route/movie.route.js";
import libraryRouter from "./route/library.route.js";
import activitiesRouter from "./route/activity.route.js";
import notesRouter from "./route/notes.route.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/library", libraryRouter);
app.use("/activities", activitiesRouter);
app.use("/notes", notesRouter);

app.listen(8000, () => {
    console.log("Server started at port 8000")
})

mongoose.connect('mongodb+srv://navreetkaur3011_db_user:navreet_2005@cluster0.rfdlazg.mongodb.net/movies2')
  .then(() => console.log('Connected!'));
