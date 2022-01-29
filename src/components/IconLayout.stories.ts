import IconLayout from './IconLayout.vue';

export default {
  title: 'layouts/Icon',
  component: IconLayout,
};

const Template = (args: unknown) => {
  return {
    components: { IconLayout },
    setup: () => ({ args }),
    template: `
      <div style="font-size: .75rem">
        <IconLayout>
          icon text
        </IconLayout>
      </div>
      <div>
        <IconLayout>
          icon text
        </IconLayout>
      </div>
      <div style="font-size: 1.5rem">
        <IconLayout>
          icon text
        </IconLayout>
      </div>
    `,
  }
};

type TemplateType = {
  args: {
    space?: string;
    svgHref?: string;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const Default = createStory();
Default.args = {};