// CLAVE SECRETA DE CIFRADO
export const ENCRYPTION_KEY = "AGENT33";

// Constantes de almacenamiento local
export const USADAS_STORAGE_KEY = 'juegoDeEspias_palabrasUsadas';
export const GAME_STATE_STORAGE_KEY = 'juegoDeEspias_estadoActual';
export const RULE_TURN_PASS_KEY = 'juegoDeEspias_reglaPaseTurno';

// Mapeo de tipos de cartas y códigos de codificación
export const TIPOS_CARTA = {
    ROJO: 'red',
    AZUL: 'blue',
    VERDE: 'green',
    NEUTRAL: 'neutral',
    ASESINO: 'assassin',
    // Mapeo de tipos a emojis que se muestran en la consola/alerta
    MAPEO_EMOJI: {
        'red': '🔴',
        'blue': '🔵',
        'green': '🟢',
        'neutral': '🟡',
        'assassin': '⚫'
    },
    // Mapeo de tipos a las iniciales solicitadas para la codificación
    MAPEO_CODIGO: {
        'red': 'R',
        'blue': 'B',
        'green': 'V',
        'neutral': 'N',
        'assassin': 'A'
    },
    // Mapeo inverso de iniciales a tipos
    MAPEO_INVERSO: {
        'R': 'red',
        'B': 'blue',
        'V': 'green',
        'N': 'neutral',
        'A': 'assassin'
    }
};