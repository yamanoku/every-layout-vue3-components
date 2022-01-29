import StackLayout from './StackLayout.vue';

export default {
  title: 'layouts/Stack',
  component: StackLayout,
};

const Template = (args: unknown) => {
  return {
    components: { StackLayout },
    setup: () => ({ args }),
    template: `
      <StackLayout v-bind="args">
        <div>aaa</div>
        <div>bbb</div>
        <div>
          <div>aaa</div>
          <div>bbb</div>
        </div>
        <div>ccc</div>
        <div>ddd</div>
      </StackLayout>
    `,
  }
};

type TemplateType = {
  args: {
    space?: string;
    recursive?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};

export const Recursive = createStory();
Recursive.args = {
  recursive: true,
};
