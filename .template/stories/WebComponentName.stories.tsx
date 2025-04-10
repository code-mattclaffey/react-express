import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/ComponentName/WebComponents',
  parameters: {
    layout: 'padded',
  },
  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
  /* @ts-expect-error */
  component: (args) => <component-name {...args} />,
}

export default meta

export const Default: StoryObj = {
  args: {},
}
