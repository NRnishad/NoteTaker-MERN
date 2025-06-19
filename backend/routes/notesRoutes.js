import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).send('This is the notes route');
});
router.post('/', (req, res) => {
    res.status(201).send('Note created successfully');
});




export default router;