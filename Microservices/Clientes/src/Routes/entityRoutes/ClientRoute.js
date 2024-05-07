import { Router } from "express";
import clientController from "../../controllers/ClientController.js";

const router = Router();

router.get("/client", clientController.getAll);
router.get("/client/:id", clientController.getOneById);
router.post("/client", clientController.saveOne);
router.put("/client/:id", clientController.updateOneById);
router.delete("/client/:id", clientController.deleteOneById);

export default router;
