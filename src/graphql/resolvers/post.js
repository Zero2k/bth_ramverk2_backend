import _ from 'lodash';
import posts from '../../config/data';

export default {
  Query: {
    allReports: () => {
      return posts;
    },
    singleReport: (parent, { id }, context) => {
      const result = _.find(posts, { id });
      return result;
    },
  },
};
