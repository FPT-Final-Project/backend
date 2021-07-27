import { Router } from "express"

const router: Router = Router()

// router.get("/todos", getTodos)
router.get('/', (req, res) => {
    res.send('Hello World!');
  });
let date = new Date("07/27/2021 21:30:00");
let date1 = new Date("07/27/2021 22:56:59");
let milliseconds = date.getTime(); 
let milliseconds1 = date1.getTime(); 
router.get('/info_appointment', (req, res) => { 
  res.send({ userid: '1',doctorid: '2',timestart: milliseconds,timeend: milliseconds1 }); 
});


export default router