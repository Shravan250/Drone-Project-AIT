import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the Drone Anomaly schema

interface IDroneAnomaly extends Document {
  droneId: string; // Unique identifier for the drone
  longitude: number; // Longitude of the drone at the time of anomaly
  latitude: number; // Latitude of the drone at the time of anomaly
  height: number; // Altitude of the drone (in meters)
  anomalyObject: string; // Description of the object causing the anomaly
  anomalyReason: string; // Reason for marking this activity as anomalous
  droneFilePath: string; // File path to the data captured by the drone (e.g., video or image file)
  createdAt?: Date; // Timestamp of anomaly creation
  updatedAt?: Date; // Timestamp of anomaly updates
}

// Define the schema for the Drone Anomaly
const droneAnomalySchema = new mongoose.Schema(
  {
    droneId: {
      type: String,
      required: true,
      index: true, // Adding an index for efficient querying
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    anomalyObject: {
      type: String,
      required: true,
    },
    anomalyReason: {
      type: String,
      required: true,
    },
    droneFilePath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);


const DroneAnomaly = mongoose.model<IDroneAnomaly>(
  "DroneAnomaly",
  droneAnomalySchema
);

export default DroneAnomaly;
