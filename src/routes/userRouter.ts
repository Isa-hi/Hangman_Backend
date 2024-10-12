import { Router } from 'express';

const router = Router();

router.get('/start-game', (req, res) => {
    res.send('Starting game...');
});

export default router;