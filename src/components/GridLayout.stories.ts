import GridLayout from './GridLayout.vue';

export default {
  title: 'layouts/Grid',
  component: GridLayout,
};

const Template = (args: unknown) => {
  return {
    components: { GridLayout },
    setup: () => ({ args }),
    template: `
      <GridLayout v-bind="args">
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
        <div>aaabbbccc</div>
      </GridLayout>
    `,
  }
};

type TemplateType = {
  args: {
    min?: string;
    space?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
