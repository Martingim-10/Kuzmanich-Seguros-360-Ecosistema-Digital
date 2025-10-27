# Arquitectura — Ecosistema Digital

```mermaid
flowchart LR
  A[Campañas Meta / IG / Web] --> B[Chatbot Omnicanal]
  B --> C{Ramo}
  C -->|Auto| D[Cotizador Auto]
  C -->|Hogar| E[Form Hogar]
  C -->|Vida| F[Asesor Vida]
  C -->|Salud| G[Comparador Salud]
  C -->|ART| H[Portal Empresa]
  C -->|Pyme| I[Asesor Pyme]
  C -->|Retiro| J[Calculadora Retiro]
  C -->|Viaje| K[Compra Instantánea]
  B --> L[CRM (Google Sheets)]
  L --> M[Dashboard (Looker Studio)]
  L --> N[n8n Automations]
```
