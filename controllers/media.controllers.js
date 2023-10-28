const imagekit = require("../libs/imagekit")

module.exports = {
    storageImage : (req,res) => {
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

        return res.status(200).json({
            status : true,
            message: "success",
            data : {
                image_url : imageUrl
            }
        })
    },
    storageVideo : (req,res) =>{
        const videoUrl = `${req.protocol}://${req.get('host')}/videos/${req.file.filename}`

        return res.status(200).json({
            status : true,
            message: 'success',
            data : {
                video_url : videoUrl
            }
        })
    },
    storageFile : (req,res) =>{
        const fileUrl = `${req.protocol}://${req.get('host')}/files/${req.file.filename}`

        return res.status(200).json({
            status : 'true',
            message : 'success',
            data : {
                file_url  : fileUrl
            }
        })
    },
    imageKitUpload : async (req,res) => {
        try{
            const stringFile = req.file.buffer.toString('base64')

            const uploadFile =  await imagekit.upload({
                fileName : req.file.originalname,
                file: stringFile
            })

            return res.status(200).json({
                status : true,
                message : "success",
                data:{
                    name: uploadFile.name,
                    url: uploadFile.url,
                    type: uploadFile.type
                }
            })

        }
        catch(err){
            throw err
        }
    }
    
}