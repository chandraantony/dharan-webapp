const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: '/file/peb',      
      resource_type : "raw",
      format:(req,file) => mimeType(req,file),
      public_id: (req, file) => fileName(req,file),
    }, 
});

const file = multer({storage : storage}).single('upload')


function fileName(req,file) {  
    var split = file.originalname.split('.')
    var name = split[0]+'-' + Date.now()
    return name
}

function mimeType(req,file) {
    var type = file.originalname.split('.')
    return type[type.length-1]
}

module.exports = {
    fileName,
    file,
}