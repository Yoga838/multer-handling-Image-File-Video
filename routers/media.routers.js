const router = require('express').Router()
const storage = require ('../libs/multer')
const {storageImage, storageVideo,storageFile,imageKitUpload} = require('../controllers/media.controllers')

router.post('/images', storage.image.single('image'),storageImage)
router.post('/videos', storage.video.single('video'),storageVideo)
router.post('/files', storage.file.single('file'),storageFile)


const multer = require('multer')()
router.post('/imageKit', multer.single('image'), imageKitUpload)

module.exports = router