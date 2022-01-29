import SidebarLayout from './SidebarLayout.vue';

export default {
  title: 'layouts/Sidebar',
  component: SidebarLayout,
};

const Template = (args: unknown) => {
  return {
    components: { SidebarLayout },
    setup: () => ({ args }),
    template: `
      <SidebarLayout v-bind="args">
        <div>
          aaa
        </div>
        <template v-slot:sidebar>
          sidearea
        </template>
      </SidebarLayout>
    `,
  }
};

type TemplateType = {
  args: {
    side?: 'left' | 'right';
    sideWidth?: string;
    contentMin?: string;
    space?: string;
    noStretch?: boolean;
  };
};

const createStory = () => Template.bind({}) as unknown as TemplateType;
export const LeftLayout = createStory();
LeftLayout.args = {
  side: 'left'
};

export const RightLayout = createStory();
RightLayout.args = {
  side: 'right'
};
