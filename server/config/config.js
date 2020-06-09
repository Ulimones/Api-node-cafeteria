/***********************************
Puerto
**********************************/
process.env.PORT = process.env.PORT || 3000;



/*************************************
Entorno
*************************************/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// =========================================
// Base de datos
// ========================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.uDB = urlDB;



/******************************************
Vencimiento del token
*******************************************/
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';



// =========================================
// SEED de autenticación
// ========================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-producion';


// =========================================
// Foogle Cliente ID
// ========================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '203336614597-gj6icnosn3dnipbis16mp0to7jhtji8s.apps.googleusercontent.com';