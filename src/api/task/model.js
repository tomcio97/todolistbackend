const  Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    description:
        {
            type: String
        },
    status:
        {
            type: String,
            enum: ['DONE', 'IN_PROGRESS', 'NEW', 'REJECTED'],
            default: 'NEW',
        },
    deadline: {
        type: Date
    }
},

{
        timestamps: true
});

TaskSchema.methods.view = function(full)
{
    const obj = {
        id: this.id,
        title: this.title,
        deadline: this.deadline,
        status: this.status
    };
    if(full)
    {
        return {
            ...obj,
            description: this.description
        }
    }
}

module.exports = {
    TaskSchema,
    Task: Mongoose.model('Task', TaskSchema)
}