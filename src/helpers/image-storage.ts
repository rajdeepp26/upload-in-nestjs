import { diskStorage } from "multer";
import { extname } from "path";

type validMimeType = 'image/jpg' | 'image/jpeg'

const validMimeTypes: validMimeType[] = [
    'image/jpg',
    'image/jpeg'
]

export const saveImage = {
    storage: diskStorage({
        destination: "./uploads/image",
        filename: (req, file, callback) => {
            callback(null, generateFilename(file));
        }
    }),
    fileFilter: (req, file, callback) => {
        const allowedMimeTypes: validMimeType[] = validMimeTypes;
        allowedMimeTypes.includes(file.mimetype) ? callback(null, true) : callback(null, false);
    }
}

function generateFilename(file: Express.Multer.File) {
    return `${Date.now()}.${extname(file.originalname)}`;
}