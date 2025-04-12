const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB local
mongoose.connect('mongodb://127.0.0.1:27017/exerciciosDB')
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Modelo
const Exercise = mongoose.model('Exercise', {
  name: String,
  category: String,
  equipment: String,
});

// Middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.post('/api/exercises', async (req, res) => {
  const { name, category, equipment } = req.body;
  const newExercise = new Exercise({ name, category, equipment });
  await newExercise.save();
  res.status(201).json(newExercise);
});

app.get('/api/exercises', async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
