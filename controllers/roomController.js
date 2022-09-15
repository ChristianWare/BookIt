import Room from "../models/room";

// Create new Room: (Path: /api/rooms, Method: GET)
const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create new Room: (Path: /api/rooms, Method: POST)
const newRoom = async (req, res) => {
  try {
    // The Following will save the Room data to the Databas:
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get Room Details: (Path: /api/rooms/:id, Method: GET)
const getSingleRoom = async (req, res) => {
  try {
    // The Following will search the DB for the given ID:
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update Room Details: (Path: /api/rooms/:id, Method: PUT)
const updateRoom = async (req, res) => {
  try {
    // The Following will search the DB for the given ID:
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete Room : (Path: /api/rooms/:id, Method: DELETE)
const deleteRoom = async (req, res) => {
  try {
    // The Following will search the DB for the given ID:
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room is deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
