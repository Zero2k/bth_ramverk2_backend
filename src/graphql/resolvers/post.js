import _ from 'lodash';
import posts from '../../config/data';

export default {
  Query: {
    allReports: () => {
      return posts;
    },
    singleReport: (parent, { id }, context) => {
      let result = _.find(posts, { id });
      return result;
    },
  },
};
