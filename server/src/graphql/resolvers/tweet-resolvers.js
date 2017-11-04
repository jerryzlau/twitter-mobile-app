import Tweet from '../../models/Tweet';

export default {
  // find({}) finds everything in that schema
  getTweet: (_, { _id }) => Tweet.findById(_id),
  getTweets: () => Tweet.find({}).sort({ createdAt: -1 }),
  createTweet: (_, args) => Tweet.create(args),
  // ...args grabs the remaining params 
  // findByIdAndUpdate doesn't return updated object by default, need to 
  // specify by passing in { new: true } as an argument 
  updateTweet: (_, { _id, ...args }) => (
    Tweet.findByIdAndUpdate(_id, args, { new: true})
  ),
  deleteTweet: async (_, { _id }) => {
    try {
      await Tweet.findByIdAndRemove(_id);
      return {
        message: 'Delete Success!'
      }
    } catch (error) {
      throw error;
    }
  }
};