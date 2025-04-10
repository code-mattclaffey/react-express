import { Fragment } from 'react'

// Mapper function to parse the template string
export const parseTemplateString = (
  template: string,
  values: Record<string, JSX.Element>,
) => {
  // Regular expression to match the placeholders like {{price}} or {{name}}
  return template.split(/({{[^}]+}})/g).map((part, i) => {
    // Check if this part is a placeholder
    if (part.match(/{{[^}]+}}/)) {
      // Extract the key by removing {{ }}
      const key = part.replace(/{{|}}/g, '').trim()

      // If the key exists in the values object, return the corresponding JSX element
      if (values[key]) {
        // eslint-disable-next-line react/no-array-index-key
        return <Fragment key={i}>{values[key]}</Fragment>
      }

      // If the key doesn't exist in values, return the placeholder text as is
      return part
    }

    // If it's not a placeholder, return the part as it is
    return part
  })
}
