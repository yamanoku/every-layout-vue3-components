<template>
  <CoverLayout>
    <SidebarLayout>
      <template v-slot:sidebar>
        <IconLayout>yamanoku</IconLayout>
      </template>
      <StackLayout>
        <BoxLayout :invert="true">
          <CenterLayout :gutters="100">
            <IconLayout>CenterLayout</IconLayout>
          </CenterLayout>
        </BoxLayout>
        <BoxLayout>
          <SwitcherLayout>
            <BoxLayout>aaa</BoxLayout>
            <BoxLayout>bbb</BoxLayout>
            <BoxLayout>ccc</BoxLayout>
          </SwitcherLayout>
        </BoxLayout>
        <BoxLayout>
          <GridLayout>
            <BoxLayout>grid-item 1</BoxLayout>
            <BoxLayout>grid-item 2</BoxLayout>
            <BoxLayout>grid-item 3</BoxLayout>
            <BoxLayout>grid-item 4</BoxLayout>
            <BoxLayout>grid-item 5</BoxLayout>
            <BoxLayout>grid-item 6</BoxLayout>
            <BoxLayout>grid-item 7</BoxLayout>
            <BoxLayout>grid-item 8</BoxLayout>
            <BoxLayout>grid-item 9</BoxLayout>
          </GridLayout>
        </BoxLayout>
        <BoxLayout>
          <FrameLayout>
            <img src="./assets/logo.png" alt="Vue Logo">
          </FrameLayout>
        </BoxLayout>
        <ImposterLayout>
          Imposter Content
        </ImposterLayout>
      </StackLayout>
    </SidebarLayout>
  </CoverLayout>
</template>

<script>
import StackLayout from './components/StackLayout.vue'
import BoxLayout from './components/BoxLayout.vue'
import CoverLayout from './components/CoverLayout.vue'
import GridLayout from './components/GridLayout.vue'
import CenterLayout from './components/CenterLayout.vue'
import FrameLayout from './components/FrameLayout.vue'
import ImposterLayout from './components/ImposterLayout.vue'
import SidebarLayout from './components/SidebarLayout.vue'
import SwitcherLayout from './components/SwitcherLayout.vue'
import IconLayout from './components/IconLayout.vue'

export default {
  name: 'App',
  components: {
    StackLayout,
    BoxLayout,
    CoverLayout,
    CenterLayout,
    FrameLayout,
    GridLayout,
    ImposterLayout,
    SidebarLayout,
    SwitcherLayout,
    IconLayout,
  }
}
</script>
