import React from 'react';
import { Main } from '@strapi/design-system';
import { Layout, HeaderLayout, ContentLayout } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';
import { Box } from '@strapi/design-system';

const Settings = () => {
  return (
    <Main>
      <Layout>
        <HeaderLayout
          title="Hello Plugin"
          subtitle="Welcome to the Hello Plugin settings"
          as="h2"
        />
        <ContentLayout>
          <Box padding={8}>
            <Typography variant="alpha">Hello Plugin</Typography>
          </Box>
        </ContentLayout>
      </Layout>
    </Main>
  );
};

export default Settings;
