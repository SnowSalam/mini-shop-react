const express = require('express');
const fs = require('node:fs/promises');
const path = require('node:path');

// пока данные берём из тех же JSON, что и фронтенд; на этапе 12 заменим на PostgreSQL
const DATA_DIR = path.join(__dirname, '..', 'public', 'data');
const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();

async function readJson(file) {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, file), 'utf8'));
}

// slug — короткий идентификатор категории в URL: electronics, clothes, toys
const toSlug = (category) => path.basename(category.file, '.json');

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/api/categories', async (req, res) => {
    const categories = await readJson('categories.json');
    // имя файла наружу не отдаём: клиенту не нужно знать, как хранятся данные
    res.json(categories.map((c) => ({ slug: toSlug(c), name: c.name, icon: c.icon })));
});

app.get('/api/products', async (req, res) => {
    const categories = await readJson('categories.json');
    // ищем категорию по белому списку, а не собираем путь к файлу из параметра запроса
    const category = categories.find((c) => toSlug(c) === req.query.category);
    if (!category) {
        return res.status(404).json({ error: 'Категория не найдена' });
    }
    res.json(await readJson(category.file));
});

// в Express 5 ошибки из async-обработчиков попадают сюда автоматически
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, HOST, (err) => {
    if (err) throw err; // например, EADDRINUSE: порт уже занят
    console.log(`API слушает http://${HOST}:${PORT}`);
});