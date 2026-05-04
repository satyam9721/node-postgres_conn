import * as userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { name, id } = req.body;
        await userModel.insertData(name, id);
        res.status(201).json({ message: "Data inserted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
 }


export const getAllUsers = async (req, res) => {
    try {
      const result = await userModel.getAllData();
        res.status(200).json(result.rows);  
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserById = async (req, res) => { 
    try {
      const result = await userModel.getDataById(req.params.id);
        if(result.rows.length === 0) {
            return res.status(404).json({ message: " not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => { 
    try {
        const result = await userModel.updateData(req.body.name, req.params.id);
        if(result.rowCount === 0) {
            return res.status(404).json({ message: " not found" });
        }
        res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

export const deleteUser = async (req, res) => { 
try {
    const result = await userModel.deleteData(req.params.id);
    if(result.rowCount === 0) {
        return res.status(404).json({ message: " not found" });
    }
    res.status(200).json({ message: "Data deleted successfully" });
} catch (error) {
    res.status(500).json({ error: error.message });
}

}