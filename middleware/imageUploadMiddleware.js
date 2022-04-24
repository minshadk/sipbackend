const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "signmein365",
  api_key: "119543655631223",
  api_secret: "mBWqP39jqkDjWBN6-5zWyTjze-M",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "sip",
    format: async () => "png",
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
