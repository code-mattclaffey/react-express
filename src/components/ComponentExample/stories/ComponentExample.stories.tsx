/* eslint-disable react/no-danger */
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentExample, IComponentExampleProps } from '../ComponentExample'

const meta: Meta = {
  title: 'Components/ComponentExample/React',
  component: ComponentExample,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ComponentExample>

export default meta

export const Default: StoryObj<IComponentExampleProps> = {
  args: {},
}
