const {Task} = require("./model");

const index = async (req, res, next) => {


    const{query} = req;

    const filter = {}
    if(query.status){
        filter.status = query.status;
    }

    const tasks = await Task.find(filter, {});
    res.json(tasks.map(task => task.view(true)));
};

const show = async (req, res, next) =>
{
    const{id} = req.params;
    const task = await Task.findById(id);
    if(task) return res.json();

};

const create = async (req, res, next) =>
{
    const{body} = req;
    try {
        const task = await Task.create(body);
        res.json(task);
    }catch (e) {
        res.status(400).json({errors:  e.message});
    }
};

const update = async (req, res, next) => {
    const {id} = req.params;
        const {body} = req;
        let task = await Task.findById(id);
        if (!task) return res.status(404).end();
        task = Object.assign(task, body);
        try {
            await task.save();
            res.json(task);
        } catch (e) {
            res.status(404).end()
        }

}

const destroy = async (req, res, next) =>
{
    const {id} = req.params;
    try {
        await Task.findByIdAndRemove(id);
        res.status(204).end();
    }
    catch (e) {res.status(404).end()}
};

module.exports = {index, show, create, update, destroy};