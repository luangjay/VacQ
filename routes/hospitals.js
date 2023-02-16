const express = require('express')
const {
  getHospitals,
  createHospital,
  getHospital,
  deleteHospital,
  updateHospital,
} = require('../controllers/hospitals')

const router = express.Router()
const { protect, authorize } = require('../middleware/auth')

// const app = express()

router
  .route('/')
  .get(getHospitals)
  .post(protect, authorize('admin'), createHospital)
router
  .route('/:id')
  .get(getHospital)
  .put(protect, authorize('admin'), updateHospital)
  .delete(protect, authorize('admin'), deleteHospital)

module.exports = router
