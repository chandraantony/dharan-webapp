exports.upload = (req,res,next) => {
    res.json({
        sucess : true,
        message : 'Upload Success',
        url : req.file.path
    })
}
