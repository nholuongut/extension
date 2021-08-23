import React, { ReactElement, useEffect, useState } from 'react';
import MarkdownView from 'react-showdown';
import { StoryFn } from '@storybook/addons';
import ContentPage, { ContentPageProps } from './ContentPage';

export default {
  title: 'Website/Organisms/ContentPage',
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    }
  },
  decorators: [
    (getStory: StoryFn<ReactElement>) => (
      <div style={{ margin: '-1rem' }}>
        <>{getStory()}</>
      </div>
    )
  ]
};

export const _ContentPage = (args: ContentPageProps) => {
  const [state, setState] = useState<string>('');
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    fetch(require(`${__dirname}/example.md`))
      .then(res => res.text())
      .then(text => setState(text));
  }, []);

  return (
    <ContentPage
      {...args}
      content={
        <MarkdownView
          // @ts-ignore
          markdown={state}
          options={{
            tables: true,
            emoji: true,
            ghCompatibleHeaderId: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            encodeEmails: true
          }}
        />
      }
    />
  );
};
_ContentPage.args = {
  title: 'Exemple de titre'
};
