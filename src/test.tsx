import { screen, render } from '@testing-library/react'
import React from 'react'
import App from '.'

describe('<Main />', () => {
  it('should render msg Hello World', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument()
  })
})
