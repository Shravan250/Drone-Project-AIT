import DroneAnomaly from "../models/anomaly.model";
import errResponse from "../utils/errResponse";
import sucResponse from "../utils/sucResponse";

export const createAnomaly = async (req: any, res: any, next: any) => {
  try {
    const { droneId, longitude, latitude, height, anomalyObject, anomalyReason, droneFilePath } = req.body;

    // Validate required fields
    if (!droneId || !longitude || !latitude || !height || !anomalyObject || !anomalyReason || !droneFilePath) {
      throw new errResponse("Please provide all required fields", 400);
    }

    // Create a new anomaly record
    const anomaly = await DroneAnomaly.create({
      droneId,
      longitude,
      latitude,
      height,
      anomalyObject,
      anomalyReason,
      droneFilePath,
    });

    // Save the entry in the database
    await anomaly.save();

    // Respond with success
    return res.json(new sucResponse(true, 201, "Anomaly entry created successfully", anomaly));
  } catch (error) {
    next(error);
  }
};

