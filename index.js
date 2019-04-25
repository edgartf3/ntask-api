import express from 'express';
const PORT = 3000;

const app = express()
app.set('json spaces', 4)
app.get('/', (req, res) => res.json({status: 'NTask API'}))

app.get('/tasks', (req, res) => {
    res.json({
        tasks: [
            {title: 'Fazer Compras'},
            {title: 'Consertar o pc'}
        ]
    })
})

app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`))