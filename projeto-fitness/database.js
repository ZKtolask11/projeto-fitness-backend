const mongoose = require('mongoose');

// Pegue a "Connection string" no MongoDB Atlas (clique em "Connect" > "Connect your application")
const uri = "mongodb+srv://juan:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Substitua <password> pela senha do seu usuário do banco
const uriComSenha = uri.replace('<password>', 'Zk270311');

mongoose.connect(uriComSenha, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB Atlas com sucesso!'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB Atlas:', err));
