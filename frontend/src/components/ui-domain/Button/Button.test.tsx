import { describe, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { Button } from "./Button"

describe("ui-domain/Button", () => {
  it("buttonロールを持っていること", () => {
    render(<Button label="ボタン" />)
    expect(screen.getByRole("button", { name: "ボタン" })).toBeInTheDocument()
  })

  it("buttonロールを持っていて、非活性化していること", () => {
    render(<Button label="ボタン" disabled />)
    expect(screen.getByRole("button", { name: "ボタン" })).toBeDisabled()
  })
})
