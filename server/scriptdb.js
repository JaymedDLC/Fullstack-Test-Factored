import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Falta MONGO_URI en el archivo .env");
  process.exit(1);
}

// Esquema igual al de employee.model.js
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  avatarUrl: {
    type: String,
    default: "https://avatars.dicebear.com/api/bottts/default-avatar.svg",
  },
  skills: [
    {
      name: String,
      value: { type: Number, min: 1, max: 10 },
    },
  ],
});

const Employee = mongoose.model("Employee", EmployeeSchema);

const employees = [
  {
    name: "Jessica",
    position: "Backend Developer",
    avatarUrl: "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Jessica",
    skills: [
      { name: "Node.js", value: 9 },
      { name: "MongoDB", value: 8 },
      { name: "Express", value: 7 },
      { name: "TypeScript", value: 6 },
      { name: "Docker", value: 7 },
    ],
  },
  {
    name: "Carlos",
    position: "Frontend Developer",
    avatarUrl: "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Carlos",
    skills: [
      { name: "React", value: 8 },
      { name: "HTML", value: 10 },
      { name: "CSS", value: 9 },
      { name: "JavaScript", value: 9 },
      { name: "Tailwind", value: 7 },
    ],
  },
  {
    name: "Luisa",
    position: "Fullstack Developer",
    avatarUrl: "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Luisa",
    skills: [
      { name: "Java", value: 8 },
      { name: "Spring Boot", value: 7 },
      { name: "MySQL", value: 9 },
      { name: "Vue.js", value: 6 },
      { name: "TypeScript", value: 7 },
    ],
  },
  {
    name: "Andrés",
    position: "DevOps Engineer",
    avatarUrl: "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Andres",
    skills: [
      { name: "AWS", value: 8 },
      { name: "Terraform", value: 7 },
      { name: "Docker", value: 9 },
      { name: "Kubernetes", value: 6 },
      { name: "Linux", value: 10 },
    ],
  },
  {
    name: "Sofía",
    position: "Data Analyst",
    avatarUrl: "https://api.dicebear.com/9.x/big-ears-neutral/svg?seed=Sofia",
    skills: [
      { name: "Python", value: 9 },
      { name: "Pandas", value: 8 },
      { name: "SQL", value: 10 },
      { name: "Power BI", value: 7 },
      { name: "Excel", value: 9 },
    ],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conexión a MongoDB exitosa");

    await Employee.deleteMany(); // Opcional: limpia la colección
    await Employee.insertMany(employees);

    console.log("🚀 Empleados insertados correctamente");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al insertar empleados:", error);
    process.exit(1);
  }
};

seedDatabase();
