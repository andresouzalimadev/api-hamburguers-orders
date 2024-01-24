const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');
app.use(express.json());

const showInfo = (request, response, next) => {
    const method = request.method;
    const url = request.url;
    console.log(`[${method}] - ${url}`);
    next();

};

const orders = [];

const verifyOrderId = (request, response, next) => {
    const { id } = request.params;
    const index = orders.findIndex(order => order.id === id);
    if (index < 0) {
        return response.status(404).json({ error: "Order not found"});
    };
    request.orderIndex = index;
    request.orderId = id;
    next();
};

app.get('/order', showInfo, (request, response) => {
    return response.json(orders);
});

app.post('/order', showInfo, (request, response) => {
    const { order, clientName, price, status } = request.body;
    const clientOrder = { id: uuid.v4(), order, clientName, price, status };
    orders.push(clientOrder);
    return response.status(201).json(clientOrder);
});

app.get('/order/:id', showInfo, verifyOrderId, (request, response) =>{
    const index = request.orderIndex;
    const order = orders[index];
    return response.json(order);
});

app.put('/order/:id', showInfo, verifyOrderId, (request, response) => {
    const id = request.orderId;
    const index = request.orderIndex;
    const { order, clientName, price, status} = request.body;
    const orderChanged = { id, order, clientName, price, status };
    orders[index] = orderChanged;
    return response.status(202).json(orderChanged);
});

app.patch('/order/:id', showInfo, verifyOrderId, (request, response) => {
    const id = request.orderId;
    const index = request.orderIndex;
    const { status } = request.body;
    const { order, clientName, price } = orders[index];
    const statusChanged = { id, order, clientName, price, status };
    orders[index] = statusChanged;
    return response.status(202).json(statusChanged);
});

app.delete('/order/:id', showInfo, verifyOrderId, (request, response) => {
    const index = request.orderIndex;
    orders.splice(index, 1);
    return response.status(204).json();
})


app.listen(port, () => {
    console.log(`🖥🖥🖥 Server started on port ${port}`);
});