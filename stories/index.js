import React from 'react';

import { storiesOf } from '@storybook/react';

import { Post, PostContent, PostWrapper } from '../components/Post';

import PostHeader from '../components/PostHeader';
import Heading from '../components/Heading';
import Image from '../components/Image';
import Link from '../components/Link';
import Paragraph from '../components/Paragraph';
import Code from '../components/Code';
import Quote from '../components/Quote';
import Text from '../components/Text';
import { UList, UListItem, OList, OListItem } from '../components/List';

const PostDecorator = story =>
  (<PostWrapper>
    <Post>
      {story()}
    </Post>
  </PostWrapper>);

const PostContentDecorator = story =>
  (<PostWrapper>
    <Post>
      <PostContent>
        {story()}
      </PostContent>
    </Post>
  </PostWrapper>);

storiesOf('PostHeader', module)
  .addDecorator(PostDecorator)
  .add('default', () =>
    <PostHeader date="post date" title="Post Title" author="Post Author" position="position" />,
  );

storiesOf('Heading', module)
  .addDecorator(PostContentDecorator)
  .add('default', () => <Heading>Post Content Heading</Heading>);

storiesOf('Link', module)
  .addDecorator(PostContentDecorator)
  .add('default', () => <Link href="https://google.com">Quisque volutpat malesuada velit</Link>);

storiesOf('Paragraph', module)
  .addDecorator(PostContentDecorator)
  .add('default', () =>
    (<Paragraph>
      Nunc at velit quis lectus nonummy eleifend. Curabitur eros. Aenean ligula dolor, gravida
      auctor, auctor et, suscipit in, erat. Sed malesuada, enim ut congue pharetra, massa elit
      convallis pede, ornare scelerisque libero neque ut neque. In at libero. Curabitur molestie.
      Sed vel neque. Proin et dolor ac ipsum elementum malesuada. Praesent id orci. Donec hendrerit.
      In hac habitasse platea dictumst. Aenean sit amet arcu a turpis posuere pretium.
    </Paragraph>),
  );

storiesOf('Quote', module)
  .addDecorator(PostContentDecorator)
  .add('long quote', () =>
    (<Quote author="Quite Author" position="position">
      Nulla mauris odio, vehicula in, condimentum sit amet, tempus id, metus. Donec at nisi sit amet
      felis blandit posuere. Aliquam erat volutpat.
    </Quote>),
  )
  .add('short quote', () =>
    (<Quote author="Quite Author" position="position">
      Aliquam erat volutpat.
    </Quote>),
  );

storiesOf('Code', module)
  .addDecorator(PostContentDecorator)
  .add('long code block', () =>
    (<Code>{`const PostHeaderComponent = (props) => {
  const { date, title, photo, author, position } = props;

  return (
    <PostHeader>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle>
      <PostAuthor src={photo} author={author} position={position} />
    </PostHeader>
  );
};`}</Code>),
  )
  .add('short code block', () =>
    (<Code>
      {'const x = 42;'}
    </Code>),
  );

storiesOf('Image', module)
  .addDecorator(PostContentDecorator)
  .add('default', () =>
    (<Image
      src="http://rcysl.com/wp-content/uploads/2017/02/Pics-Of-Nature-1920x1080.jpg"
      caption="Cras lobortis orci in quam porttitor cursus"
    />),
  );

storiesOf('Text', module)
  .addDecorator(PostContentDecorator)
  .add('default', () =>
    (<Text>
      Aenean dignissim. Curabitur facilisis sem at nisi laoreet placerat. Duis sed ipsum ac nibh
      mattis feugiat.
    </Text>),
  );

storiesOf('UList', module).addDecorator(PostContentDecorator).add('default', () =>
  (<UList>
    <UListItem>
      Proin sed purus. Vivamus lectus ipsum, rhoncus sed, scelerisque sit amet, ultrices in, dolor.
      Aliquam vel magna non nunc ornare bibendum. Sed libero.
    </UListItem>
    <UListItem>Maecenas at est. </UListItem>
  </UList>),
);

storiesOf('OList', module).addDecorator(PostContentDecorator).add('default', () =>
  (<OList>
    <OListItem>
      Proin sed purus. Vivamus lectus ipsum, rhoncus sed, scelerisque sit amet, ultrices in, dolor.
      Aliquam vel magna non nunc ornare bibendum. Sed libero.
    </OListItem>
    <OListItem>Maecenas at est. </OListItem>
  </OList>),
);
