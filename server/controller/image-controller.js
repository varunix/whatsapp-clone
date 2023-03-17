
const url = "http://localhost:8000";

export const uploadFile = async (req, res) => {
    if(!req.file) {
        return res.json(404).json('File not found');
    }

    const imageUrl = `{url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}