import { render, screen } from '@testing-library/react'

import { parseTemplateString } from '../index'

describe('parseTemplateString', () => {
  it('replaces single placeholder with JSX element', () => {
    const template = 'Hello, {{name}}!'
    const values = { name: <strong>John Doe</strong> }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the text content is correct
    expect(screen.getByText('John Doe')).toBeInTheDocument()

    // Assert that the correct element is used (strong in this case)
    expect(screen.getByText('John Doe').tagName).toBe('STRONG')
  })

  it('replaces multiple placeholders with JSX elements', () => {
    const template = 'Hello, {{name}}! Your total cost is {{price}}.'
    const values = {
      name: <strong>John Doe</strong>,
      price: <span style={{ color: 'green', fontWeight: 'bold' }}>$6000</span>,
    }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the text content is correct
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('$6000')).toBeInTheDocument()

    // Assert that the correct elements are used (strong and span in this case)
    expect(screen.getByText('John Doe').tagName).toBe('STRONG')
    expect(screen.getByText('$6000').tagName).toBe('SPAN')
  })

  it('leaves text unchanged when placeholder is missing in values', () => {
    const template = 'Hello, {{name}}!'
    const values = {}

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the original placeholder is still in the text content
    expect(screen.getByText('Hello, {{name}}!')).toBeInTheDocument()
  })

  it('handles multiple identical placeholders correctly', () => {
    const template = 'Name: {{name}}, again: {{name}}'
    const values = { name: <strong>John Doe</strong> }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that both placeholders have been replaced correctly
    const elements = screen.getAllByText('John Doe')
    expect(elements.length).toBe(2)
    elements.forEach((element) => {
      expect(element.tagName).toBe('STRONG')
    })
  })

  it('handles a mix of placeholders and static text', () => {
    const template = 'Your order {{orderId}} for {{item}} has been processed.'
    const values = {
      orderId: <strong>#12345</strong>,
      item: <em>Apple iPhone</em>,
    }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that each part of the text is correctly rendered
    expect(screen.getByText('#12345')).toBeInTheDocument()
    expect(screen.getByText('#12345').tagName).toBe('STRONG')

    expect(screen.getByText('Apple iPhone')).toBeInTheDocument()
    expect(screen.getByText('Apple iPhone').tagName).toBe('EM')

    expect(screen.getByText(/Your order/)).toBeInTheDocument()
    expect(screen.getByText(/has been processed./)).toBeInTheDocument()
  })

  it('ignores unmatched placeholders and retains them in the output', () => {
    const template = 'Welcome, {{username}}! Your role is {{role}}.'
    const values = { username: <strong>Alice</strong> }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the matched placeholder is replaced and unmatched ones are left intact
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Alice').tagName).toBe('STRONG')
    expect(screen.getByText(/Your role is {{role}}./)).toBeInTheDocument()
  })

  it('handles placeholders with special characters', () => {
    const template = 'Special characters {{price$}} and {{user_name}}'
    const values = {
      price$: <strong>$100</strong>,
      user_name: <em>John_Doe</em>,
    }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that placeholders with special characters are replaced correctly
    expect(screen.getByText('$100')).toBeInTheDocument()
    expect(screen.getByText('$100').tagName).toBe('STRONG')

    expect(screen.getByText('John_Doe')).toBeInTheDocument()
    expect(screen.getByText('John_Doe').tagName).toBe('EM')
  })

  it('handles empty string as template', () => {
    const template = ''
    const values = { name: <strong>John Doe</strong> }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the rendered output is empty
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })

  it('handles template with no placeholders', () => {
    const template = 'This is a static string with no placeholders.'
    const values = { name: <strong>John Doe</strong> }

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the static text is rendered correctly
    expect(
      screen.getByText('This is a static string with no placeholders.'),
    ).toBeInTheDocument()
  })

  it('handles template with placeholders but empty values', () => {
    const template = 'This has {{placeholder}} but no values.'
    const values = {}

    render(<div>{parseTemplateString(template, values)}</div>)

    // Assert that the placeholder is left intact
    expect(
      screen.getByText('This has {{placeholder}} but no values.'),
    ).toBeInTheDocument()
  })
})
