import { reduxForm } from 'redux-form';
import { Contribution } from 'app/lmem/notice';
import validate from 'app/lmem/contribution/validateForm';
import { form } from '../ContributeScreen/SubmitContributionForm/withReduxForm';
import { PreviewScreenOwnProps } from './PreviewScreen';

export default reduxForm<Contribution, PreviewScreenOwnProps>({
  form,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
});
