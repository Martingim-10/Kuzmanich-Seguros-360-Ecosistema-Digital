# Chatbot Omnicanal (Multirramo)

## Objetivo
Detectar el ramo (Auto, Hogar, Vida, Salud, ART, Pyme, Retiro, Viaje) y derivar a:
- Cotizador (si aplica)
- Captación de datos + CRM
- Asesor humano

## Estructura
- `intents/` y `flows/`: diseño conversacional por ramo.
- `webhook/`: lógica de negocio (Node.js/Express sugerido).
- `templates/`: respuestas y mensajes reutilizables.

## Endpoints esperados
POST /webhook/manychat -> entrada Manychat
POST /webhook/meta     -> entrada Instagram/WhatsApp
POST /webhook/cx       -> entrada Dialogflow CX

