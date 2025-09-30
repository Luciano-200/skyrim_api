import { Router } from "express"
import { VolunteerController } from "./controller/VolunteerController"

const router = Router()

const volunteerController = new VolunteerController()

router.post("/volunteers", volunteerController.create )

router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "OK" })
  } catch (error) {
    next(error)
  }
})

export { router }