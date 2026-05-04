const {Client}= require('pg');
const express = require('express');

const app = express();
app.use(express.json());


const con = new Client({
host: 'localhost',
user: 'postgres',
port: 5433,
password: '4442',
database: 'Demo'

 })

con.connect()
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.error('Error connecting to database', err);
});


app.post('/postdata',  (req, res) => {
    const { name, id } = req.body;

    const insertQuery = 'INSERT INTO demotable (name, id) VALUES ($1, $2)';

    con.query(insertQuery, [name, id],(err, result) => {

        if (err) { 
            res.send(err)
        }else{
            console.log('Data inserted successfully');
            res.send('Data inserted successfully');
        }
}) 
   
});


app.get('/fetchdata', (req, res) => {
    const query = 'SELECT * FROM demotable';

    con.query(query, (err, result) => {
        if (err) {
            console.error('Fetch Error:', err); // 🔥 important
            return res.status(500).json({ error: err.message });
        }

        console.log('Data fetched successfully');
        res.status(200).json(result.rows);
    });
});

app.get('/fetchdata/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM demotable WHERE id = $1';

    con.query(query, [id], (err, result) => {
        if (err) {
            console.error('Fetch Error:', err); // 🔥 important
            return res.status(500).json({ error: err.message });
        }

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Record not found' });
        }

        console.log('Data fetched successfully');
        res.status(200).json(result.rows[0]);
    });
});


app.put('/updatedata/:id', (req, res) => { 
const id = req.params.id;
const  name  = req.body.name;

const update_query = "UPDATE demotable SET name = $1 WHERE id = $2";

con.query(update_query, [name, id], (err, result) => {
    if (err) {
        console.error('Update Error:', err); // 🔥 important
        return res.status(500).json({ error: err.message });
    }

    if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Record not found' });
    }

    console.log('Data updated successfully');
    res.status(200).json({ message: 'Data updated successfully' });

})
});


app.delete('/deletedata/:id', (req, res) => { 

const id = req.params.id;

const delete_query = "DELETE FROM demotable WHERE id = $1";

con.query(delete_query, [id], (err, result) => {
    if (err) {
        console.error('Delete Error:', err); // 🔥 important
        return res.status(500).json({ error: err.message });
    }

    if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Record not found' });
    }

    console.log('Data deleted successfully');
    res.status(200).json({ message: 'Data deleted successfully' });
})

})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});