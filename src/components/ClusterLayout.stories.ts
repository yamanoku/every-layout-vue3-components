import ClusterLayout from './ClusterLayout.vue';

export default {
  title: 'layouts/Cluster',
  component: ClusterLayout,
};

const Template = (args: unknown) => {
  return {
    components: { ClusterLayout },
    setup: () => ({ args }),
    template: `
      <ClusterLayout v-bind="args">
        <div>aaabbbccc</div>
        <div>aaa</div>
        <div>aaabbbcccdddeee</div>
        <div>aaa</div>
        <div>aaabbb</div>
        <div>aaabbbcccddd</div>
        <div>aaa</div>
        <div>aaabbb</div>
        <div>aaa</div>
      </ClusterLayout>
    `,
  }
};

type TemplateType = {
  args: {
    space?: string;
    justify?: string;
    align?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
