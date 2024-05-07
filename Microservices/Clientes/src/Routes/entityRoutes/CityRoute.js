import { Router } from "express";
import cityController from "../../controllers/CityController.js";

const router = Router();

router.get("/city", cityController.getAll);
router.get("/city/:id", cityController.getOneById);
router.post("/city", cityController.saveOne);
router.put("/city/:id", cityController.updateOneById);
router.delete("/city/:id", cityController.deleteOneById);

export default router;
