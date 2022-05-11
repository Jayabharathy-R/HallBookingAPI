const express=require('express');
const router=express.Router();
const roomModule=require('../module/rooms');

router.post('/createRoom',roomModule.createRoom);
router.post('/bookRoom',roomModule.bookRoom);
router.get('/getRooms',roomModule.getRooms);
router.get('/bookedRooms',roomModule.bookedRooms);


module.exports=router;