import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

export const serveFrontend = (app) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const distPath = path.join(__dirname, '../../../frontend/dist');

    app.use(express.static(distPath));

    app.get('/*IGT', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
};
