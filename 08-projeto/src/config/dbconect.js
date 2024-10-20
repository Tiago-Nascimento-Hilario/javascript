import mongoose, { mongo } from "mongoose";

 async function conectaDb(){
     mongoose.connect("mongodb+srv://admin:admin123@cluster0.6msow.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
     return mongoose.connection;   
 }

 export default conectaDb;
