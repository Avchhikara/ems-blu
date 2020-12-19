import { connect } from 'mongoose';

class MongoDB {
    async doConnect() {
        const connection = await connect(process.env.MONGODB_URI || "", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        return connection;
    }
}

export default new MongoDB();