import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pill from './ui/Pill'

describe('Pill', () => {
  it('renders without crashing', () => {
    render(<Pill text="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
