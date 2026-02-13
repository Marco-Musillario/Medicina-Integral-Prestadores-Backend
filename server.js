import express from 'express';
import cors from 'cors';

// Rutas
import db from './database/models/index.js';

db.sequelize.sync({ alter: false });

import afiliadosRoutes from './routes/afiliadosRoutes.js';
import situacionesRoutes from './routes/situacionesRoutes.js';
import turnosRoutes from './routes/turnosRoutes.js';
import historialRoutes from './routes/notasRoutes.js';
import autorizacionesRoutes from './routes/autorizacionesRoutes.js';
import recetasRoutes from './routes/recetasRoutes.js';
import reintegrosRoutes from './routes/reintegrosRoutes.js';
import registrosSolicitudesRoutes from './routes/registrosSolicitudesRoutes.js';
import prestadoresRoutes from './routes/prestadoresRoutes.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Usamos las rutas
app.use('/afiliados', afiliadosRoutes);
app.use('/situaciones', situacionesRoutes);
app.use('/turnos', turnosRoutes);
app.use('/notas', historialRoutes);
app.use('/autorizaciones', autorizacionesRoutes);
app.use('/recetas', recetasRoutes);
app.use('/reintegros', reintegrosRoutes);
app.use('/registrosSolicitudes', registrosSolicitudesRoutes);
app.use('/prestadores', prestadoresRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
