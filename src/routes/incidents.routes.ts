import { Router } from "express";

import { CreateIncidentController } from "../modules/incidents/useCases/createIncident/CreateIncidentController";
import { ListIncidentsController } from "../modules/incidents/useCases/listIncidents/ListIncidentsController";
import { UpdateIncidentController } from "../modules/incidents/useCases/updateIncident/UpdateIncidentController";

const incidentRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();
const updateIncidentsController = new UpdateIncidentController();

incidentRoutes.post("/", createIncidentController.handle);
incidentRoutes.get("/:card_id", listIncidentsController.handle);
incidentRoutes.put("/:card_id", updateIncidentsController.handle);

export { incidentRoutes };
