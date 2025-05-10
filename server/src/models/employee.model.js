import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: String,
    avatarUrl: {
        type: String,
        default: "https://avatars.dicebear.com/api/bottts/default-avatar.svg"
    },
    skills: [ // Array of skils (SQL, Java, etc.)
        {
            name: String, // Skill name
            value: { type: Number, min: 1, max: 10 }, // Skill value (1-10)
        },
    ],
});

export const Employee = mongoose.model("Employee", EmployeeSchema, "employees");
