import { Employee } from "../models/employee.model.js";

// Obtener todos los empleados (para futuras expansiones)
export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: "Error fetching employees" });
    }
};

// Obtener un empleado por ID 
export const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: "Error fetching employee" });
    }
};

// Crear empleado
export const createEmployee = async (req, res) => {
    try {
        const { name, position, avatarUrl, skills } = req.body;
        if (!Array.isArray(skills)) {
            return res.status(400).json({ error: "Skills must be an array" });
        }
        const newEmployee = new Employee({ name, position, avatarUrl, skills });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(500).json({ error: "Error creating employee" });
    }
};