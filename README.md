# Kuzmanich Seguros 360 — Ecosistema Digital

> Punto de partida del proyecto InsurTech integral.  
> Fecha de inicio: 2025-10-26

## Módulos
- `chatbot/`: Flujos del asistente omnicanal (Dialogflow CX / Manychat) y webhooks.
- `automations/`: Workflows de n8n para integraciones y tareas programadas.
- `crm/`: Esquema de datos (Google Sheets) y utilidades de sincronización.
- `web/`: Landing y assets de marca.
- `dashboards/`: Definiciones de KPIs y guías para Looker Studio.
- `docs/`: Arquitectura y normas operativas.
- `scripts/`: Scripts de despliegue y utilidades.
- `branding/`: Paleta, tipografías y lineamientos.

## Próximos pasos
1. Crear repositorio en GitHub y subir este paquete.
2. Crear Google Sheet maestro: `Leads Kuzmanich 360` con las columnas de `crm/schema/leads_schema.csv`.
3. Importar `automations/n8n/workflows/lead_ingest_template.json` en n8n.
4. Conectar Manychat/Instagram/WhatsApp al webhook `chatbot/webhook/index.js` (a completar).
5. Crear dashboard en Looker Studio con los KPIs de `dashboards/kpis.md`.
