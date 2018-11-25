// ===================
// Puerto
// ===================

process.env.PORT = process.env.PORT || 5000;

// ===================
// Entorno
// ===================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===================
// Vencimiento del token
// ===================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ===================
// SEED(Semilla) de autenticacion
// ===================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===================
// Base de Datos
// ===================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
  // urlDB = 'mongodb://localhost:27017/bugs_money';
  // urlDB = 'mongodb://cafe-user:azahella333@ds045507.mlab.com:45507/cafe-test';
  urlDB = 'mongodb://admin:superadmin1@ds159273.mlab.com:59273/bugsmoney';
} else {
  // urlDB = 'mongodb://cafe-user:azahella333@ds045507.mlab.com:45507/cafe-test';
  urlDB = 'mongodb://admin:superadmin1@ds159273.mlab.com:59273/bugsmoney';
}

process.env.URLDB = urlDB;

// ===================
// Google Client ID
// ===================

process.env.CLIENT_ID =
  process.env.CLIENT_ID ||
  '27487158293-89imhaa5mf45o0o0jvje4lut3rk0lq1u.apps.googleusercontent.com';
