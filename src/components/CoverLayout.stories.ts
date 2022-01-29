import CoverLayout from './CoverLayout.vue';

export default {
  title: 'layouts/Cover',
  component: CoverLayout,
};

const Template = (args: unknown) => {
  return {
    components: { CoverLayout },
    setup: () => ({ args }),
    template: `
      <CoverLayout v-bind="args">
        content
      </CoverLayout>
    `,
  };
};

type TemplateType = {
  args: {
    space?: string;
    minHeight?: string;
    centered?: string;
    noPad?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
