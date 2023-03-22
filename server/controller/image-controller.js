import { response } from 'express';
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'    //file storage is with name fs on mongoCloud
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})

export const uploadFile = async (req, res) => {
    if(!req.file) {
        return res.json(404).json('File not found');
    }

    const imageUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        return res.status(200).json(error.message);
    }
}