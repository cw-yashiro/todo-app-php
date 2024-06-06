import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { TextLabel } from "./TextLabel"

describe("ui-domain/TextLabel", () => {
  it("Snapshot: テキストラベルが表示されている", () => {
    const { container } = render(<TextLabel>テキストラベル</TextLabel>)
    expect(container).toMatchSnapshot()
  })
})
