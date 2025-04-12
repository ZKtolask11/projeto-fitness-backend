const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Corrigido para uso no Render

// Conexão com MongoDB Atlas via variável de ambiente
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/exerciciosDB';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Modelo de Exercício
const Exercise = mongoose.model('Exercise', {
  name: String,
  category: String,
  equipment: String,
});

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rota POST para adicionar exercício
app.post('/api/exercises', async (req, res) => {
  const { name, category, equipment } = req.body;
  const newExercise = new Exercise({ name, category, equipment });
  await newExercise.save();
  res.status(201).json(newExercise);
});

// Rota GET para listar exercícios
app.get('/api/exercises', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

