import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const Badge = {
  displayBadge(benefit) {
    const { badges } = VALUE;

    for (let i = 0; i < badges.length; i += 1) {
      const [standard, badge] = badges[i];

      if (benefit * -1 >= standard) {
        return badge;
      }
    }

    return MESSAGE.none;
  },
};

export default Badge;
