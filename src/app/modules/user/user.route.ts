import express from 'express';
import { createNewUser, getAdminUser, getAllUser, getUserWithId } from './user.controllers';
const router = express.Router()

router.get("/", getAllUser)
router.get("/admins", getAdminUser)
router.get("/:id", getUserWithId)
router.post("/create-user", createNewUser)

export default router;

