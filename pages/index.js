import React from 'react';

import { Post, PostContent, PostWrapper } from '../components/Post';
import PostHeader from '../components/PostHeader';
import Heading from '../components/Heading';
import Image from '../components/Image';
import Link from '../components/Link';
import Paragraph from '../components/Paragraph';
import Text from '../components/Text';
import { UList, UListItem, OList, OListItem } from '../components/List';

export default () => (
  <PostWrapper>
    <Post>
      <PostHeader
        date="14 may 2017"
        title="After building my first React Native app, I’m now convinced it’s the future."
      />
      <PostContent>
        <Paragraph>
            After a few weeks of playing around with React Native, I just came
            away
            with my first real mobile app. It’s fairly simple, but it only took me
            a
            few days to build and I had a blast doing it. I created a mobile app
            for
            my favorite food blog, Smitten Kitchen. The app allows users to search
            through a database of over 1,000 recipes, and concisely view the
            necessary ingredients and directions for each one. Users can also
            bookmark recipes and easily{' '}
          <Link href="https://google.com">share them with a friend</Link>.
          </Paragraph>

        <Paragraph>
            I’m still waiting for permission from the blog to publish this app,
            but
            you can check out all of the code here. Note that the url for my API
            has
            been stubbed for the time being out of respect for Smitten Kitchen.
          </Paragraph>

        <Heading>React Native isn’t going away any time soon</Heading>

        <Paragraph>
            A common reservation among developers is that they don’t want to
            invest
            the time to learn a new technology if there’s a strong chance it will
            become obsolete in the near future. Even from my relatively minimal
            experience with React Native, I’ve found it to be an enormously
            powerful
            tool. I am confident it will be used in the years to come.
          </Paragraph>

        <Image
          src="http://rcysl.com/wp-content/uploads/2017/02/Pics-Of-Nature-1920x1080.jpg"
          caption="After a few weeks of playing around with React Native, I just came away with my first real mobile"
        />

        <Text>
            After a few weeks of playing around with React Native, I just came:
          </Text>

        <UList>
          <UListItem>
              After a few weeks of playing asdk qjqwje hajhkf hahsflq ahshfasfas
            </UListItem>
          <UListItem>After a few weeks of playing</UListItem>
        </UList>

        <Text>
            After a few weeks of playing around with React Native, I just came:
          </Text>

        <OList>
          <OListItem>
              After a few weeks of playing asdk qjqwje hajhkf hahsflq ahshfasfas
            </OListItem>
          <OListItem>After a few weeks of playing</OListItem>
        </OList>

        <Heading>Heading</Heading>
        <Paragraph>paragraph</Paragraph>
        <Text>text</Text>
      </PostContent>
    </Post>
  </PostWrapper>
  );
