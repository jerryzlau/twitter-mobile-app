import Tweet from '../../models/Tweet';

export default {
  // find({}) finds everything in that schema
  getTweets: () => Tweet.find({})
}