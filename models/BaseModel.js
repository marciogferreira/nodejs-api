import connection from '../config/Connection.js';

class BaseModel {

    constructor(table) {
        this.table = table;
    }

    findAll(callback) {
        connection.query(`SELECT * FROM ${this.table}`, callback);
    }

    findOne(id) {
        connection.query(`SELECT * FROM ${this.table} WHERE id = :id`, { id: id });
        return connection.getResult();
    }

    create(data) {
        connection.query(`INSERT INTO ${this.table} SET ?`, data);
        return connection.getResult();
    }

    update(data) {
        connection.execute(`UPDATE ${this.table} SET 
            nome = :nome,
            login = :login,
            senha = :senha
        WHERE id = :id`, 
        data);
        return connection.getResult();
    }

    delete(id) {
        connection.query(`DELETE FROM ${this.table} WHERE id = :id`, {id: id});
        return connection.getResult();
    }

}

export default BaseModel;