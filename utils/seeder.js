const Room = require("../models/room");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose
  .connect(
    "mongodb+srv://Admin:Altoids1645@cluster0.xydd2ju.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((con) => console.log("Connected to Local Database"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All rooms are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
