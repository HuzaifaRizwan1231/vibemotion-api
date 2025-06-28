import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin:"*"
}));
app.use(express.json());

// Sample route
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the updated backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
