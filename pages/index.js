import React from 'react';

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

export default () => {
  const codeBlock = `const PostHeaderComponent = (props) => {
  const { date, title, photo, author, position } = props;

  return (
    <PostHeader>
      <PostDate>{date}</PostDate>
      <PostTitle>{title}</PostTitle>
      <PostAuthor src={photo} author={author} position={position} />
    </PostHeader>
  );
};`;

  return (
    <PostWrapper>
      <Post>
        <PostHeader date="post date" title="Post Title" author="Post Author" position="position" />
        <PostContent>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius
            facilisis eros. Sed erat. In in velit quis arcu ornare laoreet. Curabitur adipiscing
            luctus massa. Integer ut purus ac augue commodo commodo. Nunc nec mi eu justo tempor
            consectetuer. Etiam vitae nisl. In dignissim lacus ut ante. Cras elit lectus, bibendum
            a, adipiscing vitae, commodo et, dui. Ut tincidunt tortor. Donec nonummy, enim in
            lacinia pulvinar, velit tellus scelerisque augue, ac posuere libero urna eget neque.
            Cras ipsum. Vestibulum pretium, lectus nec venenatis volutpat, purus lectus ultrices
            risus, a condimentum risus mi et quam. Pellentesque auctor fringilla neque. Duis eu
            massa ut lorem iaculis vestibulum. Maecenas facilisis elit sed justo.{' '}
            <Link href="https://google.com">Quisque volutpat malesuada velit</Link>.
          </Paragraph>

          <Heading>Post Content Heading</Heading>

          <Paragraph>
            Nunc at velit quis lectus nonummy eleifend. Curabitur eros. Aenean ligula dolor, gravida
            auctor, auctor et, suscipit in, erat. Sed malesuada, enim ut congue pharetra, massa elit
            convallis pede, ornare scelerisque libero neque ut neque. In at libero. Curabitur
            molestie. Sed vel neque. Proin et dolor ac ipsum elementum malesuada. Praesent id orci.
            Donec hendrerit. In hac habitasse platea dictumst. Aenean sit amet arcu a turpis posuere
            pretium.
          </Paragraph>

          <Quote author="Quite Author" position="position">
            Nulla mauris odio, vehicula in, condimentum sit amet, tempus id, metus. Donec at nisi
            sit amet felis blandit posuere. Aliquam erat volutpat.
          </Quote>

          <Quote author="Quite Author" position="position">
            Aliquam erat volutpat.
          </Quote>

          <Paragraph>
            Nunc at velit quis lectus nonummy eleifend. Curabitur eros. Aenean ligula dolor, gravida
            auctor, auctor et, suscipit in, erat. Sed malesuada, enim ut congue pharetra, massa elit
            convallis pede, ornare scelerisque libero neque ut neque. In at libero. Curabitur
            molestie. Sed vel neque. Proin et dolor ac ipsum elementum malesuada. Praesent id orci.
            Donec hendrerit. In hac habitasse platea dictumst. Aenean sit amet arcu a turpis posuere
            pretium.
          </Paragraph>

          <Code>
            {codeBlock}
          </Code>

          <Code>
            {'const x = 42;'}
          </Code>

          <Paragraph>
            Nunc at velit quis lectus nonummy eleifend. Curabitur eros. Aenean ligula dolor, gravida
            auctor, auctor et, suscipit in, erat. Sed malesuada, enim ut congue pharetra, massa elit
            convallis pede, ornare scelerisque libero neque ut neque. In at libero. Curabitur
            molestie. Sed vel neque. Proin et dolor ac ipsum elementum malesuada. Praesent id orci.
            Donec hendrerit. In hac habitasse platea dictumst. Aenean sit amet arcu a turpis posuere
            pretium.
          </Paragraph>

          <Image
            src="http://rcysl.com/wp-content/uploads/2017/02/Pics-Of-Nature-1920x1080.jpg"
            caption="Cras lobortis orci in quam porttitor cursus"
          />

          <Text>
            Aenean dignissim. Curabitur facilisis sem at nisi laoreet placerat. Duis sed ipsum ac
            nibh mattis feugiat:
          </Text>

          <UList>
            <UListItem>
              Proin sed purus. Vivamus lectus ipsum, rhoncus sed, scelerisque sit amet, ultrices in,
              dolor. Aliquam vel magna non nunc ornare bibendum. Sed libero.
            </UListItem>
            <UListItem>Maecenas at est. </UListItem>
          </UList>

          <Text>
            Aenean dignissim. Curabitur facilisis sem at nisi laoreet placerat. Duis sed ipsum ac
            nibh mattis feugiat:
          </Text>

          <OList>
            <OListItem>
              Proin sed purus. Vivamus lectus ipsum, rhoncus sed, scelerisque sit amet, ultrices in,
              dolor. Aliquam vel magna non nunc ornare bibendum. Sed libero.
            </OListItem>
            <OListItem>Maecenas at est. </OListItem>
          </OList>
        </PostContent>
      </Post>
    </PostWrapper>
  );
};
