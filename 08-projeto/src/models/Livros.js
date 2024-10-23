import mongoose from "mongoose";

// Schema e objeto de configuração para estabelecer uma estrutura de propriedades
const livroSchema = new mongoose.Schema({
    id:{ type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true},
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;
