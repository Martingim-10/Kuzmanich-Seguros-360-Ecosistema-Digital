#!/usr/bin/env bash
set -e
echo "Instalando dependencias webhook..."
cd chatbot/webhook
npm install
echo "Listo. Ejecuta con: node index.js (o deploy a Cloud Run)"
