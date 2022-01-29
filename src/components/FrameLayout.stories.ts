import FrameLayout from './FrameLayout.vue';

export default {
  title: 'layouts/Frame',
  component: FrameLayout,
};

const Template = (args: unknown) => {
  return {
    components: { FrameLayout },
    setup: () => ({ args }),
    template: `
      <FrameLayout v-bind="args">
        <img src="https://placehold.jp/640x480.png" alt="">
      </FrameLayout>
    `,
  };
};

type TemplateType = {
  args: {
    numerator?: string;
    denominator?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
