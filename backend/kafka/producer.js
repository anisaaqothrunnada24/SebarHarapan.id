import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'sebarharapan', brokers: ['192.168.62.30:9093'] });
const producer = kafka.producer();huu

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: 'verifikasi_donasi',
    messages: [
      {
        key: 'verifikasi',
        value: JSON.stringify({
          donation_id: 5,
          verified_by: 2,
          notes: 'Donasi telah dicek manual.',
        }),
      },
    ],
  });
  

  await producer.disconnect();
};

run().catch(console.error);
