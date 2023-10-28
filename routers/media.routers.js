const router = require('express').Router()
const storage = require ('../libs/multer')
const {storageImage, storageVideo,storageFile} = require('../controllers/media.controllers')

router.post('/images', storage.image.single('image'),storageImage)
router.post('/videos', storage.video.single('video'),storageVideo)
router.post('/files', storage.file.single('file'),storageFile)

module.exports = router