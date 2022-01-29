import ReelLayout from './ReelLayout.vue';

export default {
  title: 'layouts/Reel',
  component: ReelLayout,
};

const Template = (args: unknown) => {
  return {
    components: { ReelLayout },
    setup: () => ({ args }),
    template: `
      <ReelLayout v-bind="args">
        <div>aaabbbccc</div>
        <div>aaa</div>
        <div>aaabbbcccdddeee</div>
        <div>aaa</div>
        <div>aaabbb</div>
        <div>aaabbbcccddd</div>
        <div>aaa</div>
        <div>aaabbb</div>
        <div>aaa</div>
      </ReelLayout>
    `,
  }
};

type TemplateType = {
  args: {
    itemWidth?: string;
    space?: string;
    height?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};