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
    }
    
}