import faker from 'faker';
import Tweet from '../models/Tweet';

const TWEETS_TOTAL = 10;

// this is the seed
export default async () => {
  try{
    await Tweet.remove();
    await Array.from({ length: TWEETS_TOTAL }).forEach(async () => {
      await Tweet.create({ text: faker.lorem.paragraphs(1) });
    });
  }catch(err){
    throw err;
  }
}