import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Button } from './Button'

describe('ui-domain/Button', () => {
	it('buttonロールを持っていること', () => {
		render(<Button variant="primary" label="ボタン" onClick={() => { }} />)
		expect(screen.getByRole('button', { name: "ボタン" })).toBeInTheDocument()
	})
})