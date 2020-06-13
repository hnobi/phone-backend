import { connect,disconnect } from "mongoose";


const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/phonedb";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    connect(mongoURL, { useNewUrlParser: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
  _disconnect(){
    disconnect()
      .then(() => {
        console.log("Database disconnection successful");
      })
      .catch((err) => {
        console.error("Database disconnection error");
      });
  }
}

export default new Database();

