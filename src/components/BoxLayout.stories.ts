import BoxLayout from './BoxLayout.vue';

export default {
  title: 'layouts/Box',
  component: BoxLayout,
};

const Template = (args: unknown) => {
  return {
    components: { BoxLayout },
    setup: () => ({ args }),
    template: `
      <BoxLayout v-bind="args">
        aaa
      </BoxLayout>
    `,
  };
};

type TemplateType = {
  args: {
    padding?: string;
    borderWidth?: number;
    invert?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};

export const Invert = createStory();
Invert.args = {
  invert: true,
};
