import nonTsUtil from 'spec-utils/nonTsUtil';
import otherUtil from './otherUtil';

export default () => {
  otherUtil();
  nonTsUtil();
  console.log('mocking API');
}
