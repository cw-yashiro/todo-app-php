import { describe, it, expect } from "vitest"
import { screen, render } from '@testing-library/react'
import { TextArea } from "./TextArea"

describe('ui-domain/TextArea', () => {
  it("[role='textbox']", () => {
    render(<TextArea />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})

describe('ui-domain/TextArea', () => {
  it("[role='textbox'][desabled='true']", () => {
    render(<TextArea disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})