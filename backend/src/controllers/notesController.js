export const getNotes = (req, res) => {
    res.status(200).send('This is the notes route');
}
export const createNote = (req, res) => {
    res.status(201).send('Note created successfully');
}