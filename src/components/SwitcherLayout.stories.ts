import SwitcherLayout from './SwitcherLayout.vue';

export default {
  title: 'layouts/Switcher',
  component: SwitcherLayout,
};

const Template = (args: unknown) => {
  return {
    components: { SwitcherLayout },
    setup: () => ({ args }),
    template: `
      <SwitcherLayout v-bind="args">
        <div>aaa</div>
        <div>bbb</div>
        <div>ccc</div>
        <div>ddd</div>
      </SwitcherLayout>
    `,
  }
};

type TemplateType = {
  args: {
    space?: string;
    threshold?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
