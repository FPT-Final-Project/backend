import { Router } from "express"

const router: Router = Router()

// router.get("/todos", getTodos)
router.get('/', (req, res) => {
    res.send('Hello World!');
  });

router.get('/info_videocall', (req, res) => { 
  res.send({ username: 'Ngo Bao',partnername: 'Dr.The Duy' }); 
});


export default router