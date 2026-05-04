import pool from "../config/db.js";

export const insertData = async (name, id) => {

  return await pool.query(

    'INSERT INTO demotable (name, id) VALUES ($1, $2)',

    [name, id]

  );

};

export const getAllData = async()=>{
    return await pool.query("SELECT * FROM demotable");
}

export const getDataById = async(id)=>{ 
    return await pool.query(
        'SELECT * FROM demotable WHERE id = $1',

    [id] 
    )
}

export const updateData = async(name, id)=>{ 
    return await pool.query(
        'UPDATE demotable SET name = $1 WHERE id = $2',
    [name, id] 
    )
}

export const deleteData = async(id)=>{ 
    return await pool.query('DELETE FROM demotable WHERE id = $1', [id])
}