import { Router } from "express";

import { CreateIncidentController } from "../modules/incidents/useCases/createIncident/CreateIncidentController";
import { UpdateIncidentController } from "../modules/incidents/useCases/updateIncident/UpdateIncidentController";
import { ListIncidentsController } from "../modules/incidents/useCases/listIncidents/ListIncidentsController";

const incidentRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();
const updateIncidentsController = new UpdateIncidentController();

incidentRoutes.post("/", createIncidentController.handle);
incidentRoutes.get("/:card_id", listIncidentsController.handle);
incidentRoutes.put("/:id", updateIncidentsController.handle);

export { incidentRoutes };
