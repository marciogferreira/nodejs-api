class BaseController {

    constructor(model) {
        this.classModel = model;
    }

    async findAll(req, res) {
        console.log(this.classModel);
        const data = await this.classModel.findAll();
        if(data.length) {
            return res.json(data[0]);
        }
        return res.json({});
        
    }

    static show(req, res) {
        const data = classModel.findOne(req.params.id);
        return res.json(data);
    }

    static create(req, res) {
        const data = classModel.create(req.body);
        return res.json(data);
    }

    static update(req, res) {
        const data = classModel.update(req.body);
        return res.json(data);
    }
    static delete(req, res) {
        const data = classModel.delete(req.query.id);
        return res.json(data);
        
    }
}

export default BaseController