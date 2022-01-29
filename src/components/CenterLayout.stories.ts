import CenterLayout from './CenterLayout.vue';

export default {
  title: 'layouts/Center',
  component: CenterLayout,
};

const Template = (args: unknown) => {
  return {
    components: { CenterLayout },
    setup: () => ({ args }),
    template: `
      <CenterLayout v-bind="args">
        aaa
      </CenterLayout>
    `,
  }
};

type TemplateType = {
  args: {
    max?: string;
    andText?: boolean;
    gutters?: number;
    intrinsic?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};

export const AndText = createStory();
AndText.args = {
  andText: true,
};

export const Intrinsic = createStory();
Intrinsic.args = {
  intrinsic: true,
};
