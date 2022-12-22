import { Router } from 'express';

const orderRouter = Router({ mergeParams: true });

orderRouter.post('/finishOrder', async (req, res, next) => {
    try {
        const { totalPrice } = req.body;

        console.log('Just finished an order.', JSON.stringify(req.body));
        // TODO count total orders
        // TODO accumulate total value sold

        return res.status(200).json({
            status: 'SOLD',
            totalPrice
        });
    } catch (err) {
        return next(err);
    }
});

export default orderRouter;