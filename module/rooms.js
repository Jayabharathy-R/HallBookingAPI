const mongo=require('../shared');


module.exports.createRoom=async (req,res,next)=>{
   try{
     const response=await mongo.slectedDb.collection('Rooms').insertOne(req.body);
     res.send(response);
    }
   catch(err){
       console.log(err);
   }
}

module.exports.bookRoom=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('BookedRooms').insertOne(req.body);
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.getRooms=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('Rooms').aggregate([{
        $lookup: {
               from: "BookedRooms",
               localField: "RoomName",
               foreignField: "RoomID",
               as: "CustomerDetails"
             }
    }]).toArray();
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }

 module.exports.bookedRooms=async (req,res,next)=>{
    try{
      const response=await mongo.slectedDb.collection('BookedRooms').aggregate([{
        $lookup: {
               from: "Rooms",
               localField: "RoomID",
               foreignField: "RoomName",
               as: "RoomDetails"
             }
    }]).toArray();
      res.send(response);
     }
    catch(err){
        console.log(err);
    }
 }