import express from 'express';
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    //updateEmployee,
    //deleteEmployee
} from '../controllers/employee.controller.js';

const router = express.Router();

// Obtener todos los empleados (para futuras expansiones)
router.get('/', getAllEmployees);

// Obtener un empleado por ID (para el perfil)
router.get('/:id', getEmployeeById);

// Crear empleado (útil para poblar la DB inicialmente)
router.post('/', createEmployee);

// Actualizar empleado
// router.put('/:id', updateEmployee);

// Eliminar empleado 
// router.delete('/:id', deleteEmployee);

export default router;