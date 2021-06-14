import { Router } from "express"

const router: Router = Router()

// router.get("/todos", getTodos)
router.get('/', (req, res) => {
    res.send('The sedulous hyenssssssssssa ate the antelope!');
  });

router.get('/info_videocall', (req, res) => { //Line 9
  res.send({ username: 'Ngo Bao',partnername: 'Dr.The Duy' }); //Line 10
}); //Line 11

export default router