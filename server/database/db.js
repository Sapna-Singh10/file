import mongoose from 'mongoose';
const DBconnection = async () => {
      const MONGO_URI =`mongodb+srv://divisionpvt1:B1QswrXPZAo9XM9h@cluster0.vycpt9o.mongodb.net/`;
     try {
          await mongoose.connect(MONGO_URI, {useNewUrlParser : true});
          console.log('Database connected successfully');
     }
     catch(error) { 
        console.log('Error while connecting with the database', error.message);

     }
}

export default DBconnection;