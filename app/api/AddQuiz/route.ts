import { NextResponse } from "next/server";
import { MongoClient, MongoClientOptions } from 'mongodb'
const mongoClient = new MongoClient(process.env.MONGODB_URI as string, {
  useUnifiedTopology: true,
} as MongoClientOptions)
  export const POST = async (req:any, res:any) => {
    if (req.method === 'POST') {
      try{
      const formData = await req.json();

      const db = mongoClient.db('Projekt')
      const collection = db.collection('Quizy')

      const checkExisting = await 
        collection.findOne({ Nazwa_Quizu: formData.NazwaQuiz });
        if (checkExisting) {
            mongoClient.close();
            throw new Error('Quiz już istnieje')
        }
        const quiz = {
            Nazwa_Quizu: formData.NazwaQuiz,
            Kategoria: formData.KategoriaQuiz,
            Trudność: formData.TrudnoscQuiz,
            Typ: formData.TypQuiz,
            Pytania: formData.TrescPytania,
            OdpowiedzA: formData.OdpowiedzA,
            OdpowiedzB: formData.OdpowiedzB,
            OdpowiedzC: formData.OdpowiedzC,
            OdpowiedzD: formData.OdpowiedzD,
            Utworzony: new Date()
        }
        const status = await collection.insertOne(quiz)
        mongoClient.close();

        return NextResponse.json({
          status: "success",
          message: "Dodano Quiz.",
        });
      }
      catch (error: any) {
        return new NextResponse(
          JSON.stringify({
            status: "error",
            message: error.message,
          }),
          { status: 500 }
        );
      }
    } 
  };