import React from 'react'
import { IComponentNameProps, ComponentName } from '../ComponentName'
import { render, screen } from '@testing-library/react'

const defaultProps: IComponentNameProps = {}

const renderComponent = (props: Partial<IComponentNameProps> = {}) =>
  render(<ComponentName {...defaultProps} {...props} />)

describe('<ComponentName />', () => {
  it('should render a ComponentName', () => {
    renderComponent()

    expect(screen.getByText('Hello world')).toBeVisible()
  })
})
