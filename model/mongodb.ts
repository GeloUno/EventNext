export const URL_MONGODB = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_DB_USER}:${process.env.NEXT_PUBLIC_MONGO_DB_PASSWORD}@cluster0.knj8u.mongodb.net/${process.env.NEXT_PUBLIC_MONGO_DB_DATA_BASE_NAME}?retryWrites=true&w=majority`