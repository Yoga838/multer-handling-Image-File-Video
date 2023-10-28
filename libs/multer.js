const { error } = require('console');
const multer = require('multer')
const path = require('path')

const fileName = (req, file, callback) => {
    const filename = Date.now() + path.extname(file.originalname);
    callback(null, filename)
}

const generateStorage = (destination) => {
    return multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, destination)
        },
        fileName
    })
}

module.exports = {
    image: multer({
        storage: generateStorage('./public/images'),
        fileFilter: (req,file, callback) =>{
            const allowedMimeTypes = ['image/png', 'image/jpg', 'image/jpeg']

            if (allowedMimeTypes.includes(file.mimetype)){
                callback(null,true)
            }else{
                const err = new Error(`only ${allowedMimeTypes.join(", ")} allowed to upload `)
                callback(err, false)
            }
        },
        onError: (err, next) => {
            next(err)
        }
    }),
    video : multer({
        storage : generateStorage('./public/videos'),
        fileFilter:(req,file,callback) =>{
            const allowedMimeTypes = ['video/mp4','video/x-nsvideo','video/quicktime']

            if(allowedMimeTypes.includes(file.mimetype)){
                callback(null,true)
            }else{
                const err = new Error(`only ${allowedMimeTypes.join(", ")} allowed to upload`)
                callback(err, false)
            }
        },
        onError : (err,next) =>{
            next(err)
        }
    }),
    file : multer({
        storage: generateStorage('./public/files'),
        fileFilter: (req,file, callback) =>{
            const allowedMimeTypes = ['application/pdf']

            if(allowedMimeTypes.includes(file.mimetype)){
                callback(null,true)
            }else{
                const err = new Error(`only ${allowedMimeTypes.join(", ")} allowed to upload`)
                callback(err, false)
            }
        },
        onError :(err,next)=>{
            next(err)
        }
    })
}