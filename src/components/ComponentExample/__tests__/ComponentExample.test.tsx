import React from 'react'
import { IComponentExampleProps, ComponentExample } from '../ComponentExample'
import { render, screen } from '@testing-library/react'

const defaultProps: IComponentExampleProps = {}

const renderComponent = (props: Partial<IComponentExampleProps> = {}) =>
  render(<ComponentExample {...defaultProps} {...props} />)

describe('<ComponentExample />', () => {
  it('should render a ComponentExample', () => {
    renderComponent()

    expect(screen.getByText('Hello world')).toBeVisible()
  })
})
