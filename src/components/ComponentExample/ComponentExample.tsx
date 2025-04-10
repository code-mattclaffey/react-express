// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { HTMLAttributes } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from './ComponentExample.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IComponentExampleProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ComponentExample = ({ ...rest }: IComponentExampleProps) => {
  return (
    <div {...rest} className={styles.container}>
      <p>Hello world</p>
    </div>
  )
}
