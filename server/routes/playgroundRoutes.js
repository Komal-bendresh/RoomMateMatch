const express = require('express');
const router = express.Router();

// Controllers
const { mediateConflict, saveAgreement, getThisOrThat } = require('../controllers/playgroundController');

// Routes
router.post('/mediate', mediateConflict);
router.post('/save-agreement', saveAgreement);
router.get('/this-or-that', getThisOrThat);

module.exports = router;
