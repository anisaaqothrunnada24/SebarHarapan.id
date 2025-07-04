import { Kafka } from 'kafkajs';
import mysql from 'mysql2/promise';

const kafka = new Kafka({ clientId: 'kampanye-service', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'kampanye-group' });

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbsebarharapan',
});

await consumer.connect();
await consumer.subscribe({ topic: 'pengajuan_kampanye', fromBeginning: true });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const data = JSON.parse(message.value.toString());

    const [result] = await db.execute(
      'INSERT INTO campaigns (penyelenggara_id, title, description, target_amount) VALUES (?, ?, ?, ?)',
      [data.penyelenggara_id, data.title, data.description, data.target_amount]
    );

    console.log('Kampanye berhasil diajukan:', result.insertId);
  },
});
