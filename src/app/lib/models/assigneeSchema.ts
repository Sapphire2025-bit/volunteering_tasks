import { Schema } from 'mongoose';
import { Assignee } from "@/app/types/assignee";

const AssigneeSchema: Schema<Assignee> = new Schema({
    name: { type: String, required: true },
    assignedAt: { type: Date, required: true }
});

export default AssigneeSchema;