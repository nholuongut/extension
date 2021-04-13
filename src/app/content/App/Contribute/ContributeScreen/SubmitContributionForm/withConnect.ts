import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { change } from 'redux-form';
import { ContentState } from 'app/content/store';
import { getFlatFormErrors } from 'app/content/selectors';
import { form } from './withReduxForm';

export default connect(
  (state: ContentState) => ({
    errors: getFlatFormErrors(form)(state)
  }),
  {
    onUrlChange: (url: string) => change('contribution', 'url', url),
    onSubmit: () => push('/contribute/preview')
  }
);
