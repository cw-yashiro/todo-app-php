import { describe, it, expect } from "vitest"
import { screen, render } from "@testing-library/react"
import { Button } from "./Button"

describe("ui-domain/Button", () => {
  it("buttonロールを持っていること", () => {
    render(<Button>ボタン</Button>)
    expect(screen.getByRole("button", { name: "ボタン" })).toBeInTheDocument()
  })

  it("buttonロールを持っていて、非活性化していること", () => {
    render(<Button disabled>ボタン</Button>)
    expect(screen.getByRole("button", { name: "ボタン" })).toBeDisabled()
  })

  it("Snapshot: ボタンラベルが表示されている", () => {
    const { container } = render(<Button>ボタンラベル</Button>)
    expect(container).toMatchSnapshot()
  })
})
