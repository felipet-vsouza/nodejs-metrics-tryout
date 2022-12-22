import { Router } from 'express';
import { Counter, Histogram } from 'prom-client';

const orderRouter = Router({ mergeParams: true });
const orderCounter = new Counter({
    name: 'total_orders',
    help: 'Total orders made'
});
const orderPriceHistogram = new Histogram({
    name: 'total_order_price',
    help: 'Total price',
    buckets: [1, 5, 15, 50, 100, 500, 1000, 5000],
});


orderRouter.post('/finishOrder', async (req, res, next) => {
    try {
        const { totalPrice } = req.body;

        console.log('Just finished an order.', JSON.stringify(req.body));
        orderCounter.inc();
        orderPriceHistogram.observe(totalPrice);

        return res.status(200).json({
            status: 'SOLD',
            totalPrice
        });
    } catch (err) {
        return next(err);
    }
});

export default orderRouter;