const router= require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'pathToSetInBackend')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});

router.post('/requiredRoute', upload.single('fieldNameInApp'), async function (req, res) {
    
});

/*
in app.js

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}));

app.use(express.static(__dirname+'/uploads'));

*/