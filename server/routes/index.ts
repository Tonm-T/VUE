import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    res.send("Hellod Word")
})

export default router