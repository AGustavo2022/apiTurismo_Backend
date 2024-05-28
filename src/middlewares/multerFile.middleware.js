import multer from "multer"

// const fileJpeg = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg') {
//     cb(null, true);
//   } else {
//     cb(new Error('Only JPEG files are allowed!'), false);
//   }
// };


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-' +file.originalname )
    }
  })
  
export const upload = multer({ 
  storage: storage,
  // fileFilter: fileJpeg,
  // limits: {
  //   fileSize: 1024 * 1024 * 5 // Limitar el tamaño del archivo a 5MB 
  // }
})
