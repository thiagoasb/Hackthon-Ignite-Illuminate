import { Router } from "express";

import { CreateIncidentController } from "../modules/incidents/useCases/createIncident/CreateIncidentController";
import { ListIncidentsByCardIdController } from "../modules/incidents/useCases/listIncidentsByCardId/ListIncidentsByCardIdController";
import { ListIncidentsByPlaceNameController } from "../modules/incidents/useCases/listIncidentsByPlaceName/ListIncidentsByPlaceNameController";
import { ListIncidentsByServiceNameController } from "../modules/incidents/useCases/listIncidentsByServiceName/ListIncidentsByServiceNameController";
import { UpdateIncidentController } from "../modules/incidents/useCases/updateIncident/UpdateIncidentController";

const incidentRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsByCardIdController = new ListIncidentsByCardIdController();
const listIncidentsByPlaceNameController =
    new ListIncidentsByPlaceNameController();
const listIncidentsByServiceNameController =
    new ListIncidentsByServiceNameController();
const updateIncidentsController = new UpdateIncidentController();

incidentRoutes.post("/", createIncidentController.handle);
incidentRoutes.get("/:card_id", listIncidentsByCardIdController.handle);
incidentRoutes.get("/", listIncidentsByPlaceNameController.handle);
incidentRoutes.get("/", listIncidentsByServiceNameController.handle);
incidentRoutes.put("/:id", updateIncidentsController.handle);

export { incidentRoutes };
