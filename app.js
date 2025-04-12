const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conecta ao MongoDB (aqui você pode usar a string do Atlas ou manter o local para testes)
mongoose.connect('mongodb://127.0.0.1:27017/exerciciosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
