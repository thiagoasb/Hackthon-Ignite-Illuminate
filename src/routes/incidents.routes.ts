import { DeleteUserController } from "@modules/users/useCases/deleteUser/DeleteUserController";
import { Router } from "express";

import { CreateIncidentController } from "../modules/incidents/useCases/createIncident/CreateIncidentController";
import { ListIncidentsController } from "../modules/incidents/useCases/listIncidents/ListIncidentsController";
import { UpdateIncidentController } from "../modules/incidents/useCases/updateIncident/UpdateIncidentController";

const incidentRoutes = Router();

const createIncidentController = new CreateIncidentController();
const listIncidentsController = new ListIncidentsController();
const updateIncidentsController = new UpdateIncidentController();
const deleteIncidentsController = new DeleteUserController();

incidentRoutes.post("/", createIncidentController.handle);
incidentRoutes.get("/:card_id", listIncidentsController.handle);
incidentRoutes.put("/:card_id", updateIncidentsController.handle);
incidentRoutes.delete("/:id", deleteIncidentsController.handle);

export { incidentRoutes };
