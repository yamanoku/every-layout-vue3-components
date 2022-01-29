import ImposterLayout from './ImposterLayout.vue';

export default {
  title: 'layouts/Imposter',
  component: ImposterLayout,
};

const Template = (args: unknown) => {
  return {
    components: { ImposterLayout },
    setup: () => ({ args }),
    template: `
      <ImposterLayout v-bind="args">
        aaa
      </ImposterLayout>
    `,
  };
};

type TemplateType = {
  args: {
    margin?: string;
    fixed?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};
