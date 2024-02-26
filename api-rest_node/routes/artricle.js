const { Router } = require('express');
const router = Router();
const articleController = require("../controllers/articleController");
router.get("/getArcticle", articleController.articleController )
router.get("/curso", articleController.curso )

module.exports = router;
