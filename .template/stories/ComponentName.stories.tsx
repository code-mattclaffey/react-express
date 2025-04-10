/* eslint-disable react/no-danger */
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName, IComponentNameProps } from '../ComponentName'

const meta: Meta = {
  title: 'Components/ComponentName/React',
  component: ComponentName,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ComponentName>

export default meta

export const Default: StoryObj<IComponentNameProps> = {
  args: {},
}
